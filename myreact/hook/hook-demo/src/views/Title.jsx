import React, { useState, useEffect } from "react";

// export default class Title extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//   }
//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`
//   }
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button className="btn btn-primary" onClick={this.handleClick}>Set</button>
//       </div>
//     )
//   }
// }

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Set
      </button>
    </div>
  );
};
