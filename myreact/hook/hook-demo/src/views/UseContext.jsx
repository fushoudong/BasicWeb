import React, {useContext} from 'react'
const ThemeContext = React.createContext("theme")
export default () => {
  return (
    <div>
      <ThemeContext.Provider value={["我爱斐斐","一生一世"]}>
        <Middle />
      </ThemeContext.Provider>
    </div>
  )
}

function Middle() {
  return (
    <div>
      <Child1 />
    </div>
  )
}

function Child1() {
  const contextType = useContext(ThemeContext)
  console.log(contextType);
  return (
    <div>
      {
        contextType.map((item, index) => {
          return <h2 key={index}>{item}</h2>
        })
      }
    </div>
  )
}