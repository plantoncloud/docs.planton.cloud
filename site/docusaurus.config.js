/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Docs',
    tagline: 'Planton Cloud Docs',
    url: 'http://docs/', //this is used in the algolia docsearch indexing
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Planton Cloud', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false
        },
        algolia: {
            apiKey: '5fe78bb94075e971b3a0bdda0c7224e5',
            appId: 'NE3HND6FSC',
            indexName: 'prod_planton_cloud_docs',
        },
        navbar: {
            title: '',
            style: 'dark',
            logo: {
                alt: 'logo',
                src: 'img/logo.png',
            },
            items: [],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Planton Cloud.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    remarkPlugins: [[require('mdx-mermaid'), {mermaid: {theme: 'dark'}}]],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
