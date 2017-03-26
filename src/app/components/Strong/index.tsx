import * as React from 'react';
import { Text } from 'react-native';

const Strong = ({ children }: any) => (
  <Text style={{fontWeight: 'bold'}}>{children}</Text>
);

export { Strong }
