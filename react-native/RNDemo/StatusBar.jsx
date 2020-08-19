import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default () => {
  const [isHidding, setIsHidding] = useState(false);
  const [theme, setTheme] = useState('dark-content');
  handleHide = () => {
    setIsHidding(!isHidding)
  }
  handleTheme = () => {
    setTheme(theme === 'dark-content'? 'light-content': 'dark-content')
  }
  return (
    <>
      <StatusBar hidden={isHidding} barStyle={theme}></StatusBar>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={handleHide}>
          <Text>toggleShow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTheme}>
          <Text>toggleTheme</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#00a0f4",
    width: 120,
    height: 40,
    borderRadius: 15,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
