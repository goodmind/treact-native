import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from 'react-router-native';
import { IDispatch } from 'redux/IStore';
import { logOut } from 'api/auth';
import { connect } from 'react-redux';
const logo = require('./title-logo.png');
const s = require('./style.js');

interface IConnectedActions {
  logOut: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>;
}

const Header = ({ logOut }: IConnectedActions) => (
  <View style={s.header}>
    <Image style={s.headerIcon} source={logo} />
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <Text style={s.logout} onClick={logOut}>Logout</Text>
  </View>
);

const dispatchToProps = (dispatch: IDispatch) => ({
  logOut() {
    dispatch(logOut());
  },
});

const connected = connect<{}, IConnectedActions, {}>(null, dispatchToProps)(Header);

export { connected as Header }
