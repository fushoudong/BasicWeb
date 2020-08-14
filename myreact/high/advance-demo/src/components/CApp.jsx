import React, { Fragment } from 'react'

const ThemeContext = React.createContext('light')
export default class CApp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '斐斐',
      age: 22,
      gender: '女'
    }
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    )
  }
}
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  static contextType = ThemeContext
  render() {
    return (
        <ThemeContext.Consumer>
          {context => (
              <div>
                {
                  Object.keys(context).map((item, index) => {
                    return <p key={index}>{item} - {context[item]}</p>
                  })
                }
              </div>
            )
          }
        </ThemeContext.Consumer>
    )
  }
} 