import React, {useReducer} from 'react'

const initState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {
    case 'increase':
      return {count: state.count + 1}
    case 'decrease':
      return {count: state.count - 1}
    default:
      return new Error()
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state)
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>
        <button className="btn btn-success" onClick={() => dispatch({type: "increase"})}>+</button>
        <button className="btn btn-danger" onClick={() => dispatch({type: "decrease"})}>-</button>
      </p>
    </div>
  )
}