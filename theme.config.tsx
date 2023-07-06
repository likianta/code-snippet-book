import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';
import { assetPrefix } from './config/constants';

const config: DocsThemeConfig = {
    logo: <Logo />,
    head: (
        <>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <meta property='og:title' content='LK CS Book' />
            <link
                rel='icon'
                href={`${assetPrefix}/favicon/favicon-16x16.png`}
            />
        </>
    ),
    project: {
        link: 'https://github.com/likianta/code-snippet-book',
    },
    docsRepositoryBase: 'https://github.com/likianta/code-snippet-book',
    footer: {
        text: 'Made by Likiata, powered by Nextra',
    },
};

export default config;
