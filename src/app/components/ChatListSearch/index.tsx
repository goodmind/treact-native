import * as React from 'react';
import { View, TextInput } from 'react-native';

const s = require('./style');

const ChatListSearch = () => (
  <View style={s.chatlistsearch}>
    <TextInput style={s.search} placeholder="Search" />
    <View style={s.searchButton} />
  </View>
);

export { ChatListSearch }
