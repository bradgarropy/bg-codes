require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        url: "https://bg-codes.netlify.app",
        title: "bg codes",
        description: "🎥 bg codes twitch overlay",
        keywords: [
            "gatsby",
            "react",
            "styled-components",
            "prettier",
            "eslint",
            "firebase",
            "twitch",
        ],
        email: "bradgarropy@gmail.com",
        twitter: "bradgarropy",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout/Layout.js"),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-catch-links",
        },
        {
            resolve: "@bradgarropy/gatsby-plugin-seo",
        },
    ],
}
