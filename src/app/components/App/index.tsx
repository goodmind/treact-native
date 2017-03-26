import * as React from 'react';
import { View } from 'react-native';
import s from './style';

interface IProps {
  children?: React.ReactNode;
}

const App = ({ children }: IProps) => (
  <View style={s.app}>
    {children}
  </View>
);

export { App }
