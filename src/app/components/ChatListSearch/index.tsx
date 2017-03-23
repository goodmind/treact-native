import * as React from 'react';
import { View } from 'react-native';

const s = require('./style.js');

const ChatListSearch = () => (
  <View style={s.chatlistsearch}>
    <input type="text" style={s.search} placeholder="Search" />
    <View style={s.searchButton} />
  </View>
);

export { ChatListSearch }
