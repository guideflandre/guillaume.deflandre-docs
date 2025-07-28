import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaLinkedin } from 'react-icons/fa'

const config: DocsThemeConfig = {
  logo: <span>Guillaume Deflandre</span>,
  project: {
    link: 'https://github.com/guideflandre/guillaume.deflandre-docs',
  },
  chat: {
  link: 'https://www.linkedin.com/in/guillaume-deflandre-ab6747228/?locale=en_US&trk=people-guest_people_search-card',
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
      2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11
      19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76
      0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75
      1.76zm13.5 11.27h-3v-5.6c0-3.36-4-3.1-4 0v5.6h-3v-10h3v1.55c1.4-2.58
      7-2.77 7 2.47v6.03z"/>
    </svg>
  )
},
  docsRepositoryBase: 'https://github.com/guideflandre/guillaume.deflandre-docs',
  footer: {
    text: 'Guillaume Deflandre Documentation',
  },
}

export default config
