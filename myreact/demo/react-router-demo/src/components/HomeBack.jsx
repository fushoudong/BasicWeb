import React from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'
class HomeBack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log(this)
  }
  back = () => {
    console.log('back')
    console.log(this.props)
    this.props.history.push('/shop')
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.back}>back</Button>
      </div>
    )
  }
}
export default withRouter(HomeBack)
