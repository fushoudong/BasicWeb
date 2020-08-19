import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animating: true
    };
  }
  toggleAnimate = () => {
    this.setState({
      animating: !this.state.animating
    })
  }
  render() {
    return (
      <>
        <View>
          <Text>测试文字</Text>
          <ActivityIndicator style={styles.animate1} animating={this.state.animating} color="white" size="large" />
          <TouchableOpacity style={styles.button} onPress={this.toggleAnimate}>
            <Text>点击</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  animate1: {
    width: 80,
    height: 80,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: 'auto',
    backgroundColor: "#0000ff"
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "gray"
  }
});
