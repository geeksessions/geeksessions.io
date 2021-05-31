import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col fixed right-0 top-1/2 transform -translate-y-1/2">
      <a
        className="rounded-tl-md py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://pt-pt.facebook.com/GeekSessionsFaro"
        rel="noopener"
        target="_blank"
      >
        <img className="h-4 w-4" alt="facebook" src="/assets/icon_facebook.svg" />
      </a>
      <a
        className="py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://github.com/geeksessions"
        rel="noopener"
        target="_blank"
      >
        <img className="h-4 w-4" alt="github" src="/assets/icon_github.svg" />
      </a>
      <a
        className="rounded-bl-md py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://twitter.com/GeekSessionsFAO"
        rel="noopener"
        target="_blank"
      >
        <img className="h-4 w-4" alt="twitter" src="/assets/icon_twitter.svg" />
      </a>
    </footer>
  )
}

export default Footer
