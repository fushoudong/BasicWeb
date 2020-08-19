import React, { useState } from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';


export default () => {
  const status = {
    true: '开',
    false: '关'
  }
  const [index, setIndex] = useState(true)
  handleValueChange = (value) => {
    setIndex(value)
  }
  return (
    <>
      <View style={{marginTop: 100, marginRight: "auto", marginLeft: 'auto', width: 300, textAlign: 'center'}}>
        <Switch onValueChange={handleValueChange} value={index}></Switch>
        <Text>测试：{status[index]}</Text>
      </View>
    </>
  );
};
