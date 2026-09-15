"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type NodeId =
  | "assets"
  | "core"
  | "wifi"
  | "endpoints"
  | "cameras"
  | "identity"
  | "access"
  | "locations"
  | "building";

type AssetNode = {
  id: NodeId;
  label: string;
  x: number;
  y: number;
  w: number;
  early?: boolean;
  center?: boolean;
  mobile?: boolean;
};

type Edge = { from: NodeId; to: NodeId };

const NODES: AssetNode[] = [
  { id: "wifi", label: "Wi-Fi", x: 280, y: 58, w: 70, mobile: false },
  { id: "core", label: "Core Network", x: 108, y: 98, w: 118, early: true, mobile: true },
  { id: "identity", label: "Identity / Access", x: 428, y: 98, w: 132, mobile: false },
  { id: "endpoints", label: "Endpoints", x: 86, y: 200, w: 102, early: true, mobile: true },
  { id: "assets", label: "Technology Assets", x: 280, y: 200, w: 156, center: true, mobile: true },
  { id: "cameras", label: "Cameras", x: 472, y: 200, w: 90, mobile: false },
  { id: "locations", label: "Locations", x: 118, y: 318, w: 98, early: true, mobile: true },
  { id: "access", label: "Access Control", x: 280, y: 348, w: 122, mobile: true },
  { id: "building", label: "Building Systems", x: 448, y: 318, w: 132, mobile: true },
];

const EDGES: Edge[] = [
  { from: "assets", to: "core" },
  { from: "assets", to: "endpoints" },
  { from: "assets", to: "locations" },
  { from: "assets", to: "identity" },
  { from: "core", to: "wifi" },
  { from: "core", to: "endpoints" },
  { from: "identity", to: "endpoints" },
  { from: "identity", to: "access" },
  { from: "locations", to: "endpoints" },
  { from: "locations", to: "cameras" },
  { from: "locations", to: "access" },
  { from: "building", to: "locations" },
  { from: "building", to: "access" },
];

const NODE_MAP = Object.fromEntries(NODES.map((node) => [node.id, node])) as Record<
  NodeId,
  AssetNode
>;

const CENTER = { x: 280, y: 200 };

function curvePath(from: AssetNode, to: AssetNode) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return `M ${from.x} ${from.y} Q ${mx - dy * 0.07} ${my + dx * 0.07} ${to.x} ${to.y}`;
}

function neighborsOf(id: NodeId) {
  return EDGES.filter((edge) => edge.from === id || edge.to === id).map((edge) =>
    edge.from === id ? edge.to : edge.from,
  );
}

function badgeLabel(phase: number, organized: number) {
  if (phase <= 1) return "Discovery";
  if (phase === 2) return "Assets";
  if (phase === 3) return "Organization";
  if (phase === 4) return "Visibility";
  if (organized > 0.55) return "Understand";
  return "Visible";
}

