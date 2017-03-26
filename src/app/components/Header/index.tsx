import * as React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';
import { IDispatch } from 'redux/IStore';
import { logOut } from 'api/auth';
import { connect } from 'react-redux';
const logo = require('./title-logo.png');
const s = require('./style');

interface IConnectedActions {
  logOut: () => void;
}

const Header = ({ logOut }: IConnectedActions) => (
  <View style={s.header}>
    <Image style={s.headerIcon} source={logo} />
    <Link to="/"><Text>Home</Text></Link>
    <Link to="login"><Text>Login</Text></Link>
    <TouchableHighlight style={s.logout} onPress={logOut}><Text>Logout</Text></TouchableHighlight>
  </View>
);

const dispatchToProps = (dispatch: IDispatch) => ({
  logOut() {
    dispatch(logOut());
  },
});

const connected = connect<{}, IConnectedActions, {}>(null, dispatchToProps)(Header);

export { connected as Header }
