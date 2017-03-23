import * as React from 'react';
import { View } from 'react-native';
const s = require('./style.js');

interface IProps {
  children?: React.ReactNode;
}

const App = ({ children }: IProps) => (
  <View style={s.app}>
    {children}
  </View>
);

export { App }
