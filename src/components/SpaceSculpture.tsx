import { useEffect, useRef, useState } from "react";
import { Pause, Play, Rotate3D } from "lucide-react";

// A small native WebGL scene. No model downloads or rendering-library bundle.
const vertexSource = `
  attribute vec3 aPosition;
  attribute vec3 aNormal;
  uniform vec3 uRotation;
  uniform vec3 uOffset;
  uniform vec2 uOrbit;
  uniform float uAspect;
  varying vec3 vNormal;
  varying vec3 vPosition;
  mat3 rotation(vec3 r) {
    float a=cos(r.x), b=sin(r.x), c=cos(r.y), d=sin(r.y), e=cos(r.z), f=sin(r.z);
    return mat3(c*e,c*f,-d, b*d*e-a*f,b*d*f+a*e,b*c, a*d*e+b*f,a*d*f-b*e,a*c);
  }
  void main() {
    mat3 local = rotation(uRotation);
    mat3 orbit = rotation(vec3(uOrbit.y, uOrbit.x, -0.32));
    vec3 p = orbit * (local * aPosition + uOffset);
    vNormal = orbit * local * aNormal;
    p.z -= 6.5;
    vPosition = p;
    gl_Position = vec4(p.x * 2.35 / uAspect, p.y * 2.35, -1.002*p.z-0.2002, -p.z);
  }
`;
const fragmentSource = `
  precision mediump float;
  uniform vec3 uColor;
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vec3 n = normalize(vNormal);
    vec3 view = normalize(-vPosition);
    vec3 light = normalize(vec3(-2.0,3.5,4.0));
    vec3 reflection = reflect(-view,n);
    float diffuse = max(dot(n,light),0.0);
    float spec = pow(max(dot(n,normalize(light+view)),0.0),65.0);
    float broad = pow(max(dot(n,normalize(vec3(2.0,1.0,3.0)+view)),0.0),12.0);
    float fresnel = pow(1.0-max(dot(n,view),0.0),3.0);
    float studio = smoothstep(0.15,0.32,reflection.y) * (1.0-smoothstep(0.65,0.85,reflection.y));
    float stripe = smoothstep(-0.4,-0.25,reflection.x) * (1.0-smoothstep(-0.15,0.05,reflection.x));
    vec3 color = uColor * (0.24 + diffuse*0.64 + studio*0.38);
    color += vec3(1.0,0.96,0.88) * (spec*0.85 + broad*0.22 + stripe*0.18 + fresnel*0.22);
    gl_FragColor = vec4(pow(color,vec3(0.87)),1.0);
  }
`;