export function TechnologyVisibility() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(1);
  const [interactive, setInteractive] = useState(false);
  const [organized, setOrganized] = useState(0);
  const [hovered, setHovered] = useState<NodeId | null>(null);
  const [compact, setCompact] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 720px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhase(5);
      setInteractive(true);
      setPulse(false);
      return;
    }

    setPhase(1);
    setInteractive(false);
    const appear = compact ? 480 : 700;
    const relate = compact ? 1100 : 1550;
    const vis = compact ? 1700 : 2350;
    const done = compact ? 2200 : 3100;

    const timers = [
      window.setTimeout(() => setPhase(2), appear),
      window.setTimeout(() => setPhase(3), relate),
      window.setTimeout(() => {
        setPhase(4);
        if (!compact) setPulse(true);
      }, vis),
      window.setTimeout(() => {
        setPhase(5);
        setInteractive(true);
      }, done),
    ];

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reduceMotion, compact]);

  useEffect(() => {
    const section = document.getElementById("visibility");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOrganized(Math.min(1, Math.max(0, (entry.intersectionRatio - 0.06) / 0.5)));
      },
      { threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.7, 0.9, 1] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const visibleIds = useMemo(() => {
    const allowed = compact ? NODES.filter((node) => node.mobile !== false) : NODES;
    return new Set(allowed.map((node) => node.id));
  }, [compact]);

  const placed = useMemo(
    () =>
      NODES.filter((node) => visibleIds.has(node.id)).map((node) => {
        const fragment = phase === 1 && !reduceMotion ? 0.16 : 0;
        const gather = organized * 0.1;
        const fromCenterX = node.x - CENTER.x;
        const fromCenterY = node.y - CENTER.y;
        return {
          ...node,
          x: node.x + fromCenterX * fragment - fromCenterX * gather,
          y: node.y + fromCenterY * fragment - fromCenterY * gather,
        };
      }),
    [organized, phase, reduceMotion, visibleIds],
  );

  const placedMap = Object.fromEntries(placed.map((node) => [node.id, node])) as Record<
    NodeId,
    AssetNode
  >;

  const visibleEdges = EDGES.filter(
    (edge) => visibleIds.has(edge.from) && visibleIds.has(edge.to),
  );

  const connected = hovered ? new Set([hovered, ...neighborsOf(hovered)]) : null;
  const activeEdges = hovered
    ? new Set(
        visibleEdges
          .filter((edge) => edge.from === hovered || edge.to === hovered)
          .map((edge) => `${edge.from}-${edge.to}`),
      )
    : null;

  const hoveredNode = hovered ? placedMap[hovered] : null;
  const hoverRelated = hovered
    ? neighborsOf(hovered)
        .filter((id) => visibleIds.has(id))
        .map((id) => NODE_MAP[id].label)
        .join(" · ")
    : "";

  const pulsePoints = ["core", "assets", "endpoints", "locations"]
    .map((id) => placedMap[id as NodeId])
    .filter(Boolean);

  return (
    <figure className="visual-card">
      <div className="topo-stage">
        <p className="topo-badge" aria-hidden="true">
          {badgeLabel(phase, organized)}
        </p>
        <p className="sr-only" aria-live="polite">
          Visualization state: {badgeLabel(phase, organized)}. Technology is
          easier to manage when you can see it.
        </p>
        <svg viewBox="0 0 560 420" role="img" aria-labelledby="topoTitle topoDesc">
          <title id="topoTitle">Technology environment becoming visible</title>
          <desc id="topoDesc">
            Diagram of an organization’s technology assets and infrastructure.
            Nodes appear, relationships form, then the environment becomes
            visible. After the sequence, hover or focus a node to see connected
            systems. This represents an environment to understand and organize,
            not systems HalaOne installs.
          </desc>
          <rect width="560" height="420" fill="#ffffff" />
          <g
            stroke="#eef0f2"
            strokeWidth="1"
            fill="none"
            opacity={0.7 + organized * 0.3}
          >
            <path d="M40 70h480M40 140h480M40 210h480M40 280h480M40 350h480" />
            <path d="M80 40v340M160 40v340M240 40v340M320 40v340M400 40v340M480 40v340" />
          </g>

          {visibleEdges.map((edge, index) => {
            const from = placedMap[edge.from];
            const to = placedMap[edge.to];
            const key = `${edge.from}-${edge.to}`;
            const dimmed = Boolean(activeEdges) && !activeEdges.has(key);
            const emphasized = Boolean(activeEdges) && activeEdges.has(key);
            return (
              <motion.path
                key={key}
                d={curvePath(from, to)}
                fill="none"
                stroke="#2A4D68"
                strokeWidth={emphasized ? 1.8 : 1.2}
                initial={false}
                animate={{
                  pathLength: phase >= 3 || reduceMotion ? 1 : 0,
                  opacity: dimmed ? 0.07 : 0.22 + organized * 0.28 + (emphasized ? 0.18 : 0),
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.72,
                  delay: reduceMotion || phase < 3 ? 0 : index * 0.04,
                  ease: "easeOut",
                }}
              />
            );
          })}

          {pulse && pulsePoints.length === 4 && !reduceMotion ? (
            <motion.circle
              r="3.4"
              fill="#2A4D68"
              initial={{ opacity: 0, cx: pulsePoints[0].x, cy: pulsePoints[0].y }}
              animate={{
                opacity: [0, 0.8, 0.8, 0],
                cx: pulsePoints.map((point) => point.x),
                cy: pulsePoints.map((point) => point.y),
              }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              onAnimationComplete={() => setPulse(false)}
            />
          ) : null}

          {placed.map((node, index) => {
            const inDiscovery = phase === 1 && !reduceMotion;
            const visible =
              reduceMotion || phase >= 2 || Boolean(node.early && inDiscovery);
            const unresolved = Boolean(inDiscovery && node.early);
            const related = !connected || connected.has(node.id);
            const height = node.center ? 32 : 28;

            return (
              <motion.g
                key={node.id}
                className="topo-node"
                role="button"
                tabIndex={interactive ? 0 : -1}
                aria-label={`${node.label}. Connected to ${neighborsOf(node.id)
                  .filter((id) => visibleIds.has(id))
                  .map((id) => NODE_MAP[id].label)
                  .join(", ")}`}
                initial={false}
                animate={{
                  x: node.x,
                  y: node.y,
                  opacity: visible ? (related ? (unresolved ? 0.34 : 1) : 0.26) : 0,
                  scale: hovered === node.id ? 1.035 : visible ? 1 : 0.97,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion || phase < 2 ? 0 : index * 0.045,
                  ease: "easeOut",
                }}
                style={{ cursor: interactive ? "pointer" : "default" }}
                onHoverStart={() => interactive && setHovered(node.id)}
                onHoverEnd={() =>
                  setHovered((current) => (current === node.id ? null : current))
                }
                onFocus={() => interactive && setHovered(node.id)}
                onBlur={() =>
                  setHovered((current) => (current === node.id ? null : current))
                }
                onKeyDown={(event) => {
                  if (event.key === "Escape") setHovered(null);
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setHovered(node.id);
                  }
                }}
              >
                <rect
                  x={-node.w / 2}
                  y={-height / 2}
                  width={node.w}
                  height={height}
                  rx="8"
                  fill={node.center ? "#EEF3F7" : "#ffffff"}
                  stroke={related ? "#2A4D68" : "#C5CDD4"}
                  strokeWidth={node.center || hovered === node.id ? 1.5 : 1.1}
                  strokeDasharray={unresolved ? "3 4" : undefined}
                />
                <circle
                  cx={12 - node.w / 2}
                  cy="0"
                  r={node.center ? 3.5 : 3}
                  fill={related ? "#2A4D68" : "#A8B3BC"}
                  opacity={unresolved ? 0.45 : 1}
                />
                <text
                  x={22 - node.w / 2}
                  y="4"
                  fill="#17191C"
                  fontSize={node.center ? 11.5 : 11}
                  fontFamily="IBM Plex Sans, system-ui, sans-serif"
                >
                  {node.label}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {hoveredNode ? (
          <div
            className={`topo-tip${hoveredNode.y < 90 ? " topo-tip--below" : ""}`}
            style={{
              left: `${Math.min(78, Math.max(12, (hoveredNode.x / 560) * 100))}%`,
              top: `${(hoveredNode.y / 420) * 100}%`,
            }}
            role="status"
          >
            <strong>{hoveredNode.label}</strong>
            <span>Connected: {hoverRelated}</span>
          </div>
        ) : null}
      </div>
      <figcaption>
        Technology is easier to manage when you can see it. The map represents
        an environment HalaOne helps organizations understand and organize—not
        systems we install or operate.
      </figcaption>
    </figure>
  );
}
