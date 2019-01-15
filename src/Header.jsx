import React from 'react'
import BannerUSA from './BannerUSA'

import './Header.css'
import logo from './images/ffiec-logo.svg'

const Header = () => {
  return (
    <React.Fragment>
      <a className="skipnav" href="#main-content">
        Skip to main content
      </a>
      <header className="hmda-header header header-basic" role="banner">
        <BannerUSA />
        <div className="nav-container">
          <div className="logo" id="logo">
            <span className="logo-text">
              <a className="nav-link" href="/" aria-label="Home">
                <img alt="FFIEC" src={logo} height="32" />
                Home Mortgage Disclosure Act
              </a>
            </span>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
