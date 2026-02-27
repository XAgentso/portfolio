import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { ShowcaseHighlight } from "@/sections/showcase/_constants/showcase";

type ShowcaseCardProps = Omit<ShowcaseHighlight, "className">;

export default function ShowcaseCard({
	title,
	description,
	src,
	poster,
}: ShowcaseCardProps) {
	return (
		<Card className="group relative w-full lg:h-full overflow-hidden neon-scanline"
			style={{
				border: "1px solid rgba(167, 139, 250, 0.3)",
				background: "linear-gradient(135deg, rgba(109, 40, 217, 0.08) 0%, rgba(0,0,0,0.5) 100%)",
				transition: "box-shadow 0.35s ease, border-color 0.35s ease",
			}}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow =
					"0 0 12px #a78bfaaa, 0 0 36px #8b5cf680, 0 0 80px #6d28d940";
				(e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.65)";
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow = "";
				(e.currentTarget as HTMLElement).style.borderColor = "rgba(167,139,250,0.3)";
			}}
		>
			<div className="relative w-full aspect-video lg:h-full lg:aspect-auto p-1 rounded-lg">
				<video
					className="h-full w-full object-cover rounded-md overflow-hidden bg-card-elevated border border-border/80 p-0.5 transition-all duration-700 group-hover:brightness-110"
					src={src}
					poster={poster}
					autoPlay
					loop
					muted
					playsInline
					preload="metadata"
				/>
				{/* Glitch frame entrance overlay */}
				<div
					className="absolute inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background:
							"linear-gradient(180deg, rgba(109,40,217,0.12) 0%, transparent 40%, rgba(109,40,217,0.08) 100%)",
					}}
				/>
			</div>

			<div className="absolute bottom-0 left-0 right-0 p-4">
				{/* Neon bottom line */}
				<div
					className="absolute inset-x-4 bottom-0 h-px"
					style={{
						background:
							"linear-gradient(90deg, transparent 0%, #a78bfa 50%, transparent 100%)",
						opacity: 0.4,
					}}
				/>
				<CardTitle>
					<span style={{ color: "#f3f4ff" }}>{title}</span>
				</CardTitle>
				<CardDescription>
					<span style={{ color: "rgba(243,244,255,0.5)" }}>{description}</span>
				</CardDescription>
			</div>
		</Card>
	);
}
