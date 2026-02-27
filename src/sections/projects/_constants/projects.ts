export interface ProjectItem {
	image: string;
	title: string;
	description: string;
	techStack: string[];
	deployedUrl: string;
	githubUrl?: string;
}

export const projects: ProjectItem[] = [
	{
		image: "/placeholder-1.jpg",
		title: "NeuralSight — Tumor Detection AI",
		description:
			"Deep learning model achieving 94.2% accuracy on brain MRI classification. Trained on 10k+ samples using PyTorch, deployed as a Flask API with real-time inference.",
		techStack: ["Python", "PyTorch", "Flask", "OpenCV", "NumPy"],
		deployedUrl: "https://github.com/",
		githubUrl: "https://github.com/",
	},
	{
		image: "/placeholder-1.jpg",
		title: "CipherShield — CTF Toolkit",
		description:
			"Comprehensive cryptography and reverse engineering toolkit for Capture the Flag competitions. Supports 40+ cipher modes, hash cracking, and binary analysis.",
		techStack: ["Python", "C", "Cryptography", "Assembly", "Radare2"],
		deployedUrl: "https://github.com/",
		githubUrl: "https://github.com/",
	},
	{
		image: "/placeholder-1.jpg",
		title: "DataPulse — Real-Time Analytics",
		description:
			"Streaming data pipeline processing 50k events/s with live dashboards. Features anomaly detection, trend forecasting, and customizable alert thresholds.",
		techStack: ["Python", "Kafka", "Spark", "Grafana", "PostgreSQL"],
		deployedUrl: "https://github.com/",
		githubUrl: "https://github.com/",
	},
	{
		image: "/placeholder-1.jpg",
		title: "Kalpna — AI Study Companion",
		description:
			"Personal AI tutor powered by LLMs that adapts to learning style, generates practice problems, and tracks mastery across Computer Science topics.",
		techStack: ["TypeScript", "Next.js", "OpenAI", "Prisma", "Tailwind"],
		deployedUrl: "https://github.com/",
		githubUrl: "https://github.com/",
	},
];
