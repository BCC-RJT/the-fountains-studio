import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f2f8fb',100:'#e6f0f7',200:'#c5dff0',300:'#9ec8e5',
          400:'#6eaad6',500:'#4c91c7',600:'#3e77b0',700:'#355f8f',
          800:'#2e4f74',900:'#2a445f',950:'#1a2b3b',
        },
      },
      keyframes:{
        fadeInUp:{'0%':{opacity:'0',transform:'translateY(12px)'},
                  '100%':{opacity:'1',transform:'translateY(0)'}},
        slideUp:{'0%':{opacity:'0',transform:'translateY(24px)'},
                 '100%':{opacity:'1',transform:'translateY(0)'}},
      },
      animation:{
        fadeInUp:'fadeInUp 700ms ease-out both',
        slideUp:'slideUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
