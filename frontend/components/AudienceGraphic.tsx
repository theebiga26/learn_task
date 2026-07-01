"use client";

import { useEffect, useRef } from "react";

export function AudienceGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Four audience types orbiting a central website
    const audiences = [
      { label: "Business", icon: "shop" },
      { label: "Freelancer", icon: "person" },
      { label: "Startup", icon: "rocket" },
      { label: "Enterprise", icon: "building" },
    ];

    const drawIcon = (
      x: number,
      y: number,
      size: number,
      type: string,
      color: string
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1.6;

      if (type === "shop") {
        // Storefront with awning
        ctx.beginPath();
        ctx.moveTo(-size, -size * 0.3);
        ctx.lineTo(-size, size);
        ctx.lineTo(size, size);
        ctx.lineTo(size, -size * 0.3);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-size * 1.1, -size * 0.3);
        ctx.lineTo(0, -size * 0.9);
        ctx.lineTo(size * 1.1, -size * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Door
        ctx.beginPath();
        ctx.rect(-size * 0.25, size * 0.2, size * 0.5, size * 0.8);
        ctx.stroke();
      } else if (type === "person") {
        // Freelancer person
        ctx.beginPath();
        ctx.arc(0, -size * 0.5, size * 0.45, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-size * 0.7, size);
        ctx.quadraticCurveTo(-size * 0.7, size * 0.1, 0, size * 0.1);
        ctx.quadraticCurveTo(size * 0.7, size * 0.1, size * 0.7, size);
        ctx.stroke();
      } else if (type === "rocket") {
        // Startup rocket
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.quadraticCurveTo(size * 0.5, -size * 0.3, size * 0.4, size * 0.3);
        ctx.lineTo(-size * 0.4, size * 0.3);
        ctx.quadraticCurveTo(-size * 0.5, -size * 0.3, 0, -size);
        ctx.stroke();
        // Window
        ctx.beginPath();
        ctx.arc(0, -size * 0.2, size * 0.15, 0, Math.PI * 2);
        ctx.stroke();
        // Fins
        ctx.beginPath();
        ctx.moveTo(-size * 0.4, size * 0.1);
        ctx.lineTo(-size * 0.7, size * 0.6);
        ctx.lineTo(-size * 0.4, size * 0.3);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(size * 0.4, size * 0.1);
        ctx.lineTo(size * 0.7, size * 0.6);
        ctx.lineTo(size * 0.4, size * 0.3);
        ctx.stroke();
        // Flame
        ctx.beginPath();
        ctx.moveTo(-size * 0.25, size * 0.3);
        ctx.lineTo(0, size * 0.85);
        ctx.lineTo(size * 0.25, size * 0.3);
        ctx.stroke();
      } else if (type === "building") {
        // Enterprise building
        ctx.beginPath();
        ctx.rect(-size * 0.7, -size * 0.8, size * 1.4, size * 1.8);
        ctx.stroke();
        // Windows grid
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 3; c++) {
            const wx = -size * 0.5 + c * size * 0.4;
            const wy = -size * 0.6 + r * size * 0.4;
            ctx.beginPath();
            ctx.rect(wx, wy, size * 0.2, size * 0.22);
            ctx.stroke();
          }
        }
      }

      ctx.restore();
    };

    const start = performance.now();

    const render = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const minDim = Math.min(width, height);

      // Background glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, minDim * 0.6);
      glow.addColorStop(0, "rgba(123, 189, 232, 0.15)");
      glow.addColorStop(1, "rgba(10, 25, 47, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Central website/browser
      const browserW = minDim * 0.42;
      const browserH = minDim * 0.32;
      const bx = cx - browserW / 2;
      const by = cy - browserH / 2;

      // Connection lines (animated dashes) to each orbit node
      const orbitR = Math.min(width, height) * 0.36;
      const orbitSpeed = t * 0.4;

      audiences.forEach((a, i) => {
        const angle = orbitSpeed + (i * Math.PI * 2) / audiences.length - Math.PI / 2;
        const nx = cx + Math.cos(angle) * orbitR;
        const ny = cy + Math.sin(angle) * orbitR;

        // Connection line with animated dash
        ctx.save();
        ctx.setLineDash([4, 6]);
        ctx.lineDashOffset = -t * 30;
        ctx.strokeStyle = "rgba(123, 189, 232, 0.5)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.stroke();
        ctx.restore();
      });

      // Orbit ring
      ctx.beginPath();
      ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(123, 189, 232, 0.12)";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();

      // Central browser window
      ctx.save();
      // Shadow
      ctx.shadowColor = "rgba(123, 189, 232, 0.5)";
      ctx.shadowBlur = 24;
      ctx.fillStyle = "rgba(10, 65, 116, 0.85)";
      ctx.strokeStyle = "rgba(123, 189, 232, 0.9)";
      ctx.lineWidth = 1.5;
      // Rounded rect
      const r = 6;
      ctx.beginPath();
      ctx.moveTo(bx + r, by);
      ctx.lineTo(bx + browserW - r, by);
      ctx.quadraticCurveTo(bx + browserW, by, bx + browserW, by + r);
      ctx.lineTo(bx + browserW, by + browserH - r);
      ctx.quadraticCurveTo(bx + browserW, by + browserH, bx + browserW - r, by + browserH);
      ctx.lineTo(bx + r, by + browserH);
      ctx.quadraticCurveTo(bx, by + browserH, bx, by + browserH - r);
      ctx.lineTo(bx, by + r);
      ctx.quadraticCurveTo(bx, by, bx + r, by);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Browser top bar
      ctx.fillStyle = "rgba(123, 189, 232, 0.15)";
      ctx.fillRect(bx, by, browserW, browserH * 0.22);
      ctx.strokeStyle = "rgba(123, 189, 232, 0.3)";
      ctx.beginPath();
      ctx.moveTo(bx, by + browserH * 0.22);
      ctx.lineTo(bx + browserW, by + browserH * 0.22);
      ctx.stroke();

      // Traffic lights
      ["#FF6B6B", "#FFD93D", "#6BCB77"].forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(bx + 8 + i * 8, by + browserH * 0.11, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // URL bar
      ctx.fillStyle = "rgba(123, 189, 232, 0.08)";
      ctx.fillRect(bx + browserW * 0.4, by + browserH * 0.06, browserW * 0.55, browserH * 0.1);
      ctx.strokeStyle = "rgba(123, 189, 232, 0.25)";
      ctx.strokeRect(bx + browserW * 0.4, by + browserH * 0.06, browserW * 0.55, browserH * 0.1);

      // Website content lines
      const contentY = by + browserH * 0.32;
      const contentH = browserH * 0.62;
      // Hero block
      ctx.fillStyle = "rgba(123, 189, 232, 0.25)";
      ctx.fillRect(bx + browserW * 0.1, contentY, browserW * 0.8, contentH * 0.25);
      // Lines
      ctx.fillStyle = "rgba(123, 189, 232, 0.12)";
      const lineY = contentY + contentH * 0.35;
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(
          bx + browserW * 0.1,
          lineY + i * contentH * 0.12,
          browserW * (0.6 - i * 0.1),
          contentH * 0.06
        );
      }
      // CTA button
      ctx.fillStyle = "rgba(123, 189, 232, 0.5)";
      ctx.fillRect(
        bx + browserW * 0.1,
        contentY + contentH * 0.78,
        browserW * 0.3,
        contentH * 0.15
      );
      ctx.restore();

      // "Your Site" label below browser
      ctx.fillStyle = "rgba(224, 239, 247, 0.9)";
      ctx.font = `bold ${Math.max(11, minDim * 0.028)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText("Your Website", cx, by + browserH + 8);

      // Draw the 4 orbiting audience nodes
      audiences.forEach((a, i) => {
        const angle = orbitSpeed + (i * Math.PI * 2) / audiences.length - Math.PI / 2;
        const nx = cx + Math.cos(angle) * orbitR;
        const ny = cy + Math.sin(angle) * orbitR;

        // Glow
        const nodeGlow = ctx.createRadialGradient(nx, ny, 0, nx, ny, minDim * 0.12);
        nodeGlow.addColorStop(0, "rgba(123, 189, 232, 0.35)");
        nodeGlow.addColorStop(1, "rgba(123, 189, 232, 0)");
        ctx.fillStyle = nodeGlow;
        ctx.fillRect(nx - minDim * 0.12, ny - minDim * 0.12, minDim * 0.24, minDim * 0.24);

        // Node circle
        ctx.beginPath();
        ctx.arc(nx, ny, minDim * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(10, 65, 116, 0.9)";
        ctx.fill();
        ctx.strokeStyle = "rgba(123, 189, 232, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Icon inside node
        drawIcon(nx, ny, minDim * 0.035, a.icon, "rgba(123, 189, 232, 0.95)");

        // Label outside node (radially)
        const labelDist = minDim * 0.07 + 18;
        const lx = nx + Math.cos(angle) * labelDist;
        const ly = ny + Math.sin(angle) * labelDist;
        ctx.fillStyle = "rgba(224, 239, 247, 0.95)";
        ctx.font = `600 ${Math.max(11, minDim * 0.028)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(a.label, lx, ly);
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-sky-blue/10 blur-[60px]" />
      <canvas
        ref={canvasRef}
        className="relative h-full w-full"
        aria-label="Four audience types — Business, Freelancer, Startup, Enterprise — connecting to a central website"
      />
    </div>
  );
}
