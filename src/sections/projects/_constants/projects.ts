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
		title: "Solvex — Skill Constellation Platform",
		description:
			"A MERN-stack developer learning tracker that visualises your skills as a dynamic D3 force-directed constellation. Log learning events, sync GitHub repos to auto-detect skills and earn XP, create community learning trails, and watch your star map grow. Features a Valorant-inspired dark UI with region-reactive themes, skill distribution chart, and GitHub PAT integration.",
		techStack: ["React", "Vite", "D3.js", "Node.js", "Express", "MongoDB", "Framer Motion", "Zustand"],
		deployedUrl: "https://github.com/XAgentso/Slovex",
		githubUrl: "https://github.com/XAgentso/Slovex",
	},
	{
		image: "/weather-app.png",
		title: "Weather App — NASA Climate Dashboard",
		description:
			"Historical climate probability dashboard built on NASA POWER data (30-year normals). Enter any city and date to get likelihood of extreme heat, cold, wind, or rain. Features a live global precipitation radar powered by RainViewer, dark mode, and a fully responsive monochrome UI.",
		techStack: ["React", "Vite", "NASA POWER", "RainViewer", "Leaflet", "CSS"],
		deployedUrl: "https://github.com/XAgentso/Weather-app",
		githubUrl: "https://github.com/XAgentso/Weather-app",
	},
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
