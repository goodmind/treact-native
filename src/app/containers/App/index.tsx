// const appConfig = require('../../../../config/main');
import * as React from 'react';
// import * as Helmet from 'react-helmet';
import { App /*, Header*/ } from 'components';

interface IProps {
  children: React.ReactNode;
}

const AppContainer = ({ children }: IProps) =>
  <App>
    {/* <Header /> */}
    {children}
  </App>;
export { AppContainer as App }
