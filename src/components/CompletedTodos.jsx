import React from "react";

export const CompletedTodos = (props) => {
  const { completedTodos, onClickBack } = props;
  return (
    <div className="completed-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completedTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
