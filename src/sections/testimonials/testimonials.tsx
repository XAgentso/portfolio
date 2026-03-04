import { SLogoIcon } from "@/components/icons/s-logo-icon";
import Section from "@/components/layout/section";
import { internships } from "@/sections/testimonials/_constants/testimonials";

export default function Testimonials() {
	return (
		<Section
			id="testimonials"
			title="Work Experience"
			description="Internships across web development, data science, Python, machine learning, and data analytics."
			badgeText="Experience"
			badgeIcon={<SLogoIcon aria-hidden="true" size={14} />}
		>
			<div className="relative w-full col-span-full">
				{/* Vertical timeline line */}
				<div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

				<div className="flex flex-col gap-8">
					{internships.map((item) => (
						<div key={item.company} className="relative flex gap-6 sm:gap-10">
							{/* Timeline dot */}
							<div className="relative z-10 flex-shrink-0 flex items-start justify-center w-10">
								<div className="mt-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_8px_2px] shadow-primary/40" />
							</div>

							{/* Card */}
							<div className="flex-1 rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
								{/* Header */}
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
									<div>
										<h3 className="text-base font-semibold text-foreground leading-tight">
											{item.company}
										</h3>
										<p className="text-sm text-primary font-medium">
											{item.designation} · {item.division}
										</p>
									</div>
									<span className="inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium text-muted-foreground whitespace-nowrap self-start sm:self-center">
										{item.duration}
									</span>
								</div>

								{/* Divider */}
								<div className="border-t mb-3" />

								{/* Work profile */}
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.workProfile}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
