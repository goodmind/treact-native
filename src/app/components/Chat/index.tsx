import * as React from 'react';
import { View } from 'react-native';
import { ChatFooter } from 'containers';
import * as InfiniteScroll from 'react-infinite-scroller';
const s = require('./style.js');

export const DefaultScreen = () => (
  <View style={s.chat}>
    <View style={s.bubble}>Please select a chat to start messaging</View>
  </View>
);

type IProps = {
  name: string;
  userCount: number;
  loadMore: () => void;
};

const ChatHeader = ({ name, userCount }) => (
  <View style={s.chatheader}>
    <View style={s.left}>
      <View style={s.top}>{name}</View>
      <View style={s.bottom}>{userCount} members</View>
    </View>
    <View style={s.right} />
  </View>
);

class Chat extends React.Component<IProps, {}> {
  public render() {
    const { name, userCount, children, loadMore } = this.props;
    return (
      <View style={s.chat}>
        <View style={s.chatcontainer}>
          <ChatHeader name={name} userCount={userCount} />
          <View style={s.chatbody}>
            <InfiniteScroll
              style={s.box}
              pageStart={0}
              loadMore={loadMore}
              initialLoad={false}
              hasMore={true}
              isReverse={true}
              useWindow={false}>
              {children}
            </InfiniteScroll>
          </View>
          <ChatFooter />
        </View>
      </View>
    );
  }
}

export { Chat }
