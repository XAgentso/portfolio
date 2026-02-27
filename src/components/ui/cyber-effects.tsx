"use client";

import { useEffect, useRef } from "react";

/* ── Cursor crosshair trail ─────────────────── */
interface TrailPoint {
    x: number;
    y: number;
    age: number;
}

function setupCursorTrail(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => { };

    let animId: number;
    const trail: TrailPoint[] = [];
    let mx = -200;
    let my = -200;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        trail.push({ x: mx, y: my, age: 0 });
        if (trail.length > 28) trail.shift();
    };

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw trail
        for (let i = 0; i < trail.length; i++) {
            const pt = trail[i];
            if (!pt) continue;
            pt.age += 1;
            const alpha = Math.max(0, 1 - pt.age / 28);
            const r = (i / trail.length) * 3;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167, 139, 250, ${alpha * 0.7})`;
            ctx.fill();
        }

        // Draw crosshair ring at cursor
        const ringR = 14;
        ctx.beginPath();
        ctx.arc(mx, my, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(167, 139, 250, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Crosshair lines
        ctx.strokeStyle = "rgba(167, 139, 250, 0.6)";
        ctx.lineWidth = 1;
        const gap = 5;
        const len = 8;
        // top
        ctx.beginPath();
        ctx.moveTo(mx, my - ringR - gap);
        ctx.lineTo(mx, my - ringR - gap - len);
        ctx.stroke();
        // bottom
        ctx.beginPath();
        ctx.moveTo(mx, my + ringR + gap);
        ctx.lineTo(mx, my + ringR + gap + len);
        ctx.stroke();
        // left
        ctx.beginPath();
        ctx.moveTo(mx - ringR - gap, my);
        ctx.lineTo(mx - ringR - gap - len, my);
        ctx.stroke();
        // right
        ctx.beginPath();
        ctx.moveTo(mx + ringR + gap, my);
        ctx.lineTo(mx + ringR + gap + len, my);
        ctx.stroke();

        // Center dot
        ctx.beginPath();
        ctx.arc(mx, my, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 1)";
        ctx.fill();

        animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMove);
    };
}

/* ── Section fissure reveal (IntersectionObserver) ── */
function setupFissureObserver() {
    const sections = document.querySelectorAll<HTMLElement>(
        "section, .needs-reveal"
    );
    sections.forEach((el) => el.classList.add("section-hidden"));

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).classList.remove("section-hidden");
                    (entry.target as HTMLElement).classList.add("section-visible");
                    observer.unobserve(entry.target);
                }
            }
        },
        { threshold: 0.08 }
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}

/* ── Heart particle burst on hover ─────────── */
export function spawnHearts(x: number, y: number, count = 5) {
    const emojis = ["💜", "✨", "💫", "🔮", "💜"];
    for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.className = "heart-particle";
        el.textContent = emojis[i % emojis.length] ?? "💜";
        el.style.left = `${x + (Math.random() - 0.5) * 60}px`;
        el.style.top = `${y + (Math.random() - 0.5) * 40}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 950);
    }
}

/* ── Main component (mount in root layout) ── */
export function CyberEffects() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const cleanupCursor = setupCursorTrail(canvas);
        const cleanupObserver = setupFissureObserver();

        return () => {
            cleanupCursor();
            cleanupObserver();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="cyber-cursor-canvas"
            aria-hidden="true"
        />
    );
}
