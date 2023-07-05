// ref: https://github.com/whitebit-exchange/api-docs/blob/main/next.config.js

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

// const isProduction = process.env.NODE_ENV === 'production';
// const assetPrefix = isProduction ? '/code-snippet-book' : '';
const assetPrefix = '';

// module.exports = withNextra;
module.exports = {
    ...withNextra(),
    basePath: assetPrefix,
    distDir: '../docs',
    images: {
        unoptimized: true,
    },
    output: 'export',
    rewrites: null,
    swcMinify: true,
    trailingSlash: true,
};
