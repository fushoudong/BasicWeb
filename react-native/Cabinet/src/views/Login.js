import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
// import {Button} from '@ant-design/react-native';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <View style={styles.body}>
          <Button title="登录"/>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
