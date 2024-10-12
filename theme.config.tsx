import { useRouter } from 'next/router'
import {DocsThemeConfig} from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/plantoncloud/docs.planton.cloud'
  },
  docsRepositoryBase: 'https://github.com/plantoncloud/docs.planton.cloud/tree/main/docs',
    logo: (
        <div className="flex flex-row items-center">
            <img src="/images/logo/icon.png" alt="PlantonCloud Logo" width="36" height="36" />
        </div>
    ),
    nextThemes: {
      defaultTheme: 'light'
    },
    toc: {
      title: 'PlantonCloud',
    },
    head: function useHead() {
        const config = useConfig()
        const {route} = useRouter()
        const isDefault = route === '/' || !config.title
        const image =
            'https://docs.planton.cloud/' +
            (isDefault ? 'og.jpeg' : `api/og?title=${config.title}`)

        const description =
            config.frontMatter.description ||
      'CloudNative Internal Developer Platform'
    const title = config.title + (route === '/' ? '' : ' - PlantonCloud')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="planton.cloud" />
        <meta name="twitter:url" content="https://planton.cloud" />
        <meta name="apple-mobile-web-app-title" content="PlantonCloud" />
        <link rel="icon" href="/images/logo/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/images/logo/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/images/logo/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/images/logo/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} PlantonCloud.
        </p>
      </div>
    )
  }
}

export default config
