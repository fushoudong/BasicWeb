import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <ScrollView style={styles.views}>
          <View>
            <Text>本地资源</Text>
            <Image style={styles.img1} source={require('./assets/swiper2.jpg')} />
          </View>
          <View>
            <Text>contain</Text>
            <Image style={styles.img2} source={{uri: 'https://www.twle.cn/static/i/img1.jpg'}} />
          </View>
          <View>
            <Text>cover</Text>
            <Image style={styles.img3} source={{uri: 'https://www.twle.cn/static/i/img1.jpg'}} />
          </View>
          <View>
            <Text>stretch</Text>
            <Image style={styles.img4} source={{uri: 'https://www.twle.cn/static/i/img1.jpg'}} />
          </View>
         
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  views: {
    width: 380,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto"
  },
  img1: {
    width: 300,
    height: 120,
    marginLeft: "auto",
    marginRight: "auto"
  },
  img2: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  },
  img3: {
    width: 300,
    height: 300,
    resizeMode: 'cover'
  },
  img4: {
    width: 300,
    height: 300,
    resizeMode: 'stretch'
  }
});
