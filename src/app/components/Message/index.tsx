import * as React from 'react';
import { View } from 'react-native';
import { PeerPhoto } from 'containers/PeerPhoto';

const s = require('./style');

interface IOwnProps {
  id: number;
  date: number;
  user: number;
  text: string;
};

const formatTime = (date: number) => {
  const dateObject = new Date(date * 1000);
  return {
    dateString: dateObject.toLocaleDateString(),
    timeString: dateObject.toLocaleTimeString(),
  };
};

const Time = ({ date }: { date: number }) => {
  const { timeString } = formatTime(date);
  return (
    <View style={s.time}>
      <span>{timeString}</span>
    </View>
  );
};

export const Message = ({ user, date, text }: IOwnProps) => {
  console.debug(`Message`, user, text);
  return (
    <View style={s.message}>
      <View style={s.flexcontainer}>
        <PeerPhoto peerID={user} style={s.messageavatar}/>
        <View
          style={s.messagebody}>
          <View style={s.sender}>{user}</View>
          <View style={s.textbody}>
            <View style={s.text}>{text}</View>
            <Time date={date} />
          </View>
        </View>
      </View>
    </View>
  );
};
