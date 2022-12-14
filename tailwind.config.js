/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
 ],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,

        'tt-main-color': 'var(--main-color)',
        'tt-bg-atc-color': 'var(--bg-atc-color)',
        'tt-bg-color': 'var(--bg-color)',
        'tt-subbg-color': 'var(--subbg-color)',
        'tt-text-color': 'var(--text-color)',
        'tt-subtext-color': 'var(--subtext-color)',
        'tt-hover-header-color': 'var(--hover-header-color)',
        'tt-hover-main-color': 'var(--hover-main-color)',
        'tt-border-color': 'var(--border-color)',
        'tt-bg-logout': 'var(--bg-logout)',
        'tt-subtext-logout': 'var(--subtext-logout)',
        'tt-bg-button-logout': 'var(--bg-button-logout)',
        'tt-bg-button-hover-logout': 'var(--bg-button-hover-logout)',
        'tt-bg-button-cancel-logout': 'var(--bg-button-cancel-logout)',
        'tt-bg-button-cancel-hover-logout': 'var(--bg-button-cancel-hover-logout)',
        'tt-text-button-cancel-logout': 'var(--text-button-cancel-logout)',
        'tt-border-color-button-cancel-logout': 'var(--border-color-button-cancel-logout)',
        'tt-logo-color': 'var(--logo-color)',
        'tt-hover-maincl-color': 'var(--hover-maincl-color)',
        'tt-border-login-page': 'var(--border-login-page)',
        'tt-text-login': 'var(--text-login)'
      },
      boxShadow: {
        'white-shadow-dark': 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;',
        'dark-shadow-dark': 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;',

        'tt-shadow': 'var(--shadow-color)'
      },
      dropShadow: {
        'sm': 'rgb(207, 217, 222) 1px -1px 1px',
        'xl': 'rgb(51, 54, 57) 1px -1px 1px',

        'tt-dropShadow': 'var(--dropShadow-color)'
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}