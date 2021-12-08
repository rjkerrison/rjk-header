import React from 'react'
import links from './links'
import './styles/header.scss'

const Header = ({ mainHeading }) => {
  const displayLinks = links.map(([url, text]) => {
    return (
      <li key={url}>
        <a href={url}>{text}</a>
      </li>
    )
  })

  return (
    <header id='rjk-shared-header'>
      <div className='inner'>
        <h1>{mainHeading || 'Robin James Kerrison'}</h1>
        <nav>
          <ul>{displayLinks}</ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
