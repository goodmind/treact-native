import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { IStore } from 'redux/IStore';

type IConnectedState = Pick<IStore, 'currentUser'>;
type IConnectedActions = {};
type IOwnProps = {};
type IProps = IConnectedState & IConnectedActions & IOwnProps;

class SuccessImpl extends React.Component<IProps, {}> {
  public static defaultPhrase = 'No current user';
  public toPrintable = () => this.props.currentUser
    ? JSON.stringify(this.props.currentUser)
    : SuccessImpl.defaultPhrase;

  public render() {
    const print = this.toPrintable();
    return (
      <View>
        <Text>Success</Text>
        <Text>{print}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({ currentUser: state.currentUser });
const Success = connect<IConnectedState, IConnectedActions, IOwnProps>(mapStateToProps)(SuccessImpl);

export { Success }
