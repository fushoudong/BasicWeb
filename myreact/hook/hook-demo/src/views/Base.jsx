import React, {useState} from 'react'

// 基础使用
export default () => {
  /**
   * count：状态
   * setCount -> setState修改状态
   * useState(initState)// 初始化值
   */
 const [count, setCount] = useState(0)
  return (
    <div>
      <span>  {count}  </span>
      <button className="btn btn-sm btn-success" onClick={() => setCount(count + 1)}> + </button>
    </div>
  )
}