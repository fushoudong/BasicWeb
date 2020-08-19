import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker
} from 'react-native';
// import {Picker} from '@react-native-community/picker';


export default () => {
  const labels = [
    {
      label: '请选择性别',
      value: ''
    },
    {
      label: '男',
      value: '男'
    },
    {
      label: '女',
      value: '女'
    },
    {
      label: '其他',
      value: '#'
    }
  ]
  const [selectedValue, setValue] = useState("")
  handleValueChange = (value) => {

  }
  return (
    <>
      <View style={styles.view}>
        <Picker selectedValue={selectedValue} onValueChange={handleValueChange}>
          {
            labels.map((item, index) => {
              return <Picker.Item label={item.label} value={item.value} key={index}></Picker.Item>
            })
          }
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 300,
    textAlign: 'center',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
