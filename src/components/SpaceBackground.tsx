import { useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import "./SpaceBackground.css";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  phase: number;
  color: string;
};

function randomGenerator(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

// Generate a small, reusable cloud texture once. No images, requests or libraries.
function createNebula() {
  const texture = document.createElement("canvas");
  texture.width = 384;
  texture.height = 288;
  const context = texture.getContext("2d");
  if (!context) return texture;
  const random = randomGenerator(1207);
  const noise = Float32Array.from({ length: 4096 }, random);
  const sample = (x: number, y: number) => {
    const ix = Math.floor(x),
      iy = Math.floor(y);
    const fx = x - ix,
      fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx),
      sy = fy * fy * (3 - 2 * fy);
    const a = noise[(iy & 63) * 64 + (ix & 63)];
    const b = noise[(iy & 63) * 64 + ((ix + 1) & 63)];
    const c = noise[((iy + 1) & 63) * 64 + (ix & 63)];
    const d = noise[((iy + 1) & 63) * 64 + ((ix + 1) & 63)];
    return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
  };
  const pixels = context.createImageData(texture.width, texture.height);
  for (let y = 0; y < texture.height; y++) {
    for (let x = 0; x < texture.width; x++) {
      const u = x / texture.width,
        v = y / texture.height;
      let cloud = 0,
        frequency = 3,
        amplitude = 0.55;
      for (let octave = 0; octave < 5; octave++) {
        cloud += sample(u * frequency + 9, v * frequency + 17) * amplitude;
        frequency *= 2.15;
        amplitude *= 0.5;
      }
      const band = Math.exp(
        -Math.pow((v - 0.7 + u * 0.5 + Math.sin(u * 7) * 0.12) * 2.8, 2),
      );
      const gas = Math.pow(cloud, 2.5) * band * 1.6;
      const purple = Math.exp(-Math.pow((u - 0.22) * 2.3, 2));
      const pink = Math.exp(-Math.pow((u - 0.6) * 3, 2));
      const orange = Math.exp(-Math.pow((u - 0.96) * 3.7, 2));
      const index = (y * texture.width + x) * 4;
      pixels.data[index] = 8 + gas * (60 * purple + 100 * pink + 155 * orange);
      pixels.data[index + 1] =
        4 + gas * (18 * purple + 13 * pink + 47 * orange);
      pixels.data[index + 2] =
        23 + gas * (133 * purple + 79 * pink + 24 * orange);
      pixels.data[index + 3] = 255;
    }
  }
  context.putImageData(pixels, 0, 0);
  return texture;
}

// Reuse the same painted cloud texture when navigating between themed pages.
let nebulaTexture: HTMLCanvasElement | undefined;

