
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import GlobalStyles from '/styles/globals';
import ServiceWorker from '/serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <div>
      <GlobalStyles />
      <App />
    </div>
  )
}

renderApp();

ServiceWorker();
