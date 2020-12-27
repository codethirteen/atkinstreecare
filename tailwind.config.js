module.exports = {
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  theme: {
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: "#000",
        white: "#fff",

        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
    },
    extend: {
      colors: {
        "white-2": "rgba(255, 255, 255, 0.2)",
        "white-4": "rgba(255, 255, 255, 0.4)",
        "white-6": "rgba(255, 255, 255, 0.6)",
        "white-8": "rgba(255, 255, 255, 0.8)",
        "gray-200-2": "rgba(237, 242, 247, .2)",
        "gray-200-4": "rgba(237, 242, 247, .4)",
        "gray-200-6": "rgba(237, 242, 247, .6)",
        "gray-200-8": "rgba(237, 242, 247, .8)",
      },
    },
  },
};
