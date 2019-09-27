import React from 'react'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

import './app.css'

const betaLinks = [
  { name: 'Home', href: '/' },
  { name: 'Filing', href: '/filing/2019/' },
  { name: 'Data Browser', href: '/data-browser/' }
]

const App = () => {
  const isBeta = !!window.location.host.match('beta')
  const headerLinks =  isBeta ? betaLinks : undefined

  return (
    <React.Fragment>
      <Header links={headerLinks}/>
      <Home isBeta={isBeta}/>
      <Footer />
    </React.Fragment>
  )
}

export default App
