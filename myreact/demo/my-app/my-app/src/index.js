import React from "react";
import ReactDOM from "react-dom";
import App from './App'

// function formatName(user) {
//   return user.firstName + " " + user.lastName
// }
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }
// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// // )
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(tick, 1000)
ReactDOM.render(<App/>, document.getElementById("root"));
