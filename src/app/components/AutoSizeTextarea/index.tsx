import * as React from 'react';
import { TextInput } from 'react-native';

interface IProps {
  className?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
}

const AutoSizeTextarea = (props: IProps) => {
  const { value } = props;
  return <TextInput {...props}>{value}</TextInput>;
};

export { AutoSizeTextarea }
