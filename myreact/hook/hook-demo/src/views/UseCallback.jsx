import React, {useState, useCallback} from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return(
    <div>
      <p>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>change1</button>
      </p>
      <p>
        <span>{count1}</span>
        <button onClick={useCallback(() => setCount1(count1 + 1), [count])}>change2</button>
      </p>
    </div>
  )
}