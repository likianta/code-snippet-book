// ref: https://github.com/mkrtchian/reading-notes/blob/main/next.config.js

const nextraConfig = require('nextra')({
    defaultShowCopyCode: true,
    staticImage: true,
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

const isProduction = process.env.NODE_ENV === 'production';
const assetPrefix = isProduction ? '/code-snippet-book' : '';

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: assetPrefix,
    // distDir: 'docs',
    images: {
        unoptimized: true,
    },
    output: 'export',
    reactStrictMode: true,
    rewrites: null,
    swcMinify: true,
    trailingSlash: true,
};

module.exports = {
    ...nextraConfig(),
    ...nextConfig,
};