export default function SpaceBackground({
  paused,
  onPausedChange,
}: {
  paused: boolean;
  onPausedChange: (paused: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(false);
  const requestDrawRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    requestDrawRef.current?.();
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;
    const nebula = (nebulaTexture ??= createNebula());
    const random = randomGenerator(2409);
    const colors = ["#fff7ff", "#e1c4ff", "#f9afd9", "#ffc194", "#b6a1ff"];
    const stars: Star[] = Array.from({ length: 1800 }, () => ({
      x: (random() - 0.5) * 4200,
      y: (random() - 0.5) * 3200,
      z: random() * 1800,
      size: 0.55 + random() * 1.8,
      phase: random() * Math.PI * 2,
      color: colors[Math.floor(random() * colors.length)],
    }));
    let width = 1,
      height = 1,
      pixelRatio = 1,
      focal = 1,
      count = stars.length;
    let frame = 0,
      resizeFrame = 0,
      lastTime = 0,
      elapsed = 0,
      disposed = false;
    let targetTravel = window.scrollY * 0.48,
      travel = targetTravel;
    let pointerX = 0,
      pointerY = 0,
      driftX = 0,
      driftY = 0;
    let previousScroll = window.scrollY;
    const render = (time: number) => {
      frame = 0;
      if (disposed || document.hidden) {
        lastTime = 0;
        return;
      }
      const delta = lastTime ? Math.min(time - lastTime, 64) / 1000 : 0;
      lastTime = pausedRef.current ? 0 : time;
      const previousTravel = travel;
      if (!pausedRef.current) {
        elapsed += delta;
        const smoothing = 1 - Math.exp(-delta * 7);
        travel += (targetTravel - travel) * smoothing;
        driftX += (pointerX - driftX) * smoothing;
        driftY += (pointerY - driftY) * smoothing;
      }
      // Preserve trail length and intensity at 60/120Hz, matching the original
      // 30Hz motion. Drawing follows the display's animation frames directly.
      const velocity = delta > 0 ? (travel - previousTravel) / (delta * 30) : 0;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.globalAlpha = 1;
      // The cloud layer moves much more slowly than the foreground stars.
      const cloudScale = 1.14 + Math.sin(travel / 4200) * 0.035;
      const cloudX =
        (-width * (cloudScale - 1)) / 2 +
        Math.sin(travel / 1900) * width * 0.025;
      const cloudY =
        (-height * (cloudScale - 1)) / 2 +
        Math.sin(travel / 1500) * height * 0.035;
      context.drawImage(
        nebula,
        cloudX,
        cloudY,
        width * cloudScale,
        height * cloudScale,
      );
      const vanishingX = width * 0.5 + driftX;
      const vanishingY = height * 0.46 + driftY;
      const depthOffset = travel % 1800;
      for (let i = 0; i < count; i++) {
        const star = stars[i];
        const depth = 90 + ((star.z - depthOffset + 1800) % 1800);
        const scale = focal / depth;
        const x = vanishingX + star.x * scale;
        const y = vanishingY + star.y * scale;
        if (x < -15 || x > width + 15 || y < -15 || y > height + 15) continue;
        const nearFade = Math.min(1, (depth - 90) / 130);
        const farFade = Math.min(1, (1890 - depth) / 150);
        const radius = Math.min(2.5, Math.max(0.65, star.size * scale * 0.76));
        const twinkle = 0.85 + Math.sin(elapsed * 0.65 + star.phase) * 0.12;
        context.globalAlpha =
          Math.min(0.9, (0.45 + scale * 0.28) * twinkle) * nearFade * farFade;
        context.fillStyle = star.color;
        if (i % 7 === 0 && radius > 1) {
          const opacity = context.globalAlpha;
          context.globalAlpha *= 0.12;
          context.beginPath();
          context.arc(x, y, radius * 3.5, 0, Math.PI * 2);
          context.fill();
          context.globalAlpha = opacity;
        }
        // Short radial trails only while travelling; no flashing or scroll capture.
        if (!pausedRef.current && Math.abs(velocity) > 1 && depth > 220) {
          const priorScale = focal / Math.max(90, depth + velocity * 2);
          const dx = star.x * (priorScale - scale),
            dy = star.y * (priorScale - scale);
          const length = Math.hypot(dx, dy);
          const clamp = Math.min(1, 18 / Math.max(length, 1));
          context.strokeStyle = star.color;
          context.lineWidth = Math.max(0.5, radius * 0.65);
          context.beginPath();
          context.moveTo(x + dx * clamp, y + dy * clamp);
          context.lineTo(x, y);
          context.stroke();
        }
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
        if (i % 19 === 0 && radius > 0.8) {
          context.globalAlpha *= 0.35;
          context.fillRect(x - radius * 3, y - 0.35, radius * 6, 0.7);
          context.fillRect(x - 0.35, y - radius * 3, 0.7, radius * 6);
        }
      }
      context.globalAlpha = 1;
      if (!pausedRef.current) frame = requestAnimationFrame(render);
    };
    const requestDraw = () => {
      if (!frame && !disposed && !document.hidden)
        frame = requestAnimationFrame(render);
    };
    requestDrawRef.current = requestDraw;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      focal = Math.max(width, height) * 0.72;
      count = width < 680 ? 900 : stars.length;
      const nextWidth = Math.round(width * pixelRatio);
      const nextHeight = Math.round(height * pixelRatio);
      if (canvas.width !== nextWidth) canvas.width = nextWidth;
      if (canvas.height !== nextHeight) canvas.height = nextHeight;
      requestDraw();
    };
    const queueResize = () => {
      if (!resizeFrame) resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        resize();
      });
    };
    const onScroll = () => {
      const current = window.scrollY;
      // Scroll while paused does not get replayed when motion resumes.
      if (!pausedRef.current) targetTravel += (current - previousScroll) * 0.48;
      previousScroll = current;
      if (!pausedRef.current) requestDraw();
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch" || pausedRef.current) return;
      pointerX = (event.clientX / width - 0.5) * 26;
      pointerY = (event.clientY / height - 0.5) * 18;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
      } else requestDraw();
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => onPausedChange(motion.matches);
    window.addEventListener("resize", queueResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);
    resize();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      requestDrawRef.current = null;
      window.removeEventListener("resize", queueResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
    };
  }, [onPausedChange]);

  return (
    <>
      <div className="space-background" aria-hidden="true">
        <canvas className="space-starfield" ref={canvasRef} />
        <div className="space-vignette" />
      </div>
      <button
        className="space-motion-toggle"
        type="button"
        onClick={() => onPausedChange(!paused)}
        aria-label={paused ? "Resume space motion" : "Pause space motion"}
        aria-pressed={paused}
      >
        {paused ? (
          <Play size={14} aria-hidden="true" />
        ) : (
          <Pause size={14} aria-hidden="true" />
        )}
        <span>{paused ? "Resume space" : "Pause space"}</span>
      </button>
    </>
  );
}
