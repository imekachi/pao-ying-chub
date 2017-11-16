import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './App'
import powImg from './images/pow.png'
import registerServiceWorker from './registerServiceWorker'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html, body {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Tahoma, sans-serif;
    box-sizing: border-box;
    background: deepskyblue url(${powImg}) no-repeat center center;
    background-size: contain;
  }
  
  * {
    box-sizing: inherit;
  }
`

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
