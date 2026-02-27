import { SLogoIcon } from "@/components/icons/s-logo-icon";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
	return (
		<Section
			id="works"
			title="Highlight projects from the lab"
			description="A curated selection of experiments, builds, and explorations from Siddharth's dev journey — from neural nets to CTF tools."
			className="grid grid-cols-1 gap-4"
			badgeText="Featured projects"
			badgeIcon={<SLogoIcon aria-hidden="true" size={14} />}
		>
			{works.map((item) => (
				<WorksCard
					key={item.title}
					image={item.image}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</Section>
	);
}
