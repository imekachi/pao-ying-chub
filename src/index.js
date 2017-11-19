import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import colors from './styles/colors'

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
    background-color: ${colors.primary};
  }
  
  * {
    box-sizing: inherit;
  }
`

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
