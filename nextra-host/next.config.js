// ref: https://github.com/whitebit-exchange/api-docs/blob/main/next.config.js

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

// module.exports = withNextra;
module.exports = {
    ...withNextra(),
    distDir: '../docs',
    images: {
        unoptimized: true,
    },
    output: 'export',
    rewrites: null,
    trailingSlash: true,
};
