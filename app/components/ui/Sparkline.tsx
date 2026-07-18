const HUES = {
  blue: "var(--chart-blue)",
  green: "var(--chart-green)",
  orange: "var(--chart-orange)",
} as const;

/** Deterministic decorative sparkline — shape derived from `seed` so
 *  each post card gets its own consistent little chart. */
export default function Sparkline({
  seed,
  hue = "blue",
  width = 88,
  height = 30,
}: {
  seed: string;
  hue?: keyof typeof HUES;
  width?: number;
  height?: number;
}) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 1000) / 1000;
  };

  const n = 7;
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = 2 + (i * (width - 4)) / (n - 1);
    // trend gently upward with noise — every chart ends higher than it starts
    const base = height - 6 - (i / (n - 1)) * (height - 12);
    const y = Math.max(3, Math.min(height - 3, base + (rand() - 0.5) * 8));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className="shrink-0"
    >
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={HUES[hue]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={pts[pts.length - 1].split(",")[0]}
        cy={pts[pts.length - 1].split(",")[1]}
        r="2.5"
        fill="var(--chart-orange)"
      />
    </svg>
  );
}
