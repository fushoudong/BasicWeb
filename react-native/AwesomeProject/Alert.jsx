import React from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';

export default () => {
  const get = () => {
    Alert.alert('点击获取')
  }
  const sure = () => {
    Alert.alert('点击确定')
  }
  const del = () => {
    Alert.alert(
      '点击删除',
      '是否删除',
      [
        {text: 'OK', onPress: () => sure()},
        {text: 'Cancel'},
      ]
    )
  }
  return (
    <>
      <View style={[styles.view, styles.style]}>
        <TouchableOpacity style={[styles.button, styles.style]} onPress={get}>
          <Text style={styles.text}>获取</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.view, styles.style]}>
        <TouchableOpacity style={[styles.button, styles.style]} onPress={del}>
          <Text style={styles.text}>删除</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    width: "100%",
    height: 150,
    marginTop: 0,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#439879",
    borderRadius: 20
  },
  text: {
    color: "white",
    fontSize: 16
  }
});
