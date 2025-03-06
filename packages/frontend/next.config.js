// packages/frontend/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['assets.example.com'],
    },
    webpack: (config) => {
        // Add support for WebGL in PixiJS
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
        });

        return config;
    },
}

module.exports = nextConfig
