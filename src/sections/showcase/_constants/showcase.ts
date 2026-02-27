export type ShowcaseHighlight = {
	title: string;
	description: string;
	src: string;
	poster: string;
	className?: string;
	projectUrl?: string;
};

export const showcaseHighlights: ShowcaseHighlight[] = [
	{
		title: "NeuralSight — Model Training Run",
		description:
			"Timelapse of a PyTorch CNN training session on brain MRI data — watch loss curves converge and accuracy climb past 94% across 80 epochs.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-2 lg:row-span-2",
	},
	{
		title: "CipherShield — Live CTF Demo",
		description:
			"Screen recording of solving a cryptography challenge using the custom CipherShield toolkit in under 4 minutes.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-1 lg:row-span-1",
	},
	{
		title: "DataPulse — Real-Time Dashboard",
		description:
			"Live Grafana dashboard processing 50k events/s from a Kafka stream with anomaly detection highlighted in real time.",
		src: "",
		poster: "/placeholder-1.jpg",
		className: "lg:col-span-1 lg:row-span-1",
	},
];
