module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#888888",
        dark: "#000000",
        light: "#333333",
        // Light theme colors
        'light-primary': "#000000", // Pure black for maximum contrast
        'light-secondary': "#374151", // Dark gray
        'light-bg': "#ffffff", // Pure white background
        'light-card': "#f8fafc", // Very light gray for cards
        // Dark theme colors (current)
        'dark-primary': "#ffffff",
        'dark-secondary': "#888888",
        'dark-bg': "#000000",
        'dark-card': "#1f2937",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}