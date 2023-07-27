const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */

const config = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            purple: colors.purple,
        },
        extend: {
            boxShadow: {
                DEFAULT: "0px 0px 20px 0px rgba(0,0,0,0.2)",
            },
        },
    },
    plugins: [],
}

module.exports = config
