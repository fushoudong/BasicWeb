import React from 'react'

export default class Params extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const {params} = this.props.match
    return (
      <div>
        5{params.id}——{params.name}
      </div>
    )
  }
}