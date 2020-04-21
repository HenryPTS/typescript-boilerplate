import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './common/theme'
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './app/store'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: #F1F1F1;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }
`
const render = () => {
const App = require('./app/App').default
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </ThemeProvider>, document.getElementById('root'));
}

render()
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
