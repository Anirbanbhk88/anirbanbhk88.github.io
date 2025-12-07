import React from 'react'

export default function AIBanner({ className = '' }) {
    return (
        <svg className={className} viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#d946ef', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.9 }} />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <rect width="1200" height="400" fill="url(#bgGradient)" />

            {/* Left neural nodes (animated) */}
            <circle className="node node-1" cx="80" cy="60" r="6" fill="#6366f1" opacity="0.9" filter="url(#glow)" />
            <circle className="node node-2" cx="120" cy="120" r="8" fill="#a855f7" opacity="0.8" filter="url(#glow)" />
            <circle className="node node-3" cx="100" cy="180" r="5" fill="#6366f1" opacity="0.7" />
            <circle className="node node-4" cx="150" cy="240" r="7" fill="#a855f7" opacity="0.85" filter="url(#glow)" />
            <circle className="node node-5" cx="90" cy="300" r="6" fill="#6366f1" opacity="0.7" />

            <line className="conn" x1="80" y1="60" x2="120" y2="120" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="120" y1="120" x2="100" y2="180" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="100" y1="180" x2="150" y2="240" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="150" y1="240" x2="90" y2="300" stroke="#ffffff22" strokeWidth="1" />

            {/* Right nodes */}
            <circle className="node node-6" cx="1100" cy="80" r="7" fill="#6366f1" opacity="0.85" filter="url(#glow)" />
            <circle className="node node-7" cx="1050" cy="150" r="9" fill="#a855f7" opacity="0.85" filter="url(#glow)" />
            <circle className="node node-8" cx="1120" cy="220" r="6" fill="#6366f1" opacity="0.7" />
            <circle className="node node-9" cx="1070" cy="280" r="8" fill="#a855f7" opacity="0.8" filter="url(#glow)" />
            <circle className="node node-10" cx="1140" cy="340" r="7" fill="#6366f1" opacity="0.7" />

            <line className="conn" x1="1100" y1="80" x2="1050" y2="150" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="1050" y1="150" x2="1120" y2="220" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="1120" y1="220" x2="1070" y2="280" stroke="#ffffff22" strokeWidth="1" />
            <line className="conn" x1="1070" y1="280" x2="1140" y2="340" stroke="#ffffff22" strokeWidth="1" />

            {/* Center chip concept */}
            <g className="chip" opacity="0.16">
                <rect x="550" y="150" width="100" height="100" fill="none" stroke="url(#accentGradient)" strokeWidth="2" rx="8" />
                <rect x="570" y="170" width="60" height="60" fill="none" stroke="url(#accentGradient)" strokeWidth="1" rx="4" />
            </g>

            {/* Decorative circles */}
            <circle className="float circle-1" cx="300" cy="80" r="20" fill="url(#accentGradient)" opacity="0.08" />
            <circle className="float circle-2" cx="900" cy="320" r="25" fill="url(#accentGradient)" opacity="0.08" />
            <circle className="float circle-3" cx="400" cy="320" r="15" fill="url(#accentGradient)" opacity="0.06" />

            {/* subtle grid */}
            <g opacity="0.03" stroke="#ffffff">
                <line x1="0" y1="50" x2="1200" y2="50" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="1200" y2="100" strokeWidth="0.5" />
                <line x1="0" y1="150" x2="1200" y2="150" strokeWidth="0.5" />
                <line x1="0" y1="200" x2="1200" y2="200" strokeWidth="0.5" />
                <line x1="0" y1="250" x2="1200" y2="250" strokeWidth="0.5" />
                <line x1="0" y1="300" x2="1200" y2="300" strokeWidth="0.5" />
                <line x1="0" y1="350" x2="1200" y2="350" strokeWidth="0.5" />
            </g>
        </svg>
    )
}
