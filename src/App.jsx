import React, { useState } from "react";
import "./styles.css";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const [toggle, setToggle] = useState(true);
  const [editSwitch, setEditSwitch] = useState([false]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") alert("TODOを入力してください");
    else if (incompleteTodos.includes(todoText)) alert("このTODOは既存です");
    else {
      const newTodos = [...incompleteTodos, todoText];
      const editList = [...editSwitch, false];
      setIncompleteTodos(newTodos);
      setEditSwitch(editList);
      setTodoText("");
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    const editList = [...editSwitch];
    newTodos.splice(index, 1);
    editList.splice(index, 1);
    setIncompleteTodos(newTodos);
    setEditSwitch(editList);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const editList = [...editSwitch];
    newIncompleteTodos.splice(index, 1);
    editList.splice(index, 1);
    setEditSwitch(editList);

    const newCompletedTodos = [...completedTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompletedTodos(newCompletedTodos);
  };

  const onClickBack = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completedTodos[index]];
    const editList = [...editSwitch, false];
    setCompletedTodos(newCompletedTodos);
    setIncompleteTodos(newIncompleteTodos);
    setEditSwitch(editList);
  };

  const onClickToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        setIncompleteTodos={setIncompleteTodos}
        editSwitch={editSwitch}
        setEditSwitch={setEditSwitch}
      />
      {completedTodos.length >= 5 && <p>BootCamp突破おめでとう！</p>}
      {toggle ? (
        <button onClick={onClickToggle}>完了したTODOを表示</button>
      ) : (
        <>
          <CompletedTodos
            completedTodos={completedTodos}
            onClickBack={onClickBack}
          />
          <button onClick={onClickToggle}>完了したTODOを非表示</button>
        </>
      )}
    </>
  );
};
