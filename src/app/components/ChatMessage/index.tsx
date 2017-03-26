import * as React from 'react';
import { Image, View } from 'react-native';

const s = require('./style');
interface IProps {
  message: any;
  activeChat: any;
}

class ChatMessage extends React.Component<IProps, {}> {
  public render() {
    const { message, activeChat } = this.props;

    return (
      <View style={s.message}>
        <View style={s.unread}
          /* id="unread" */>{activeChat.unreadItems} unread messages</View>
        <View style={s.flexcontainer}>
          <Image
            source={message.fromUser.avatarUrlSmall}
            style={s.messageavatar} />
          <View
            style={s.messagebody}>
            <View style={s.sender}>{message.fromUser.displayName}</View>
            {message.text}
          </View>
        </View>
      </View>
    );
  }
}

export { ChatMessage }
