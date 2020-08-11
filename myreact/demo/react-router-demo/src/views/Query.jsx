import React from 'react'
import qs from 'querystring'

export default class Query extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log(this.props.location, qs.parse(this.props.location.search))
  }
  render() {
    const search = qs.parse(this.props.location.search)
    return (
      <div>
       5{search["?id"]}——{search.name}
      </div>
    )
  }
}