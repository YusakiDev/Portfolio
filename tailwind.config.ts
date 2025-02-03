import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Main colors from the palette
          darkPurple: '#0D0221',  // Dark purple
          federalBlue: '#0F084B', // Federal blue
          marineBlue: '#26408B',  // Marine blue
          lightBlue: '#A6CFD5',   // Light blue
          mintGreen: '#C2E7D9',   // Mint green

          // Functional colors based on the palette
          primary: '#0D0221',     // Dark purple for primary elements
          secondary: '#26408B',   // Marine blue for secondary elements
          accent: '#A6CFD5',      // Light blue for accents
          
          // Text colors
          dark: '#0D0221',        // Dark purple for main text
          light: '#C2E7D9',       // Mint green for light text
          muted: '#26408B',       // Marine blue for secondary text
          
          // Interactive elements
          link: '#26408B',        // Marine blue for links
          'link-hover': '#0F084B',// Federal blue for hover states
          
          // Call-to-action
          cta: '#26408B',         // Marine blue for buttons
          'cta-hover': '#0F084B', // Federal blue for button hover
          
          // Background variations
          surface: '#C2E7D9',     // Mint green for light backgrounds
          'surface-dark': 'rgb(25, 25, 25)', 
        }
      },
    },
  },
  plugins: [],
}

export default config;
