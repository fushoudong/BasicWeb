import React, { Fragment } from 'react'

function Column(props) {
  return (
    <Fragment>
      <td>斐斐</td>
      <td>女朋友</td>
    </Fragment>
  )
}

export default class Table extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th width="100">name</th>
              <th width="100">role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Column />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}