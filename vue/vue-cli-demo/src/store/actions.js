import * as con from '../constants/store'
import axios from 'axios'

export default {
  increase(context) {
    context.commit(con.INCREASE)
  },
  dealRequest(context) {
    axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
      .then(res => {
        console.log(res)
        context.commit(con.SET_TITLE, {
          title: res.data.chengpinDetails[0].title
        })
      }).catch(error => {
        console.log('请求失败', error)
    })
  },
  delayOperation(context, payload) {
    setTimeout(() => {
      context.commit(con.SET_DELAY, {
        delay: '分发',
        data: payload.data
      })
    }, 1000)
  },
  setPromise(state, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('延时1秒执行')
        resolve(payload)
      }, 1000)
    })
  }
}
