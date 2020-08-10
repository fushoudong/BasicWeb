import React from 'react'
import {Button} from 'antd'
import qs from 'querystring'

export default class FetchPost extends React.Component {
  constructor() {
    super()
    this.state = {
      song_list: []
    }
  }
  clickButton = () => {
    fetch('/v1/restserver/ting',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accpet': 'application/json, text/plain, */*'
      },
      body: qs.parse({
        method: 'baidu.ting.billboard.billList',
        type: '1',
        size: '10',
        offset: '0'
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
    })
    // fetch('http://example.com/answer',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accpet': 'application/json, text/plain, */*'
    //   },
    //   body: JSON.stringify({
    //     answer: 42
    //   })
    // }).then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.clickButton}>获取数据</Button>
      </div>
    )
  }
}