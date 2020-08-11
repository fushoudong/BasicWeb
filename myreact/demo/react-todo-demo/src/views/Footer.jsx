import React from 'react'
import FliterLink from '../components/FilterLink'
import FilterLink from '../components/FilterLink'
import * as constant from '../constants'

export default class Footer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        Show:
        {' '}
        <FilterLink filter={constant.SHOW_ALL}>
          All
        </FilterLink>
        {','}
        <FilterLink filter={constant.SHOW_ACTIVE}>
          Active
        </FilterLink>
        {':'}
        <FliterLink filter={constant.SHOW_COMPLETED}>
          Completed
        </FliterLink>
      </div>
    )
  }
}