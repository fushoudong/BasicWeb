import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <View style={styles.title}>
          <Text style={styles.bold}>小史</Text>
          <Text style={styles.shadow}>是一个</Text>
          <Text>漂亮善良</Text>
          <Text>的女孩子</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <Text>我爱小斐斐</Text>
          </View>
          <View style={styles.box}>
            <Text>我爱小斐斐</Text>
          </View>
          <View style={[styles.box, {color: 'white', textAlign: 'center'}]}>
            <Text
              style={[
                {color: 'black', lineHeight: 100},
                {color: 'white', textAlign: 'center'},
              ]}>
              我爱小斐斐
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bold: {
    color: 'red',
    fontWeight: 'bold'
  },
  shadow: {
    fontSize: 30,
    textShadowColor: "red",
    textShadowOffset: {width: 1, height:1},
    textShadowRadius: 1
  },
  title: {
    margin: 9,
    width: "90%",
    height: 30,
    backgroundColor: 'gray'
  },
  body: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'lightskyblue',
  },
});
