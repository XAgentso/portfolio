/**
 * Siddharth's personal "S" monogram logo icon — used in section badges.
 * Uses mix-blend-mode: luminosity for light/dark compatibility.
 */
export function SLogoIcon({
    size = 14,
    className,
}: {
    className?: string;
    size?: number;
    [key: string]: unknown;
}) {
    return (
        <img
            src="/slogo.png"
            alt=""
            aria-hidden="true"
            width={size}
            height={size}
            className={className}
            style={{
                objectFit: "contain",
                display: "inline-block",
                mixBlendMode: "luminosity",
            }}
        />
    );
}
