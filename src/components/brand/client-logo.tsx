import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ClientLogo as ClientLogoContent } from "@/content/types";

type ClientLogoProps = {
  client: ClientLogoContent;
  className?: string;
};

export function ClientLogo({ client, className }: ClientLogoProps) {
  const logo = (
    <span
      className={cn(
        "group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 focus-visible:border-primary/40",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 opacity-70 accent-rule"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,116,109,0.08),transparent_32%),radial-gradient(circle_at_86%_12%,rgba(193,95,130,0.08),transparent_30%)]"
      />
      <span className="relative block h-[70%] w-[82%]">
        <Image
          alt={client.alt}
          className="object-contain opacity-75 grayscale saturate-50 contrast-110 transition duration-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-focus-visible:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:saturate-100"
          fill
          sizes="(min-width: 1280px) 220px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          src={client.logo}
        />
      </span>
    </span>
  );

  if (!client.website) {
    return logo;
  }

  return (
    <a
      aria-label={client.name}
      className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      href={client.website}
      rel="noreferrer"
      target="_blank"
    >
      {logo}
    </a>
  );
}
