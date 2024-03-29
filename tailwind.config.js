/** @type {import('tailwindcss').Config} */
import {MirageColorScheme} from './src/App/assets/theme.js';

export const content = ['./src/**/*.{html,js,jsx}'];
export const theme = {
    extend: {
        fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
        },
    },
    colors: {
        mirage: MirageColorScheme,
        white: '#ffffff',
    },

};
export const plugins = [];

