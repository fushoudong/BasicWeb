import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("斐斐");

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log('数据修改')
  }, [count]) 

  return (
    <div>
      <p> You clicked {count} times</p>
      <p>{name}</p>
      <p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>plus</button>
        <button className="btn btn-success" onClick={() => setName("我爱斐斐")}>name</button>
      </p>
    </div>
  );
};
