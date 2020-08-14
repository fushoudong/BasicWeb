import React from 'react'
import Chengpin from '../components/net/ChengPin'
import Banner from '../components/net/Banner'
import {WithFetch} from '../witch/WithFetch'
const CP = WithFetch(Chengpin, 'http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')
const BN = WithFetch(Banner, 'http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
export default class FetchView extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <CP />
        <BN />
      </div>
    )
  }
}