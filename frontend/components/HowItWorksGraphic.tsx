"use client";

import { useEffect, useRef } from "react";

export function HowItWorksGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 500;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(123, 189, 232, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 189, 232, ${p.opacity})`;
        ctx.fill();
      });

      // Draw central AI core with pulsing effect
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const pulseSize = 30 + Math.sin(time * 2) * 5;

      // Outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize * 2);
      gradient.addColorStop(0, "rgba(123, 189, 232, 0.3)");
      gradient.addColorStop(1, "rgba(123, 189, 232, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize * 2, 0, Math.PI * 2);
      ctx.fill();

      // Core circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(123, 189, 232, 0.2)";
      ctx.fill();
      ctx.strokeStyle = "rgba(123, 189, 232, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner core
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(123, 189, 232, 0.9)";
      ctx.fill();
      // Central label - "AI"
      ctx.fillStyle = "rgba(10, 25, 47, 1)";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI", centerX, centerY);
      // Draw orbiting elements with labels
      const orbitRadius = 120;
      const orbitSpeed = time * 0.5;
      const nodeLabels = ["Describe", "Build", "Launch"];
      for (let i = 0; i < 3; i++) {
        const angle = orbitSpeed + (i * Math.PI * 2) / 3;
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;
        // Orbit path
        ctx.beginPath();
        ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(123, 189, 232, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
        // Orbiting node
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(123, 189, 232, 0.6)";
        ctx.fill();
        ctx.strokeStyle = "rgba(123, 189, 232, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Node label
        const labelOffset = 18;
        const labelX = x + Math.cos(angle) * labelOffset;
        const labelY = y + Math.sin(angle) * labelOffset;
        ctx.fillStyle = "rgba(224, 239, 247, 0.9)";
        ctx.font = "600 16px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(nodeLabels[i], labelX, labelY);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative flex h-full min-h-[400px] items-center justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        style={{ filter: "drop-shadow(0 0 20px rgba(123, 189, 232, 0.3))" }}
      />
    </div>
  );
}
