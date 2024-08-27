import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#5F64CA",
        secondary: "#FFC6FF",
        tertiary: "#353862",
      }
    },
  },
  plugins: [],
} satisfies Config;
