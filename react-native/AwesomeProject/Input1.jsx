import React, {useState} from 'react';

import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default () => {
  const [email, setEamil] = React.useState('');
  const [password, setPassword] = React.useState("")
  const handlePress = () => {
    if(email === "" || password === "") return alert("请输入邮箱或者密码")
    alert(`email: ${email}\npassword: ${password}`);
  };
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <Text style={{flex: 1, marginLeft: 10}}>邮箱：</Text>
        <TextInput
          textContentType="emailAddress"
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            flex: 6,
            height: 40,
            marginRight: 60,
          }}
          onChangeText={(email) => setEamil(email)}
          value={email}
          placeholder="请输入邮箱"
        />
      </View>
      <View style={styles.row}>
        <Text style={{flex: 1, marginLeft: 10}}>密码：</Text>
        <TextInput
          textContentType="password"
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            flex: 6,
            height: 40,
            marginRight: 60,
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="请输入密码"
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: "100%",
    marginTop: 5,
    height: 40,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: "100%"
  },
});
