import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import { fetchEnvConfig, findObjIndex } from './configUtils'
import { betaLinks, defaultLinks } from './links'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.isBeta = !!window.location.host.match('beta')
    const links = this.isBeta ? betaLinks : defaultLinks
    this.state = {
      links,
      announcement: null,
      filing: {
        year: '2018',
        link: links[findObjIndex(links, 'name', 'Filing')]
      }
    }
  }

  componentDidMount() {
    fetchEnvConfig()
      .then(config => {
        this.updateFilingLink(this.isBeta ? config.beta : config)
        this.setState(this.isBeta ? {...config.beta} : {...config} )
      })
      .catch(() => null)
  }

  updateFilingLink(config) {
    const idx = findObjIndex(this.state.links, 'name', 'Filing')
    if (idx > -1) {
      const links = [...this.state.links]
      links[idx].href = `/filing/${config.defaultPeriod}/`
      this.setState({
        links,
        filing: { year: config.defaultPeriod, link: links[idx].href }
      })
    }
  }

  render() {
    const { announcement, links, filing } = this.state
    return (
      <React.Fragment>
        <Header links={links} />
        <Home isBeta={this.isBeta} announcement={announcement} filing={filing}/>
        <Footer />
      </React.Fragment>
    )
  }
}
export default App
