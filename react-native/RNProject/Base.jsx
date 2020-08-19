import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const Blink = (props) => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    // setInterval(() => {
    //   setIsShowingText(!isShowingText);
    // }, 1000);
  });
  return <>{isShowingText ? <Text>{props.text}</Text> : <Text></Text>}</>;
};

const Bananas = () => {
  const url = {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  return (
    <>
      <Image
        source={url}
        style={{width: 400, height: 200, resizeMode: 'cover'}}
      />
    </>
  );
};

const Con = (props) => {
  return (
    <>
      <View>
        <Text>{props.name}</Text>
      </View>
    </>
  );
};

export default () => {
  return (
    <ScrollView style={{marginLeft: 26, width: "90%"}}>
      <View>
        <Text>这一生原本一个人</Text>
      </View>
      <Con name="你好" />
      <Bananas />
      <View style={{marginTop: 50}}>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
        <LotsOfStyles />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  red: {
    color: 'red',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
