import Image from "next/image";

import { cn } from "@/lib/utils";

type AmedidaLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const variantClasses = {
  header: "w-[9.75rem] sm:w-48",
  footer: "w-56 sm:w-64",
};

export function AmedidaLogo({
  variant = "header",
  className,
}: AmedidaLogoProps) {
  return (
    <Image
      alt="A-Medida"
      className={cn(
        "block h-auto max-w-full shrink-0 object-contain",
        variantClasses[variant],
        className,
      )}
      height={383}
      priority={variant === "header"}
      src="/brand/amedida-logo.png"
      width={1411}
    />
  );
}
