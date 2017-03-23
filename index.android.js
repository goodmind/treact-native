// @flow
// Polyfills

import './polyfills'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { App } from './build/client'
import routes from './build/app/routes'

class NewApp extends Component {
  render() { return App(routes) }
}

AppRegistry.registerComponent('treact', () => NewApp)

console.log(AppRegistry.getAppKeys())
