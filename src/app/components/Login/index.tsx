import * as React from 'react';
import { View } from 'react-native';
const s = require('./style');

interface IProps {
  children?: React.ReactNode;
}

const Login = ({ children }: IProps) => (
  <View style={s.main}>
    {children}
  </View>
);

export { Login }
