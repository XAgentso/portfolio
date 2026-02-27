import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/sections/services/_constants/services";

interface CleanCodeCardContentProps {
	className?: string;
	items: ServiceItem[];
}

export function CleanCodeCardContent({
	className,
	items,
}: CleanCodeCardContentProps) {
	return (
		<>
			<Marquee className={cn("[--duration:60s]", className)}>
				{items.map((practice) => (
					<Card
						key={practice.name}
						className="relative mx-auto flex w-72 bg-card-elevated flex-col p-4"
					>
						<CardTitle className="text-sm">{practice.name}</CardTitle>
						<CardDescription className="text-xs">
							{practice.description}
						</CardDescription>
					</Card>
				))}
			</Marquee>
			<Marquee reverse className={cn("mt-4 [--duration:60s]", className)}>
				{items.map((practice) => (
					<Card
						key={practice.name}
						className="relative mx-auto flex w-72 bg-card-elevated flex-col p-4"
					>
						<CardTitle className="text-sm">{practice.name}</CardTitle>
						<CardDescription className="text-xs">
							{practice.description}
						</CardDescription>
					</Card>
				))}
			</Marquee>
		</>
	);
}
