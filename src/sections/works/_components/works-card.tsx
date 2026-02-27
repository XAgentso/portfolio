import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { spawnHearts } from "@/components/ui/cyber-effects";

interface WorksCardProps {
	image: string;
	title: string;
	description: string;
	link: string;
}

export default function WorksCard({
	image,
	title,
	description,
	link,
}: WorksCardProps) {
	const handleHover = (e: React.MouseEvent) => {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		spawnHearts(rect.left + rect.width / 2, rect.top + 30, 3);
	};

	return (
		<Card
			className="group relative w-full aspect-video cyber-card cyber-card-float overflow-hidden"
			onMouseEnter={handleHover}
		>
			{/* Energy ring on hover */}
			<div className="energy-ring" />

			{/* Neon top glow strip */}
			<div
				className="absolute inset-x-0 top-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, #a78bfa 50%, transparent 100%)",
				}}
			/>

			<div className="relative w-full h-full p-1 rounded-lg">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover rounded-md overflow-hidden bg-card-elevated border border-border/80 p-0.5 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
				/>

				{/* Purple gradient overlay */}
				<div
					className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
					style={{
						background:
							"linear-gradient(180deg, transparent 40%, rgba(109, 40, 217, 0.55) 100%)",
					}}
				/>

				<div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-3 p-4">
					<div className="flex-1 min-w-0">
						<CardTitle>
							<span style={{ color: "#f3f4ff" }} className="transition-colors duration-200">{title}</span>
						</CardTitle>
						<CardDescription>
							<span style={{ color: "rgba(243, 244, 255, 0.5)" }}>{description}</span>
						</CardDescription>
					</div>

					<Button
						asChild
						size="sm"
						variant="secondary"
						className="transition-all duration-200 hover:scale-105"
						style={{
							background: "rgba(167, 139, 250, 0.15)",
							border: "1px solid rgba(167, 139, 250, 0.4)",
							color: "#a78bfa",
						}}
					>
						<a href={link} target="_blank" rel="noreferrer">
							View project
						</a>
					</Button>
				</div>
			</div>
		</Card>
	);
}
