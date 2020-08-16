import React, { useState, useEffect } from "react";
export default () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
      );
      const data = await response.json()
      console.log(data)
      setData(data)
      setLoading(false)
      return
    })();
  },[data]);
  return (
    <div>
      <h1>hello</h1>
      {isLoading ? <p>loading...</p> : <p>{data.chengpinDetails[0].content}</p>}
    </div>
  );
};
