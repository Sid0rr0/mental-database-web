import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "80em"];

const fontSizes = {
	xs: "0.75rem",
	sm: "0.875rem",
	md: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	"2xl": "1.5rem",
	"3xl": "1.875rem",
	"4xl": "2.25rem",
	"5xl": "3rem",
	"6xl": "4rem",
};

const theme = {
	...chakraTheme,
	colors: {
		...chakraTheme.colors,
		yellow: "#F9F09B",
		blue: "#29ABE2",
	},
	fonts,
	breakpoints,
	fontSizes,
};

export default theme;
