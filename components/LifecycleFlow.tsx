"use client";

import { useEffect, useRef, useState } from "react";

export function LifecycleFlow() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playKey, setPlayKey] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const sync = () => setReduceMotion(media.matches);
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayKey((key) => key + 1);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div ref={wrapRef} className="lifecycle-flow">
      <svg
        key={reduceMotion ? "static" : playKey}
        viewBox="0 0 1200 380"
        role="img"
        aria-labelledby="lifecycleTitle lifecycleDesc"
        className={reduceMotion ? "lifecycle-flow--static" : undefined}
      >
        <title id="lifecycleTitle">The asset lifecycle, made visible</title>
        <desc id="lifecycleDesc">
          Diagram of three lifecycle stages connected in sequence: Audit,
          Track, Reconcile.
        </desc>
        <defs>
          <marker
            id="lifecycle-arrowhead"
            markerWidth="10"
            markerHeight="8"
            refX="9"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 10 4, 0 8" fill="#7FC1E8" />
          </marker>

          <style>{`
            @keyframes lifecycleFadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes lifecycleDrawLine {
              from { stroke-dashoffset: var(--len); }
              to   { stroke-dashoffset: 0; }
            }
            @keyframes lifecyclePulseRing {
              0%   { opacity: 0.55; transform: scale(1); }
              50%  { opacity: 0.15; transform: scale(1.35); }
              100% { opacity: 0.55; transform: scale(1); }
            }

            .lifecycle-node { opacity: 0; animation: lifecycleFadeUp 0.6s ease-out forwards; transform-origin: center; }
            .lifecycle-n1 { animation-delay: 0.1s; }
            .lifecycle-n2 { animation-delay: 0.9s; }
            .lifecycle-n3 { animation-delay: 1.7s; }

            .lifecycle-arrow {
              stroke-dasharray: var(--len);
              stroke-dashoffset: var(--len);
              animation: lifecycleDrawLine 0.5s ease-out forwards;
            }
            .lifecycle-a1 { --len: 56; animation-delay: 0.6s; }
            .lifecycle-a2 { --len: 56; animation-delay: 1.4s; }

            .lifecycle-pulse {
              transform-box: fill-box;
              transform-origin: center;
              animation: lifecyclePulseRing 2s ease-in-out infinite;
              animation-delay: 2.3s;
            }

            .lifecycle-caption { opacity: 0; animation: lifecycleFadeUp 0.6s ease-out forwards; animation-delay: 2.3s; }

            .lifecycle-flow--static .lifecycle-node,
            .lifecycle-flow--static .lifecycle-caption {
              opacity: 1;
              animation: none;
              transform: none;
            }
            .lifecycle-flow--static .lifecycle-arrow {
              stroke-dashoffset: 0;
              animation: none;
            }
            .lifecycle-flow--static .lifecycle-pulse {
              animation: none;
            }
          `}</style>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="1200" height="380" fill="#FFFFFF" />

        {/* Eyebrow label */}
        <text x="60" y="50" fontSize="13" letterSpacing="2" fill="#5B9BD5" fontWeight="600">
          HOW IT WORKS
        </text>

        {/* Title */}
        <text x="60" y="90" fontSize="28" fill="#1E3A52" fontWeight="600">
          The asset lifecycle, made visible.
        </text>

        {/* Static base line (faint, always present) */}
        <line x1="90" y1="240" x2="1110" y2="240" stroke="#EAF5FC" strokeWidth="3" />

        {/* Node 1: Audit */}
        <g className="lifecycle-node lifecycle-n1">
          <rect x="60" y="175" width="305" height="130" rx="14" fill="#FFFFFF" stroke="#7FC1E8" strokeWidth="2" />
          <circle cx="88" cy="240" r="5" fill="#5B9BD5" />
          <text x="104" y="209" fontSize="16" fill="#1E3A52" fontWeight="600">Audit</text>
          <text x="104" y="233" fontSize="12" fill="#5B7A8C">
            Inventory technology across the environment
          </text>
          <text x="104" y="253" fontSize="12" fill="#5B7A8C">
            and verify it against existing records.
          </text>
        </g>

        {/* Arrow 1 */}
        <line
          className="lifecycle-arrow lifecycle-a1"
          x1="367"
          y1="240"
          x2="423"
          y2="240"
          stroke="#7FC1E8"
          strokeWidth="2.5"
          markerEnd="url(#lifecycle-arrowhead)"
        />

        {/* Node 2: Track (emphasized, with pulse ring) */}
        <g className="lifecycle-node lifecycle-n2">
          <circle className="lifecycle-pulse" cx="600" cy="240" r="72" fill="none" stroke="#5B9BD5" strokeWidth="2" />
          <rect x="425" y="165" width="350" height="150" rx="16" fill="#EAF5FC" stroke="#5B9BD5" strokeWidth="2.5" />
          <circle cx="455" cy="240" r="5" fill="#2C5F8A" />
          <text x="473" y="203" fontSize="17" fill="#1E3A52" fontWeight="700">Track</text>
          <text x="473" y="229" fontSize="12" fill="#4A6B80">
            Follow each asset through deployment,
          </text>
          <text x="473" y="251" fontSize="12" fill="#4A6B80">
            use, change, and replacement.
          </text>
        </g>

        {/* Arrow 2 */}
        <line
          className="lifecycle-arrow lifecycle-a2"
          x1="777"
          y1="240"
          x2="833"
          y2="240"
          stroke="#7FC1E8"
          strokeWidth="2.5"
          markerEnd="url(#lifecycle-arrowhead)"
        />

        {/* Node 3: Reconcile */}
        <g className="lifecycle-node lifecycle-n3">
          <rect x="835" y="175" width="305" height="130" rx="14" fill="#FFFFFF" stroke="#7FC1E8" strokeWidth="2" />
          <circle cx="863" cy="240" r="5" fill="#5B9BD5" />
          <text x="879" y="209" fontSize="16" fill="#1E3A52" fontWeight="600">Reconcile</text>
          <text x="879" y="233" fontSize="12" fill="#5B7A8C">
            Keep the asset record accurate as the
          </text>
          <text x="879" y="253" fontSize="12" fill="#5B7A8C">
            environment continues to change.
          </text>
        </g>

        {/* Caption */}
        <text className="lifecycle-caption" x="60" y="345" fontSize="13" fill="#7B93A3">
          Every asset moves through this cycle. HalaOne keeps the record current at every stage.
        </text>
      </svg>
    </div>
  );
}
