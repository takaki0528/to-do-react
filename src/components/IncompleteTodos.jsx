import React, { useState } from "react";

export const IncompleteTodos = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete,
    setIncompleteTodos,
    editSwitch,
    setEditSwitch
  } = props;

  const onChangeEditTodoText = (event) => setEditTodo(event.target.value);

  const [editTodo, setEditTodo] = useState("");

  const onClickEdit = (index) => {
    const editList = [...editSwitch];
    editList[index] = !editList[index];
    setEditSwitch(editList);
  };

  const onClickSave = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos[index] = editTodo;
    setIncompleteTodos(newTodos);
    const editList = [...editSwitch];
    editList[index] = !editList[index];
    setEditSwitch(editList);
  };

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              {editSwitch[index] ? (
                <div>
                  <input
                    placeholder="TODOを入力"
                    defaultValue={todo}
                    onChange={onChangeEditTodoText}
                  />
                  <button onClick={() => onClickSave(index)}>保存</button>
                </div>
              ) : (
                <>
                  <li>{todo}</li>
                  <button onClick={() => onClickEdit(index)}>編集</button>
                </>
              )}

              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
