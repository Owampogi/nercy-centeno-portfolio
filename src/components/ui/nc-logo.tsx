"use client";

interface NCLogoProps {
  size?: number;
  className?: string;
}

export function NCLogo({ size = 40, className = "" }: NCLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NC Logo"
    >
      {/* Background rounded square */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="20"
        fill="url(#logo-gradient)"
        stroke="url(#logo-stroke)"
        strokeWidth="1.5"
      />
      {/* N letter */}
      <path
        d="M28 72V28L48 58V28H54V72L34 42V72H28Z"
        fill="#F8FAFC"
        opacity="0.95"
      />
      {/* C letter */}
      <path
        d="M72 46C72 35.5 64 28 54 28C51 28 48.5 28.5 46 30C44 31 43 31.5 42 31.5C40 31.5 39.5 30.5 39.5 29C39.5 28 40 27 41 26C44 23.5 48.5 22 54 22C68 22 78 32 78 46C78 60 68 70 54 70C48.5 70 44 68.5 41 66C40 65 39.5 64 39.5 63C39.5 61.5 40 60.5 42 59.5C43 59 44 58.5 46 58C48.5 57.5 51 57 54 57C64 57 72 53 72 46Z"
        fill="#F8FAFC"
        opacity="0.95"
      />
      {/* Subtle accent line */}
      <line
        x1="20"
        y1="85"
        x2="80"
        y2="85"
        stroke="url(#logo-accent-line)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#131A2A" />
          <stop offset="1" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient
          id="logo-stroke"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9A962" stopOpacity="0.4" />
          <stop offset="1" stopColor="#D4A853" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient
          id="logo-accent-line"
          x1="20"
          y1="85"
          x2="80"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C9A962" />
          <stop offset="1" stopColor="#D4A853" />
        </linearGradient>
      </defs>
    </svg>
  );
}