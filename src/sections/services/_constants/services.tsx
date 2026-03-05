import {
	CodeIcon,
	GitHubLogoIcon,
	MixIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
	name: string;
	description: string;
}

export interface ServiceFeature {
	name: string;
	description: string;
	href: string;
	className: string;
	background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
	destination: {
		id: "client",
		Icon: GitHubLogoIcon,
	},
	hub: {
		id: "handoff",
		Icon: CodeIcon,
	},
	sources: [
		{
			id: "react",
			Icon: MixIcon,
		},
		{
			id: "node",
			Icon: CodeIcon,
		},
		{
			id: "mongo",
			Icon: GitHubLogoIcon,
		},
		{
			id: "d3",
			Icon: MixIcon,
		},
	],
};

export const serviceItems: ServiceItem[] = [
	{
		name: "Full-Stack Web Development",
		description:
			"End-to-end MERN applications — React + Vite frontends paired with Node.js/Express APIs and MongoDB databases, deployed and production-ready.",
	},
	{
		name: "Data Visualization & Dashboards",
		description:
			"Interactive D3.js force-graphs, constellation maps, and real-time dashboards that turn raw data into compelling, explorable visuals.",
	},
	{
		name: "AI & ML Integration",
		description:
			"Embedding ML models and LLMs into web applications — from automated analytics pipelines to intelligent recommendation engines.",
	},
	{
		name: "REST API Design",
		description:
			"Scalable, well-documented REST APIs with Express.js, JWT authentication, and MongoDB — built for reliability and easy integration.",
	},
	{
		name: "Climate & Geospatial Dashboards",
		description:
			"Mapping solutions using Leaflet and public data APIs (NASA POWER, RainViewer) to visualise geographic and environmental datasets.",
	},
	{
		name: "Research & Technical Writing",
		description:
			"Published researcher in AI-driven analytics (IJPREMS). Available for academic collaboration, technical documentation, and whitepaper authoring.",
	},
	{
		name: "UI/UX Engineering",
		description:
			"Pixel-perfect interfaces with Framer Motion animations, Zustand state management, and Valorant-inspired dark design systems.",
	},
];

export const bestPractices: ServiceItem[] = [
	{
		name: "Component-Driven Architecture",
		description:
			"Every project is built with reusable, composable React components — clean separation of concerns from day one.",
	},
	{
		name: "Type-Safe Codebase",
		description:
			"End-to-end TypeScript on both client and server — fewer runtime bugs, better DX, and confident refactoring.",
	},
	{
		name: "Performance First",
		description:
			"Lazy loading, code splitting, and optimised D3 render loops to keep apps fast even with heavy data payloads.",
	},
	{
		name: "GitHub-Driven Workflow",
		description:
			"Feature branches, meaningful commit messages, and PR-based reviews — repositories that are easy to pick up and extend.",
	},
	{
		name: "Responsive & Accessible UI",
		description:
			"Designs that work on every screen size and meet accessibility standards so no user is left behind.",
	},
	{
		name: "Secure by Default",
		description:
			"JWT auth, environment variable discipline, hashed credentials, and input validation baked into every API.",
	},
	{
		name: "Data-Driven Decisions",
		description:
			"Leveraging real datasets, NASA APIs, and GitHub activity to surface meaningful insights rather than demo data.",
	},
	{
		name: "Iterative & Agile",
		description:
			"Ship a working MVP fast, gather feedback, then iterate — keeping scope tight and momentum high.",
	},
	{
		name: "AI-Augmented Development",
		description:
			"Using LLM tooling and prompt engineering to accelerate boilerplate, docs, and data-preprocessing tasks.",
	},
	{
		name: "Thorough Documentation",
		description:
			"README files, inline comments, and architecture notes that make every project easy to hand off or revisit.",
	},
];

export const serviceFeatures: ServiceFeature[] = [
	{
		name: "What I Build",
		description:
			"Full-stack web apps, AI-powered dashboards, and data visualisations — built with the MERN stack and modern tooling.",
		href: "#",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},

	{
		name: "Idea to Deployment",
		description:
			"From wireframe to live URL — I take projects through design, development, API integration, and production deployment.",
		href: "#",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingCardIcons} />,
	},

	{
		name: "How I Work",
		description:
			"Engineering principles I follow on every project to keep code clean, scalable, and a joy to maintain.",
		href: "#",
		className: "col-span-1",
		background: <CleanCodeCardContent items={bestPractices} />,
	},
];
