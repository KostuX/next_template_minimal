/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];
