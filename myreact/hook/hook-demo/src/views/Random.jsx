import React, {useState} from "react";

// const userSet = ["张三", "李四", "王五", "赵六"];
// export default class Random extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       user: userSet[0],
//     };
//   }
//   handleChange = () => {
//     const randomIndex = Math.floor(Math.random() * userSet.length)
//     this.setState({
//       user: userSet[randomIndex]
//     })
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.user}</p>
//         <button onClick={this.handleChange} className="btn btn-success"> change </button>
//       </div>
//     );
//   }
// }
export default () => {
  const userSet = ["张三", "李四", "王五", "赵六"];
  const [user, setUser] = useState(userSet[0])
  const handleChange = () => {
    const randomIndex = Math.floor(Math.random() * userSet.length)
    setUser(userSet[randomIndex])
  }
  return (
    <div>
         <p>{user}</p>
         <button onClick={handleChange} className="btn btn-success"> change </button>
       </div>
  )
}