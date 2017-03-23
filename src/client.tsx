import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import AppProvider, { store } from './AppProvider';
import { Router, nativeHistory } from 'react-router-native';
import { ReduxAsyncConnect } from 'redux-connect';
// import routes from './app/routes';

const history = syncHistoryWithStore(nativeHistory, store);
const connectedCmp = (props) => <ReduxAsyncConnect {...props} />;

export const App = Component => (
  <AppProvider>
    <Router
      history={history}
      render={connectedCmp}>
      {Component}
    </Router>
  </AppProvider>
);

/*
const render = Component =>
  ReactDOM.render(Component, document.getElementById('app'));
*/

// render(App(routes));

/*if ((module as any).hot) {
  (module as any).hot.accept('./app/routes', () => {
    const NewApp = require('./app/routes').default;
    render(NewApp);
  });
}*/
