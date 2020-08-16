import React, {useState} from 'react'


/**
 * 
 * @param {*} initValue 
 * 将创建useState过程进行封装，对外直接暴露对象，如果要使用对象，直接创建实例即可，复用时减少代码量
 */ 
const useInputValue = (initValue) => {
  const [value, setValue] = useState(initValue)
  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default ({onSubmit}) => {
  const user = useInputValue("")
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="请输入" {...user}/>
      </form>
    </div>
  )
}