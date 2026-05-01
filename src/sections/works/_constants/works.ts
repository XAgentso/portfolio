export interface WorksItem {
	image: string;
	title: string;
	description: string;
	link: string;
}

export const works: WorksItem[] = [
	{
		image: "/placeholder-2.jpg",
		title: "Antigravity Marketplace",
		description:
			"A full-stack multi-vendor marketplace featuring robust seller dashboards, comprehensive product/order management, and a secure transactional loop integrated with Razorpay for the Indian market.",
		link: "https://github.com/XAgentso/Antigravity-Marketplace",
	},
	{
		image: "/placeholder-1.jpg",
		title: "Solvex — Skill Constellation Platform",
		description:
			"A MERN-stack developer learning tracker that visualises your skills as a dynamic D3 force-directed constellation. Log learning events, sync GitHub repos, earn XP, and create community learning trails.",
		link: "https://github.com/XAgentso/Slovex",
	},
	{
		image: "/placeholder-2.jpg",
		title: "DEVForge Network — AI Collaboration Hub",
		description:
			"A full-stack developer network with a 'Clear UI' aesthetic. Features real-time multiplayer code editing environments with integrated live Google Gemini AI Code Review and Consultation.",
		link: "https://github.com/XAgentso/DEVForge",
	},
];
