import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
export default () => {
  const [comments, setComents] = useState([])
  const handleSubmit = (text) => {
    setComents([text, ...comments])
    console.log(comments);
  };
  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <ul className="list-group w-25">
        {
          comments.length === 0?
          <p></p>:
          comments.map((item, index) => {
            return <li key={index} className="list-group-item">{item}</li>
          })
        }
      </ul>
      <button className="btn btn-primary" onClick={() => setComents([])}>clear</button>
    </div>
  );
};
