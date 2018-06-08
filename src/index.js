import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import '../dist/css/app.min.css'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

window.HMDA_ENV = {}

render(<App />, document.getElementById('app'))
