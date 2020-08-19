import React, {useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native'

export default () => {
  const [result, setResult] = useState({})
  useEffect(() => {
    fetch("http://iwenwiki.com:3000/search?keywords=海阔天空")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setResult(data.result.songs[0].artists[0])
    })
  })
  return (
    <>
      <View>
        {
          Object.keys(result) === 0?
          <Text>loading...</Text>:
          <View>
          <Text>{result.name}</Text>
            <Image style={{width: 300, height: 300}} source={{uri: result.img1v1Url}}/>
          </View>
        }
      </View>
    </>
  )
}

