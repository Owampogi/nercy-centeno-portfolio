import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nercy Joshua B. Centeno — AI Automation Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #111D32 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #C9A962, #D4A853)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #131A2A, #1E293B)",
              border: "1px solid rgba(201, 169, 98, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F8FAFC",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            NC
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "#F8FAFC",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Nercy Joshua B. Centeno
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "22px",
            color: "#C9A962",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          AI Automation Specialist | Client Success Manager
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "16px",
            color: "#7A8BA0",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Helping businesses streamline operations, automate workflows, and scale efficiently through AI-powered systems.
        </div>
      </div>
    ),
    { ...size }
  );
}