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
];
