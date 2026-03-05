export interface WorksItem {
	image: string;
	title: string;
	description: string;
	link: string;
}

export const works: WorksItem[] = [
	{
		image: "/placeholder-1.jpg",
		title: "Solvex — Skill Constellation Platform",
		description:
			"A MERN-stack developer learning tracker that visualises your skills as a dynamic D3 force-directed constellation. Log learning events, sync GitHub repos, earn XP, and create community learning trails.",
		link: "https://github.com/XAgentso/Slovex",
	},
];
