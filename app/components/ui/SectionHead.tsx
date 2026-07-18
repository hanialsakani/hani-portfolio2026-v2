import Reveal from "@/app/components/ui/Reveal";

const HUES = {
  blue: "var(--chart-blue)",
  green: "var(--chart-green)",
  orange: "var(--chart-orange)",
} as const;

export default function SectionHead({
  kicker,
  title,
  hue = "blue",
}: {
  kicker: string;
  title: string;
  hue?: keyof typeof HUES;
}) {
  return (
    <Reveal>
      <div className="mb-10 sm:mb-12">
        <p
          className="font-mono text-[11px] tracking-[0.18em] uppercase mb-2"
          style={{ color: HUES[hue] }}
        >
          {kicker}
        </p>
        <div className="flex items-center gap-4">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink [text-wrap:balance]">
            {title}
          </h2>
          <svg
            width="64"
            height="18"
            viewBox="0 0 64 18"
            aria-hidden="true"
            className="hidden sm:block shrink-0 mt-1"
          >
            <polyline
              points="2,14 14,11 26,12 38,7 50,8 62,3"
              fill="none"
              stroke={HUES[hue]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </Reveal>
  );
}
