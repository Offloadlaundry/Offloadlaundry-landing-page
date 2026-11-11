import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0D4F4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#FAFAFA",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          OL
        </span>
      </div>
    ),
    { ...size }
  );
}
