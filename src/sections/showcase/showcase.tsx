import { SLogoIcon } from "@/components/icons/s-logo-icon";
import Section from "@/components/layout/section";
import { cn } from "@/lib/utils";
import ShowcaseCard from "@/sections/showcase/_components/showcase-card";
import { showcaseHighlights } from "@/sections/showcase/_constants/showcase";

export default function Showcase() {
	return (
		<Section
			id="showcase"
			title="Process captures &amp; technical deep-dives"
			description="Screen recordings, model training runs, and live coding sessions — a window into how Siddharth builds." className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-[220px]"
			badgeText="Showcase"
			badgeIcon={<SLogoIcon aria-hidden="true" size={14} />}
		>
			{showcaseHighlights.map(
				({ className, title, description, src, poster }) => (
					<div key={title} className={cn("w-full", className)}>
						<ShowcaseCard
							title={title}
							description={description}
							src={src}
							poster={poster}
						/>
					</div>
				),
			)}
		</Section>
	);
}
