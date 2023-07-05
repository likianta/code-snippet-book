import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: (
        <>
            <img src='/favicon/favicon-16x16.png' style={{ marginBottom: 2 }} />
            <span style={{ marginLeft: 8 }}>
                {/* gradient text: https://www.jianshu.com/p/3a5bbfbf5957 */}
                <b
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #cb3f49, purple)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    LK CS Book
                </b>
            </span>
        </>
    ),
    head: (
        <>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <meta property='og:title' content='LK CS Book' />
            <link rel='icon' href='/favicon/favicon.ico' />
            {/* <link
                rel='shortcut icon'
                type='image/x-icon'
                href='/favicon/favicon.ico'
            />
            <link
                rel='shortcut icon'
                type='image/x-icon'
                sizes='16x16'
                href='/favicon/favicon-16x16.png'
            />
            <link
                rel='shortcut icon'
                type='image/x-icon'
                sizes='32x32'
                href='/favicon/favicon-32x32.png'
            /> */}
        </>
    ),
    project: {
        link: 'https://github.com/likianta/code-snippet-book',
    },
    docsRepositoryBase: 'https://github.com/likianta/code-snippet-book',
    footer: {
        text: 'Powered by Nextra',
    },
};

export default config;
