import { chapterNumber } from "@/app/components/chapters";
import Reveal from "@/app/components/ui/Reveal";

export default function ChapterHeading({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 mb-10 sm:mb-12">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-brass whitespace-nowrap">
          Chapter {chapterNumber(id)}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink [text-wrap:balance]">
          {title}
        </h2>
        <span className="hidden sm:block flex-1 h-px bg-hairline self-center" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
