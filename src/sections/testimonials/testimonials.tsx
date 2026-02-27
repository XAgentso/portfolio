import { SLogoIcon } from "@/components/icons/s-logo-icon";
import { type CSSProperties, useMemo } from "react";
import Section from "@/components/layout/section";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/sections/testimonials/_components/testimonials-card";
import {
	type TestimonialType,
	testimonials,
} from "@/sections/testimonials/_constants/testimonials";

const columnVisibility = ["block", "hidden md:block", "hidden lg:block"];
const columnKeys = [
	"testimonials-primary",
	"testimonials-secondary",
	"testimonials-tertiary",
];
const animationDurations = ["28s", "34s", "30s"];
const fallbackVisibility = columnVisibility[columnVisibility.length - 1];

const createColumns = (items: TestimonialType[], columnCount = 3) =>
	Array.from({ length: columnCount }, (_, columnIndex) => {
		const offset = (columnIndex * 2) % items.length;
		return [...items.slice(offset), ...items.slice(0, offset)];
	});

export default function Testimonials() {
	const columns = useMemo(() => createColumns(testimonials), []);

	return (
		<Section
			id="testimonials"
			title="Kind words from mentors & collaborators"
			description="Voices from professors, CTF teammates, and industry mentors who've seen Siddharth's work up close."
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
			badgeText="Kind words"
			badgeIcon={<SLogoIcon aria-hidden="true" size={14} />}
		>
			{columns.map((column, columnIndex) => {
				const animationDuration =
					animationDurations[columnIndex] ??
					animationDurations[animationDurations.length - 1];
				const marqueeStyle = {
					"--duration": animationDuration,
				} as CSSProperties;

				return (
					<div
						key={
							columnKeys[columnIndex] ?? `testimonials-column-${columnIndex}`
						}
						className={cn(
							"group relative h-112 overflow-hidden p-2",
							columnVisibility[columnIndex] ?? fallbackVisibility,
						)}
					>
						<Marquee
							vertical
							className="h-full [--gap:1rem]"
							style={marqueeStyle}
						>
							{column.map((testimonial, testimonialIndex) => (
								<TestimonialCard
									key={`${testimonial.author}-${columnIndex}-${testimonialIndex}`}
									content={testimonial.content}
									author={testimonial.author}
									position={testimonial.position}
									imageSrc={testimonial.imageSrc}
								/>
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-background via-background/80 to-transparent" />
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background via-background/80 to-transparent" />
					</div>
				);
			})}
		</Section>
	);
}
