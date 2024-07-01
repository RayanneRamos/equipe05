import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        manrope: ['var(--font-manrope)']
      },
      transitionDuration: {
        'hoverDelay': '300ms',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'secondary': '#111114',
        'backgroundDef': '#09090B',
        'primitive-400': '#F27777',
        'primitive-500': '#E53939',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D4D4D4',
        'neutral-400': '#A3A3A3',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'zinc-300': '#D4D4D8',
        'zinc-400': '#A1A1AA',
        'zinc-700': '#3F3F46',
        'zinc-800': '#27272A',
        'zinc-900': '#191D1F',
      },
      opacity: {
        '06': '0.06',
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {


      addUtilities({

      });
    }),
  ],
};

export default config;