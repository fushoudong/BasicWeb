import React from 'react'
import HomeBack from '../components/HomeBack'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <HomeBack/>
      </div>
    )
  }
}