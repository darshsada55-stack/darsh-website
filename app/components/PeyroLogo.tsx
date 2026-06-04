interface PeyroLogoProps {
  theme?: "dark" | "light";
  showTagline?: boolean;
  fontSize?: number;
}

const themes = {
  dark: {
    wordmark: "#F3F1EC",
    tagline: "#B9B3A6",
    bg: "#0A0A0B",
  },
  light: {
    wordmark: "#0A0A0B",
    tagline: "#5B574E",
    bg: "#F4F2ED",
  },
};

export default function PeyroLogo({
  theme = "dark",
  showTagline = true,
  fontSize = 64,
}: PeyroLogoProps) {
  const colors = themes[theme];

  return (
    <div
      className="flex flex-col items-center"
      style={{ gap: showTagline ? 16 : 0 }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-italiana)",
          fontWeight: 400,
          fontSize,
          letterSpacing: "0.22em",
          textIndent: "0.22em",
          lineHeight: 1,
          color: colors.wordmark,
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        PÉYRO
      </span>

      {/* Tagline */}
      {showTagline && (
        <div
          className="flex items-center"
          style={{
            gap: 10,
            color: colors.tagline,
            whiteSpace: "nowrap",
          }}
        >
          {/* Left hairline */}
          <div
            style={{
              width: 30,
              height: 1,
              backgroundColor: "currentColor",
              opacity: 0.4,
            }}
          />

          {/* Tagline text */}
          <div
            className="flex items-center"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              gap: 8,
            }}
          >
            <span>AI SYSTEMS</span>

            {/* Champagne dot */}
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: "#C3A06A",
                flexShrink: 0,
              }}
            />

            <span>PRODUCTS</span>
          </div>

          {/* Right hairline */}
          <div
            style={{
              width: 30,
              height: 1,
              backgroundColor: "currentColor",
              opacity: 0.4,
            }}
          />
        </div>
      )}
    </div>
  );
}
