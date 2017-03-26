import * as React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
// import * as styles from 'styles';
import { PeerPhoto } from 'containers/PeerPhoto';

const s = require('./style');

interface IChatListBasicProps {
  id: number;
  name: string;
  selected: boolean;
  click: () => void;
}

interface IChatListFullProps extends IChatListBasicProps {
  isYou: boolean;
  previewName: string;
  text: string;
  unreadCount: number;
}

type UnreadProps = { unread: number };
const UnreadBadge = ({ unread }: UnreadProps) => {
  // TODO: react-native
  /*const block = styles({
    [s.unread]: true,
    [s.hidden]: unread === 0,
  });*/
  return (
    <View style={s.unread}>
      <View style={s.counter}>{unread}</View>
    </View>
  );
};

type SenderProps = { userName: string };
const SenderPreview = ({ userName }: SenderProps) => {
  // TODO: react-native
  /*const sender = styles({
    [s.sender]: true,
    [s.hidden]: !userName,
  });*/
  return (
    <View style={s.sender}>
      <Text>{userName}</Text>
      <Text>:</Text>
    </View>
  );
};

type MessageProps = { text: string, userName: string, isYou: boolean };
const MessagePreview = ({ text, userName, isYou }: MessageProps) => (
  <View style={s.message}>
    <SenderPreview userName={isYou ? 'You' : userName} />
    <Text>{text}</Text>
  </View>
);

// <PeerPhoto peerID={id} />

export class ChatListItemEmpty extends React.Component<IChatListBasicProps, {}> {
  public render() {
    const {
      id,
      name,
      click,
      // selected,
      children,
    } = this.props;
    // TODO: react-native
    /*const block = styles({
      [s.item]: true,
      [s.active]: selected,
    });*/
    return (
      <TouchableHighlight
        onPress={click}
        style={s.item}>
        <PeerPhoto peerID={id} />
        <View style={s.info}>
          <View style={s.top}>
            <View style={s.chattime}>{name}</View>
          </View>
          <View style={s.bottom}>
            {children}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export const ChatListItem = ({
  id, name, click, selected,
  previewName, text, unreadCount, isYou }: IChatListFullProps) => (
  <ChatListItemEmpty id={id} name={name} click={click} selected={selected}>
    <MessagePreview text={text} userName={previewName} isYou={isYou} />
    <UnreadBadge unread={unreadCount}/>
  </ChatListItemEmpty>
);
