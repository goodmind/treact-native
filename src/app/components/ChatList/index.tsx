import * as React from 'react';
import { View } from 'react-native';
import { ChatListSearch } from 'components';
import * as InfiniteScroll from 'react-infinite-scroller';

const s = require('./style');

interface IProps {
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

const LoadingPane = () => (
  <View style={s.chatlist}>
    <View style={s.loading}>Loading...</View>
  </View>
);

class ChatList extends React.Component<IProps, {}> {
  public render() {
    const { loading, children, loadMore, hasMore } = this.props;

    return (
      <View style={s.chatlist}>
        <ChatListSearch />
        <View style={s.chatbody}>
          <InfiniteScroll
            style={s.box}
            pageStart={0}
            loadMore={loadMore}
            initialLoad={false}
            hasMore={hasMore}
            useWindow={false}>
            {children}
            {loading && <LoadingPane />}
          </InfiniteScroll>
        </View>
      </View>
    );
  }
}

export { ChatList };
