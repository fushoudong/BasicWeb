import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/views/Login'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <View>
          <Login />
        </View>
      </>
    )
  }
}