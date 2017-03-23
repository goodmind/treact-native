import * as React from 'react';
import { AsyncStorage, Text } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { nativeHistory } from 'react-router-native';
import { configureStore } from './app/redux/store';

export const store = configureStore(
  nativeHistory,
  window.__INITIAL_STATE__,
);

class AppProvider extends React.Component<{ children?: React.ReactChildren }, { rehydrated: boolean }> {
  public state = { rehydrated: false };

  public componentWillMount() {
    const onDone = () => this.setState({ rehydrated: true });
    persistStore(store,
      {
        whitelist: ['authKey', 'currentUser', 'currentDc'],
        storage: AsyncStorage,
      }, onDone);
  }

  public render() {
    console.log(this.props.children);
    return this.state.rehydrated
      ? <Provider store={store} key="provider">
          {this.props.children}
        </Provider>
      : <Text>Loading...</Text>;
  }
}

export default AppProvider;
