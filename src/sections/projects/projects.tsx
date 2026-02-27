import { SLogoIcon } from "@/components/icons/s-logo-icon";
import { projects } from "@/sections/projects/_constants/projects";
import ProjectsCard from "./_components/projects-card";

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full px-4 md:px-8 py-20"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(109, 40, 217, 0.04) 50%, transparent 100%)",
            }}
        >
            {/* Section header */}
            <div className="flex flex-col items-center gap-3 mb-12 text-center">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium font-mono"
                    style={{
                        border: "1px solid rgba(167, 139, 250, 0.4)",
                        background: "rgba(167, 139, 250, 0.1)",
                        color: "#a78bfa",
                    }}
                >
                    <SLogoIcon size={14} aria-hidden="true" />
                    Live Deployed
                </div>

                <h2
                    className="text-3xl md:text-4xl font-semibold text-balance max-w-2xl glow-text"
                >
                    Projects from the lab
                </h2>

                <p
                    className="text-base md:text-lg text-balance max-w-xl leading-relaxed"
                    style={{ color: "rgba(243, 244, 255, 0.55)" }}
                >
                    AI systems, security tools, and data pipelines built while studying
                    at{" "}
                    <span style={{ color: "#a78bfa" }}>Badlapur, Maharashtra</span> — each
                    one a step toward the frontier.
                </p>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <ProjectsCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}
