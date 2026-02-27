import { Card, CardContent } from "@/components/ui/card";
import type { TestimonialType } from "@/sections/testimonials/_constants/testimonials";

export default function TestimonialCard({
	content,
	author,
	position,
	imageSrc,
}: TestimonialType) {
	return (
		<Card
			className="group relative overflow-hidden transition-all duration-300"
			style={{
				background:
					"linear-gradient(135deg, rgba(109, 40, 217, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)",
				border: "1px solid rgba(167, 139, 250, 0.25)",
				backdropFilter: "blur(12px)",
			}}
			onMouseEnter={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.boxShadow = "0 0 12px #a78bfa80, 0 0 36px #8b5cf640";
				el.style.borderColor = "rgba(167, 139, 250, 0.55)";
				el.style.transform = "translateY(-2px)";
			}}
			onMouseLeave={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.boxShadow = "";
				el.style.borderColor = "rgba(167, 139, 250, 0.25)";
				el.style.transform = "";
			}}
		>
			{/* Neon top strip */}
			<div
				className="absolute inset-x-0 top-0 h-px"
				style={{
					background:
						"linear-gradient(90deg, transparent 0%, #a78bfa 50%, transparent 100%)",
					opacity: 0.5,
				}}
			/>

			<CardContent className="flex flex-col gap-4 leading-relaxed" style={{ color: "rgba(243,244,255,0.65)" }}>
				<p className="text-sm">{content}</p>
				<div className="flex items-center gap-3">
					<div className="relative">
						<img
							src={imageSrc}
							alt={author}
							className="size-10 rounded-full object-cover"
							style={{
								border: "1px solid rgba(167, 139, 250, 0.5)",
								boxShadow: "0 0 8px rgba(167, 139, 250, 0.3)",
							}}
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col">
						<span className="text-sm font-medium" style={{ color: "#f3f4ff" }}>
							{author}
						</span>
						<span className="text-xs" style={{ color: "#a78bfa" }}>
							{position}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
