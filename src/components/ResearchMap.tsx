const CENTER = { x: 50, y: 50 };
const BRANCH_RADIUS = 40;

/** Angles in degrees (0 = right, counter-clockwise). */
const BRANCHES = [
  { id: "ux", label: "UX Research", angle: -90 },
  { id: "xr", label: "XR", angle: -30 },
  { id: "ai", label: "AI", angle: 30 },
  { id: "interactive", label: "Interactive Systems", angle: 90 },
  { id: "dataviz", label: "Data Visualization", angle: 150 },
  { id: "hci", label: "HCI", angle: 210 },
] as const;

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function branchPosition(angle: number) {
  const rad = toRad(angle);
  return {
    x: CENTER.x + BRANCH_RADIUS * Math.cos(rad),
    y: CENTER.y + BRANCH_RADIUS * Math.sin(rad),
  };
}

/** Slight curve outward for a classic mind-map branch. */
function branchPath(endX: number, endY: number) {
  const dx = endX - CENTER.x;
  const dy = endY - CENTER.y;
  const len = Math.hypot(dx, dy) || 1;
  const bulge = 4;
  const qx = (CENTER.x + endX) / 2 + (-dy / len) * bulge;
  const qy = (CENTER.y + endY) / 2 + (dx / len) * bulge;
  return `M ${CENTER.x} ${CENTER.y} Q ${qx} ${qy} ${endX} ${endY}`;
}

const branchNodes = BRANCHES.map((b) => ({
  ...b,
  pos: branchPosition(b.angle),
}));

const ariaLabels = [
  "Mind map of research interests",
  "centered on human-centered technology",
  "with branches for UX Research, XR, AI, Interactive Systems, Data Visualization, and HCI",
].join(", ");

export function ResearchMap() {
  return (
    <div
      className="relative aspect-[5/3] w-full min-h-[320px] overflow-hidden rounded-2xl border border-[#E7E5E4] bg-gradient-to-b from-[#E5F5F5]/80 via-[#FAFAF9] to-[#E6F2F0]/30 md:min-h-[400px]"
      role="img"
      aria-label={ariaLabels}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <radialGradient id="mindMapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 128, 128, 0.08)" />
            <stop offset="100%" stopColor="rgba(0, 128, 128, 0)" />
          </radialGradient>
        </defs>

        <rect width="100" height="100" fill="url(#mindMapGlow)" />

        {branchNodes.map((b) => (
          <path
            key={b.id}
            d={branchPath(b.pos.x, b.pos.y)}
            fill="none"
            stroke="#008080"
            strokeWidth={0.55}
            strokeOpacity={0.45}
            strokeLinecap="round"
          />
        ))}

        {/* Center hub */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={11}
          fill="#008080"
          stroke="#006666"
          strokeWidth={0.25}
        />
        <text
          x={CENTER.x}
          y={49.2}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={3.2}
          fontWeight={600}
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          Research
        </text>
        <text
          x={CENTER.x}
          y={52.2}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={3.2}
          fontWeight={600}
          style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
        >
          Interests
        </text>
      </svg>

      {branchNodes.map((b) => {
        const isWide = b.label.length > 12;
        return (
          <div
            key={b.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${b.pos.x}%`, top: `${b.pos.y}%` }}
          >
            <span
              className={`block border border-[#008080]/35 bg-white px-3 py-1.5 text-center font-medium shadow-sm ${
                isWide
                  ? "max-w-[9.5rem] rounded-xl text-[11px] leading-snug md:max-w-[11rem] md:text-xs"
                  : "whitespace-nowrap rounded-full text-xs md:text-sm"
              }`}
              style={{ color: "#141414" }}
            >
              {b.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
