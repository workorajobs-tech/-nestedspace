import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { showcaseProjects, type ShowcaseProject } from "../data/showcaseProjects";
import "./WorkShowcase.css";

const PREVIEW_PLAYBACK_RATE = 2;

function ProjectPreview({
  project,
  loop,
  motionPaused,
  onEnded,
}: {
  project: ShowcaseProject;
  loop: boolean;
  motionPaused: boolean;
  onEnded: () => void;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(frame);
    const handleVisibility = () => setPageVisible(!document.hidden);
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;
    video.defaultPlaybackRate = PREVIEW_PLAYBACK_RATE;
    video.playbackRate = PREVIEW_PLAYBACK_RATE;
    if (inView && pageVisible && !motionPaused) {
      // Keep the poster visible if the browser blocks autoplay.
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
    return () => video.pause();
  }, [inView, pageVisible, motionPaused, failed]);

  return (
    <div className="work-video-frame" ref={frameRef}>
      {failed ? (
        <img
          className="work-video"
          src={project.poster}
          alt={project.name + " website preview"}
          width="960"
          height="720"
        />
      ) : (
        <video
          className="work-video"
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          width="960"
          height="720"
          muted
          playsInline
          loop={loop}
          preload="none"
          aria-label={"Scrolling walkthrough of the " + project.name + " website"}
          onError={() => setFailed(true)}
          onEnded={onEnded}
        />
      )}
    </div>
  );
}

export default function WorkShowcase({
  motionPaused,
  projects = showcaseProjects,
}: {
  motionPaused: boolean;
  projects?: ShowcaseProject[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const hasMultiple = projects.length > 1;
  const project = projects[activeIndex % projects.length];
  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + projects.length) % projects.length);
  };

  if (!project) return null;

  return (
    <Link
        className="work-showcase"
        to="/samples"
        aria-label="View samples gallery"
        draggable={false}
        onClick={(event) => {
          // A swipe changes the preview; only a click opens the gallery.
          if (dragged.current) event.preventDefault();
          dragged.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") dragged.current = false;
          if (!hasMultiple || event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          dragged.current = false;
          pointerStart.current = { x: event.clientX, y: event.clientY };
          if (hasMultiple) event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => {
          const start = pointerStart.current;
          pointerStart.current = null;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          dragged.current = Math.abs(dx) > 8 || Math.abs(dy) > 8;
          if (hasMultiple && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => { pointerStart.current = null; dragged.current = true; }}
      >
      <div
        className="work-slide"
        role="group"
        aria-roledescription={hasMultiple ? "slide" : undefined}
        aria-label={project.name + ", " + (activeIndex + 1) + " of " + projects.length}
      >
        <ProjectPreview key={project.id} project={project} loop={!hasMultiple} motionPaused={motionPaused} onEnded={() => move(1)} />
      </div>
    </Link>
  );
}
