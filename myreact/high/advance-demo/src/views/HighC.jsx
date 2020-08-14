import React from 'react'
import {WithComponent} from '../witch/WithComponent'
import Data from '../components/HighData'

const WithData = WithComponent(Data)

export default class HighC extends React.Component {
  constructor() {
    super()
    this.state = {name: 'test'}
  }
  render() {
    return (
      <div>
        <WithData value={this.state.name}/>
      </div>
    )
  }
}