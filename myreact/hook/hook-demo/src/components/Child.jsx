import React from "react";

function Child(props) {
  console.log("我爱斐斐");
  return <div>get Data: {props.data}</div>;
}
export default React.memo(Child);
