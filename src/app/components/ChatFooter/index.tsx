import * as React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import AutoSizeTextarea from 'react-autosize-textarea';
const s = require('../Chat/style.js');

export const ChatFooter = ({ value, change, submit }) => (
  <View style={s.chatfooter}>
    <AutoSizeTextarea
      onChange={change}
      style={s.editText}
      value={value}
      rows={1}
      placeholder="  Write a message" />
    <TouchableHighlight style={s.sendbutton} onPress={submit}><Text>Send</Text></TouchableHighlight>
  </View>
);
