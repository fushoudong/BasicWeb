import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
  return (
    <>
      <View style={styles.body}>
        <Card title="登录界面">
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            style={styles.button}
            icon={<Icon name="evilicon" color="#ffffff" />}
            title=" 点我登录"
          />
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  mainCard: {
    width: 400,
    height: 400,
  },
});
