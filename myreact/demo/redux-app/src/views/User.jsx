import React from 'react'
import * as userActions from '../actions/user'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button} from 'antd'
class User extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: '斐斐',
        age: 22,
        gender: '女',
        boyFriend: '小付砸'
      },
      status: '尚未发起请求'
    }
  }
  render() {
    const {user} = this.props
    const {add_user, get_user} = this.props.userActions
    console.log(user, typeof user)
    return (
      <div>
        {
          Object.keys(user).length !== 0?
          Object.keys(user).map((item, index) => {
            return <h4 key={index}>{item} - {user[item]}
              </h4>
          }):
          <p>{this.state.status}</p>
        }
        <Button type="dashed" onClick={() => get_user()}>发起请求</Button>
        <Button type="primary" onClick={() => add_user({
          name: '斐斐',
          age: 22,
          gender: '女',
          boyFriend: '小付砸'
        })}>添加</Button>
        <h3>user</h3>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
   return {
    userActions: bindActionCreators(userActions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)