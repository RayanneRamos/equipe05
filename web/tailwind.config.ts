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
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const hoverDelay = theme('transitionDuration.300', '300ms');

      addUtilities({
        '.bg': {
          backgroundColor: '#191D1F',
        },
        '.btn-submit': {
          width: '105px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          color: '#000000',
          fontSize: '14px',
          fontWeight: '700',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#F27777',
            borderColor: '#F27777',
            color: '#FFFFFF',
          },
        },
        '.btn-close': {
          width: '105px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          borderColor: '#A3A3A3',
          color: '#A3A3A3',
          fontSize: '14px',
          fontWeight: '700',
          transition: `border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            borderColor: '#D4D4D4',
            color: '#D4D4D4',
          },
        },
        '.btn-cancel': {
          width: '160px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          borderColor: '#F27777',
          color: '#F27777',
          fontSize: '14px',
          fontWeight: '700',
          transition: `border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#E53939',
            color: '#E53939',
          },
        },
        '.btn-tryAgain': {
          width: '181px',
          height: '40px',
          borderWidth: '1px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          borderColor: '#FFFFFF',
          color: '#000000',
          fontSize: '14px',
          fontWeight: '700',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#F27777',
            borderColor: '#F27777',
            color: '#D4D4D4',
          },
        },
        '.btn-topBar': {
          width: '132px',
          height: '48px',
          borderWidth: '1px',
          borderRadius: '50px',
          backgroundColor: 'transparent',
          borderColor: '#E53939',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: '600',
          transition: `background-color ${hoverDelay} ease, border-color ${hoverDelay} ease, color ${hoverDelay} ease`,
          '&:hover': {
            backgroundColor: '#E53939',
            borderColor: '#E53939',
            color: '#D4D4D4',
          },
        },
      });
    }),
  ],
};

export default config;