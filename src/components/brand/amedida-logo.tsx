import { cn } from "@/lib/utils";

type AmedidaLogoProps = {
  size?: "compact" | "large";
  className?: string;
};

const sizeClasses = {
  compact: "h-9 w-[8.75rem]",
  large: "h-12 w-[11.75rem]",
};

export function AmedidaLogo({ size = "compact", className }: AmedidaLogoProps) {
  const gradientId = `amedida-logo-gradient-${size}`;

  return (
    <svg
      aria-label="A-Medida"
      className={cn(sizeClasses[size], "block shrink-0", className)}
      fill="none"
      role="img"
      viewBox="0 0 236 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          x1="10"
          x2="226"
          y1="10"
          y2="62"
        >
          <stop stopColor="var(--teal)" />
          <stop offset="0.48" stopColor="#7f756a" />
          <stop offset="1" stopColor="var(--pink)" />
        </linearGradient>
      </defs>
      <rect
        height="58"
        rx="15"
        stroke={`url(#${gradientId})`}
        strokeWidth="7"
        width="222"
        x="7"
        y="7"
      />
      <g stroke={`url(#${gradientId})`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
        <path d="M29 50 L43 22 L57 50" />
        <path d="M179 50 L193 22 L207 50" />
      </g>
      <text
        fill={`url(#${gradientId})`}
        fontFamily="var(--font-ubuntu), Ubuntu, Arial, sans-serif"
        fontSize="31"
        fontWeight="700"
        letterSpacing="2.6"
        x="65"
        y="48"
      >
        MEDID
      </text>
    </svg>
  );
}
