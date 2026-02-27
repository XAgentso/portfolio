export interface WorksItem {
	image: string;
	title: string;
	description: string;
	link: string;
}

export const works: WorksItem[] = [
	{
		image: "/placeholder-1.jpg",
		title: "NeuralSight — Tumor Detection",
		description:
			"PyTorch CNN classifier for brain MRI scans, 94.2% accuracy on 10k+ sample dataset.",
		link: "https://github.com/",
	},
	{
		image: "/placeholder-1.jpg",
		title: "CipherShield — CTF Toolkit",
		description:
			"Python library with 40+ cipher modes, hash cracking, and binary analysis for CTF competitions.",
		link: "https://github.com/",
	},
];