function torusGeometry() {
  const vertices: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const around = 120,
    tube = 36;
  for (let i = 0; i <= around; i++) {
    const u = (i / around) * Math.PI * 2;
    for (let j = 0; j <= tube; j++) {
      const v = (j / tube) * Math.PI * 2;
      const radius = 0.98 + 0.29 * Math.cos(v);
      vertices.push(
        radius * Math.cos(u),
        radius * Math.sin(u),
        0.29 * Math.sin(v),
      );
      normals.push(
        Math.cos(v) * Math.cos(u),
        Math.cos(v) * Math.sin(u),
        Math.sin(v),
      );
      if (i < around && j < tube) {
        const a = i * (tube + 1) + j,
          b = a + tube + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  }
  return { vertices, normals, indices };
}

export default function SpaceSculpture({
  motionPaused,
}: {
  motionPaused?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [localPaused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const paused = motionPaused ?? localPaused;
  const [available, setAvailable] = useState(false);
  const pausedRef = useRef(paused);
  const drawRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    pausedRef.current = paused;
    drawRef.current?.();
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    if (!canvas || !scene) return;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    if (!gl) return;
    const shaders: WebGLShader[] = [];
    const buffers: WebGLBuffer[] = [];
    const program = gl.createProgram();
    if (!program) return;
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const dispose = () => {
      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
    };
    if (!vertex || !fragment) {
      dispose();
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      dispose();
      return;
    }
    gl.useProgram(program);
    const geometry = torusGeometry();
    const attribute = (name: string, values: number[]) => {
      const buffer = gl.createBuffer();
      if (buffer) buffers.push(buffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
      const location = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
    };
    attribute("aPosition", geometry.vertices);
    attribute("aNormal", geometry.normals);
    const indexBuffer = gl.createBuffer();
    if (indexBuffer) buffers.push(indexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(geometry.indices),
      gl.STATIC_DRAW,
    );
    const rotation = gl.getUniformLocation(program, "uRotation");
    const offset = gl.getUniformLocation(program, "uOffset");
    const orbit = gl.getUniformLocation(program, "uOrbit");
    const aspect = gl.getUniformLocation(program, "uAspect");
    const color = gl.getUniformLocation(program, "uColor");
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);
    let frame = 0,
      visible = true,
      lost = false,
      lastTime = 0,
      elapsed = 0;
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;
    const render = (time: number) => {
      frame = 0;
      if (lost || !visible || document.hidden) {
        lastTime = 0;
        return;
      }
      if (!pausedRef.current) {
        elapsed += lastTime ? Math.min(time - lastTime, 50) / 1000 : 0;
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;
      }
      lastTime = time;
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(aspect, canvas.width / canvas.height);
      gl.uniform2f(
        orbit,
        currentX + Math.sin(elapsed * 0.24) * 0.17,
        currentY + Math.cos(elapsed * 0.2) * 0.09,
      );
      gl.uniform3f(rotation, 0.35, -0.45, 0.1);
      gl.uniform3f(offset, -0.44, 0.52, 0);
      gl.uniform3f(color, 0.49, 0.23, 0.93);
      gl.drawElements(
        gl.TRIANGLES,
        geometry.indices.length,
        gl.UNSIGNED_SHORT,
        0,
      );
      gl.uniform3f(rotation, 0.6, 0.65, -0.15);
      gl.uniform3f(offset, 0.42, -0.48, 0);
      gl.uniform3f(color, 0.98, 0.25, 0.075);
      gl.drawElements(
        gl.TRIANGLES,
        geometry.indices.length,
        gl.UNSIGNED_SHORT,
        0,
      );
      if (!pausedRef.current) frame = requestAnimationFrame(render);
    };
    const requestDraw = () => {
      if (!frame && visible && !document.hidden && !lost)
        frame = requestAnimationFrame(render);
    };
    drawRef.current = requestDraw;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      requestDraw();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
      } else requestDraw();
    });
    intersectionObserver.observe(scene);
    const pointerMove = (event: PointerEvent) => {
      if (pausedRef.current || event.pointerType === "touch") return;
      const rect = scene.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.5;
    };
    const pointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const visibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        lastTime = 0;
      } else requestDraw();
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionChange = () => setPaused(motion.matches);
    const contextLost = () => {
      lost = true;
      cancelAnimationFrame(frame);
      setAvailable(false);
    };
    scene.addEventListener("pointermove", pointerMove, { passive: true });
    scene.addEventListener("pointerleave", pointerLeave);
    document.addEventListener("visibilitychange", visibilityChange);
    motion.addEventListener("change", motionChange);
    canvas.addEventListener("webglcontextlost", contextLost);
    resize();
    setAvailable(true);
    return () => {
      cancelAnimationFrame(frame);
      drawRef.current = null;
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      scene.removeEventListener("pointermove", pointerMove);
      scene.removeEventListener("pointerleave", pointerLeave);
      document.removeEventListener("visibilitychange", visibilityChange);
      motion.removeEventListener("change", motionChange);
      canvas.removeEventListener("webglcontextlost", contextLost);
      dispose();
    };
  }, []);

  return (
    <div className="space-sculpture" ref={sceneRef}>
      <div className="sculpture-topline">
        <span>
          <i /> THE SPACE BETWEEN IDEA & REALITY
        </span>
        <span>01 / ∞</span>
      </div>
      <div className="sculpture-orbit orbit-one" aria-hidden="true" />
      <div className="sculpture-orbit orbit-two" aria-hidden="true" />
      <div className="sculpture-shadow" aria-hidden="true" />
      <div
        className={`sculpture-fallback ${available ? "is-hidden" : ""}`}
        aria-hidden="true"
      >
        <i />
        <i />
      </div>
      <canvas
        ref={canvasRef}
        className="sculpture-canvas"
        aria-label="An interactive sculpture of interlocking purple and orange loops"
        role="img"
      />
      <div className="sculpture-tag tag-design">
        <span>✳</span> Thoughtfully designed
      </div>
      <div className="sculpture-tag tag-built">
        <span>↗</span> Built for your next chapter
      </div>
      <div className="sculpture-bottomline">
        <span>
          <Rotate3D size={15} aria-hidden="true" />{" "}
          <span className="sculpture-hint">
            Move your cursor. Explore the space.
          </span>
        </span>
        {available && motionPaused === undefined && (
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}
