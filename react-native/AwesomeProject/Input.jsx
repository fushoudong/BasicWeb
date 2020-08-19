import React from 'react'
import {Text, StyleSheet, Button, View} from 'react-native'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const {count} = this.state
    return (
      <>
        <Text style={styles.text}>count：{count}</Text>
        <Button onPress={this.addCount} title="add"/>
        <Son name={"测试name"} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red'
  }
})

const Son =  (props) => {
  return (
    <View>
      <Text>
        {props.name}
      </Text>
    </View>
  )
}