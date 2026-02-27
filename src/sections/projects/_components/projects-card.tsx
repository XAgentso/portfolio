import { useRef } from "react";
import type { ProjectItem } from "@/sections/projects/_constants/projects";
import { spawnHearts } from "@/components/ui/cyber-effects";

interface ProjectsCardProps extends ProjectItem { }

export default function ProjectsCard({
    image,
    title,
    description,
    techStack,
    deployedUrl,
    githubUrl,
}: ProjectsCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleHover = (e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        spawnHearts(rect.left + rect.width / 2, rect.top + 20, 3);
    };

    return (
        <div
            ref={cardRef}
            className="group relative rounded-xl overflow-hidden cursor-pointer"
            style={{
                background: "linear-gradient(145deg, rgba(124, 58, 237, 0.06) 0%, rgba(5, 5, 8, 0.7) 100%)",
                border: "1px solid rgba(196, 181, 253, 0.15)",
                backdropFilter: "blur(16px)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease",
                animation: "float-levitate 6s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 20px rgba(167, 139, 250, 0.18), 0 0 60px rgba(109, 40, 217, 0.08)";
                el.style.borderColor = "rgba(196, 181, 253, 0.3)";
                el.style.transform = "translateY(-4px)";
                el.style.animationPlayState = "paused";
                handleHover(e);
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "";
                el.style.borderColor = "rgba(196, 181, 253, 0.15)";
                el.style.transform = "";
                el.style.animationPlayState = "running";
            }}
        >
            {/* Soft top gradient line */}
            <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(196, 181, 253, 0.5) 50%, transparent 100%)",
                }}
            />

            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                {/* Subtle purple overlay on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "linear-gradient(180deg, rgba(59, 7, 100, 0.1) 0%, rgba(5, 5, 8, 0.55) 100%)",
                    }}
                />
                {/* Subtle center divider line */}
                <div
                    className="absolute inset-y-0 left-1/2 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: "linear-gradient(180deg, transparent 0%, rgba(196, 181, 253, 0.4) 50%, transparent 100%)",
                        transform: "translateX(-50%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                <h3
                    className="text-base font-semibold leading-snug"
                    style={{ color: "#f5f3ff" }}
                >
                    {title}
                </h3>

                <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{ color: "rgba(245, 243, 255, 0.45)" }}
                >
                    {description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs font-mono"
                            style={{
                                background: "rgba(196, 181, 253, 0.08)",
                                border: "1px solid rgba(196, 181, 253, 0.2)",
                                color: "rgba(196, 181, 253, 0.8)",
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-1">
                    <a
                        href={deployedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-250 hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(76, 29, 149, 0.9) 100%)",
                            color: "rgba(245, 243, 255, 0.95)",
                            border: "1px solid rgba(196, 181, 253, 0.2)",
                        }}
                    >
                        ↗ Launch
                    </a>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center py-2 px-3 rounded-lg text-sm transition-all duration-250 hover:opacity-80"
                            style={{
                                border: "1px solid rgba(196, 181, 253, 0.2)",
                                color: "rgba(196, 181, 253, 0.7)",
                                background: "transparent",
                            }}
                            aria-label="GitHub"
                        >
                            {"</>"}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
