import { SLogoIcon } from "@/components/icons/s-logo-icon";

const AUTHORS = [
    "Shreyash V. Khobragade",
    "Pranali R. Shelke",
    "Siddharth S. Singh",
    "Yuvraj N. Dixit",
    "Dr. Rais A.H. Khan",
];

const PAPER = {
    title: "AI-Powered Automated Data Analytics Dashboard for Business Intelligence",
    journal: "International Journal of Progressive Research in Engineering Management and Science",
    shortJournal: "IJPREMS",
    volume: "Volume 05, Issue 11",
    date: "November 2025",
    paperId: "IJPREMS51100027335",
    abstract:
        "In this era of modern organization, data analysis is critical in terms of making better and efficient decisions of business insights and finances with interpretable data. Technical experts are required for data handling and analysis which might be extremely time consuming as well as a hectic job using traditional methods. This paper describes how an AI-based data analytics dashboard integrates ML models, LLMs and dynamic visualization recommendations to streamline data exploration and manipulation. Users can upload Excel or CSV datasets that are automatically preprocessed and analyzed before being turned into interactive dashboards.",
    tags: ["Machine Learning", "LLMs", "Data Analytics", "Business Intelligence", "Visualization"],
};

export default function Research() {
    return (
        <section
            id="research"
            className="w-full px-4 md:px-8 py-20"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(109, 40, 217, 0.05) 50%, transparent 100%)",
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
                    Peer Reviewed · Published
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-balance max-w-2xl glow-text">
                    Research & Publications
                </h2>

                <p
                    className="text-base md:text-lg text-balance max-w-xl leading-relaxed"
                    style={{ color: "rgba(243, 244, 255, 0.55)" }}
                >
                    Published research at the intersection of{" "}
                    <span style={{ color: "#a78bfa" }}>AI, machine learning</span>, and
                    real-world engineering challenges.
                </p>
            </div>

            {/* Paper card */}
            <div className="max-w-4xl mx-auto">
                <div
                    className="rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:shadow-lg"
                    style={{
                        border: "1px solid rgba(167, 139, 250, 0.2)",
                        background: "rgba(167, 139, 250, 0.04)",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(167, 139, 250, 0.4)";
                        (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(167, 139, 250, 0.07)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                            "rgba(167, 139, 250, 0.2)";
                        (e.currentTarget as HTMLDivElement).style.background =
                            "rgba(167, 139, 250, 0.04)";
                    }}
                >
                    {/* Top row — journal badge + paper ID */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span
                                className="px-2 py-0.5 rounded text-xs font-mono font-semibold"
                                style={{
                                    background: "rgba(167, 139, 250, 0.15)",
                                    color: "#c4b5fd",
                                    border: "1px solid rgba(167, 139, 250, 0.3)",
                                }}
                            >
                                {PAPER.shortJournal}
                            </span>
                            <span
                                className="text-xs font-mono"
                                style={{ color: "rgba(243, 244, 255, 0.4)" }}
                            >
                                {PAPER.volume} · {PAPER.date}
                            </span>
                        </div>
                        <span
                            className="text-xs font-mono"
                            style={{ color: "rgba(243, 244, 255, 0.35)" }}
                        >
                            ID: {PAPER.paperId}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl md:text-2xl font-semibold leading-snug"
                        style={{ color: "#f3f4ff" }}
                    >
                        {PAPER.title}
                    </h3>

                    {/* Journal full name */}
                    <p
                        className="text-sm italic"
                        style={{ color: "rgba(167, 139, 250, 0.7)" }}
                    >
                        {PAPER.journal}
                    </p>

                    {/* Authors */}
                    <div className="flex flex-col gap-1.5">
                        <p
                            className="text-xs font-mono uppercase tracking-widest"
                            style={{ color: "rgba(167, 139, 250, 0.6)" }}
                        >
                            Authors
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {AUTHORS.map((author) => (
                                <span
                                    key={author}
                                    className="px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        background:
                                            author === "Siddharth S. Singh"
                                                ? "rgba(167, 139, 250, 0.2)"
                                                : "rgba(255, 255, 255, 0.05)",
                                        border:
                                            author === "Siddharth S. Singh"
                                                ? "1px solid rgba(167, 139, 250, 0.45)"
                                                : "1px solid rgba(255, 255, 255, 0.1)",
                                        color:
                                            author === "Siddharth S. Singh"
                                                ? "#c4b5fd"
                                                : "rgba(243, 244, 255, 0.6)",
                                    }}
                                >
                                    {author}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        className="w-full h-px"
                        style={{ background: "rgba(167, 139, 250, 0.12)" }}
                    />

                    {/* Abstract */}
                    <div className="flex flex-col gap-2">
                        <p
                            className="text-xs font-mono uppercase tracking-widest"
                            style={{ color: "rgba(167, 139, 250, 0.6)" }}
                        >
                            Abstract
                        </p>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "rgba(243, 244, 255, 0.65)" }}
                        >
                            {PAPER.abstract}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {PAPER.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded text-xs font-mono"
                                style={{
                                    background: "rgba(109, 40, 217, 0.12)",
                                    border: "1px solid rgba(109, 40, 217, 0.25)",
                                    color: "#a78bfa",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className="w-full h-px"
                        style={{ background: "rgba(167, 139, 250, 0.12)" }}
                    />

                    {/* Download certificate */}
                    <div className="flex justify-end">
                        <a
                            href="/research-certificate.pdf"
                            download="IJPREMS-Publication-Certificate-Siddharth-Singh.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{
                                border: "1px solid rgba(167, 139, 250, 0.35)",
                                background: "rgba(167, 139, 250, 0.1)",
                                color: "#c4b5fd",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background =
                                    "rgba(167, 139, 250, 0.2)";
                                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                    "rgba(167, 139, 250, 0.55)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background =
                                    "rgba(167, 139, 250, 0.1)";
                                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                    "rgba(167, 139, 250, 0.35)";
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download Certificate of Publication
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
