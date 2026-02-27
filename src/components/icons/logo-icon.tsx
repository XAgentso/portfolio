import type { HTMLAttributes } from "react";

interface LogoIconProps extends HTMLAttributes<HTMLImageElement> {
	className?: string;
}

/**
 * Siddharth's S-monogram logo icon.
 * mix-blend-mode: multiply makes the black background transparent on light surfaces.
 * The logo is always visible in dark mode natively.
 */
export function LogoIcon({ className, style, ...props }: LogoIconProps) {
	return (
		<img
			src="/slogo.png"
			alt="Siddharth Singh logo"
			aria-hidden="true"
			className={className}
			style={{
				mixBlendMode: "luminosity",
				...style,
			}}
			{...(props as HTMLAttributes<HTMLImageElement>)}
		/>
	);
}
