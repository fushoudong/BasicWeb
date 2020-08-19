import React, { useRef } from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

const AnimatedWidth = new Animated.Value(50);
const AnimatedHeight = new Animated.Value(100);
animatedBox = () => {
  Animated.timing(AnimatedHeight, {
    toValue: 200,
    duration: 1000,
  }).start();
  Animated.timing(AnimatedWidth, {
    toValue: 400,
    duration: 500,
  }).start();
};

export default () => {
  return (
    <>
      <View style={{backgroundColor: 'pink', width: 200, height: 600}}>
        <Text>测试</Text>
        <TouchableOpacity onPress={animatedBox}>
          <Animated.View style={{width: AnimatedWidth, height: AnimatedWidth, backgroundColor: 'blue'}}>

          </Animated.View>
        </TouchableOpacity>
      </View>
    </>
  );
};
