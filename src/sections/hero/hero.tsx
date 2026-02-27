import { useGSAP } from "@gsap/react";
import { SLogoIcon } from "@/components/icons/s-logo-icon";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import {
	gsap,
	premiumEase,
	registerGsapPlugins,
	SplitText,
} from "@/lib/gsap-config";
import { useLenis } from "@/lib/lenis-context";
import { Background } from "@/sections/hero/_components/background";
import { spawnHearts } from "@/components/ui/cyber-effects";

registerGsapPlugins();

export default function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const actionsRef = useRef<HTMLDivElement>(null);
	const [fontsLoaded, setFontsLoaded] = useState(() => {
		if (typeof document === "undefined") {
			return false;
		}

		if (!("fonts" in document)) {
			return true;
		}

		return document.fonts.status === "loaded";
	});
	const { scrollTo } = useLenis();

	useEffect(() => {
		if (fontsLoaded || typeof document === "undefined") {
			return;
		}

		if (!("fonts" in document)) {
			setFontsLoaded(true);
			return;
		}

		let isActive = true;
		document.fonts.ready.then(() => {
			if (isActive) {
				setFontsLoaded(true);
			}
		});

		return () => {
			isActive = false;
		};
	}, [fontsLoaded]);

	// Spawn heart confetti on mount for rom-com warmth
	useEffect(() => {
		if (typeof window === "undefined") return;
		const timer = setTimeout(() => {
			const cx = window.innerWidth / 2;
			const cy = window.innerHeight / 2 - 60;
			spawnHearts(cx, cy, 8);
		}, 1800);
		return () => clearTimeout(timer);
	}, []);

	useGSAP(
		(context) => {
			if (!fontsLoaded) {
				return;
			}

			const hero = heroRef.current;
			if (!hero) return;

			gsap.set(
				[badgeRef.current, titleRef.current, descriptionRef.current, actionsRef.current],
				{ autoAlpha: 1 }
			);

			const splits: SplitText[] = [];
			context.add(() => {
				splits.forEach((split) => {
					split.revert();
				});
			});

			const titleSplit = titleRef.current
				? new SplitText(titleRef.current, { type: "lines" })
				: null;

			const descriptionSplit = descriptionRef.current
				? new SplitText(descriptionRef.current, { type: "lines" })
				: null;

			if (titleSplit) {
				splits.push(titleSplit);
			}
			if (descriptionSplit) {
				splits.push(descriptionSplit);
			}

			const timeline = gsap.timeline({
				defaults: {
					ease: premiumEase,
				},
				scrollTrigger: {
					trigger: hero,
					start: "top 80%",
					once: true,
				},
			});

			if (badgeRef.current) {
				timeline.from(badgeRef.current, {
					yPercent: 30,
					autoAlpha: 0,
					filter: "blur(16px)",
					duration: 0.9,
					ease: premiumEase,
				});
			}

			if (titleSplit) {
				timeline.from(
					titleSplit.lines,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}

			if (descriptionSplit) {
				timeline.from(
					descriptionSplit.lines,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}

			if (actionsRef.current) {
				const buttons = Array.from(
					actionsRef.current.children,
				) as HTMLElement[];
				timeline.fromTo(
					buttons,
					{
						yPercent: 30,
						autoAlpha: 0,
						filter: "blur(16px)",
						ease: premiumEase,
					},
					{
						yPercent: 0,
						autoAlpha: 1,
						filter: "blur(0px)",
						clearProps: "filter",
						stagger: 0.15,
						duration: 0.9,
						ease: premiumEase,
					},
					"-=0.6",
				);
			}
		},
		{
			scope: heroRef,
			dependencies: [fontsLoaded],
		},
	);

	return (
		<section
			id="hero"
			ref={heroRef}
			className="relative flex h-[65vh] md:h-[60vh] w-full px-4 md:px-16 flex-col items-center justify-center gap-6"
		>
			<div className="relative z-10 flex flex-col items-center gap-3">
				<div style={{ visibility: "hidden" }} ref={badgeRef} className="w-fit">
					<ShinyBadge>
						<SLogoIcon aria-hidden="true" size={14} />
						CS Student · AI/ML · Cybersecurity
					</ShinyBadge>
				</div>
				<h1
					style={{ visibility: "hidden" }}
					ref={titleRef}
					className="text-4xl md:text-5xl text-center font-semibold text-balance max-w-3xl leading-tight"
				>
					<span className="glow-text">Siddharth Singh</span>
					<br />
					<span className="text-foreground/80 text-3xl md:text-4xl font-medium">
						Future Tech Innovator
					</span>
				</h1>
				<p
					style={{ visibility: "hidden" }}
					ref={descriptionRef}
					className="text-base md:text-lg text-center text-foreground/60 font-medium text-balance leading-relaxed max-w-xl"
				>
					I am a Computer Science Engineer with hands-on experience in software
					development, data analysis, and modern web technologies. I focus on
					building efficient, scalable, and user-centric solutions while
					continuously learning and evolving with new technologies.
				</p>
			</div>
			<div ref={actionsRef} className="relative z-10 flex items-center gap-3">
				<Button
					style={{ visibility: "hidden" }}
					variant="default"
					size="md"
					onClick={() => scrollTo("#projects")}
					className="font-semibold"
				>
					View Projects ⬡
				</Button>
				<Button
					style={{ visibility: "hidden" }}
					variant="secondary"
					size="md"
					onClick={() => scrollTo("#contact")}
				>
					Get in Touch
				</Button>
			</div>

			<div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
				<Background />
			</div>
		</section>
	);
}
