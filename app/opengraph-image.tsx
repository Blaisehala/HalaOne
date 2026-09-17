import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "HalaOne — IT Asset Management (ITAM)";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px 80px",
          color: "#17191C",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#2A4D68",
            }}
          />
          HalaOne
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, lineHeight: 1.1, maxWidth: 900 }}>
            IT Asset Management, done properly.
          </div>
          <div style={{ fontSize: 26, color: "#5E646C", maxWidth: 760 }}>
            Technology Asset & Infrastructure Management
          </div>
        </div>
      </div>
    ),
    size,
  );
}
