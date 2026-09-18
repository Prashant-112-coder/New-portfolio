"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only run on fine-pointer devices (desktop mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button']")
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const animateTrail = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full border border-cyan-400/40 transition-[width,height,transform] duration-150 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transform: "translate(-50%, -50%)",
          width: isPointer ? "48px" : "32px",
          height: isPointer ? "48px" : "32px",
          backgroundColor: isPointer ? "rgba(6, 182, 212, 0.08)" : "transparent",
        }}
      />
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
