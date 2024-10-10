import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primaryColor: "#0E096B",
			secondaryColor: "#F8A62B",
			textColor: "#595959",
			hoverTextColor: "#000000",
			headingColor:"#331B3B",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
});

export default config;
