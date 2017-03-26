import * as React from 'react';
import { Text } from 'react-native';
const t = require('./style');

const Button = ({ title, style = {}, ...props }: any) => (
  <Text
    style={[t.btn, t.primary, t.btnText, style]}
    {...props}>
    {title}
  </Text>
);

export { Button }
