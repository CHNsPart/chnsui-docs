import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src='https://github-production-user-asset-6210df.s3.amazonaws.com/58574102/238454533-62a0fef5-a070-4f9b-b9d3-c9fc7567e912.svg' height='auto' width='200' alt="CHNsLogo" />,
  project: {
    link: 'https://github.com/CHNsPart/chnsui',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/CHNsPart/chnsui',
  /* footer: {
    text: 'MIT 2023 © CHNsUI | CHNsPart',
  }, */
    footer: {
    text: (
      <div className="flex w-full flex-row justify-between items-center sm:items-start">
        <div className="flex flex-col gap-1">
          <img className='grayscale' src='https://github-production-user-asset-6210df.s3.amazonaws.com/58574102/238454533-62a0fef5-a070-4f9b-b9d3-c9fc7567e912.svg' height='auto' width='100%' alt="CHNsLogo" />
          <p className="mt-6 text-xs">
            MIT © {new Date().getFullYear()} The CHNsUI Project.
          </p>
        </div>
        <div className='flex flex-col items-end h-full justify-end gap-2'>
          <p className='text-right'>
            Checkout my portfolio with Projects at
          </p>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="CHNsPart.com homepage"
            href="https://chnspart.com"
          >
            <b className='text-blue-500'>CHNsPart</b>
          </a>
        </div>
      </div>
    )
  }
}

export default config
