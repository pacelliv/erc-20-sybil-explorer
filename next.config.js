/** @type {import('next').NextConfig} */

const webpack = require("webpack")
const { parsed: myEnv } = require("dotenv").config()

const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    nextConfig,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: { loader: "custom" },
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    },
}
