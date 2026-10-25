
"use client";

import { useEffect, useRef } from "react";

export default function MinecraftCharacter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let viewer: import("skinview3d").SkinViewer | undefined;
    let cancelled = false;

    async function initialize() {
      const skinview3d = await import("skinview3d");

      if (!canvasRef.current || cancelled) return;

      viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: 350,
        height: 450,
        skin: "/wren-skin.png",
      });

      viewer.animation = new skinview3d.IdleAnimation();
      viewer.autoRotate = true;
      viewer.autoRotateSpeed = 0.5;
      viewer.zoom = 0.8;
    }

    initialize();

    return () => {
      cancelled = true;
      viewer?.dispose();
    };
  }, []);

  return (
    <div className="minecraft-character">
      <canvas ref={canvasRef} />
    </div>
  );
}
