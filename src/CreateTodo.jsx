import React from "react";
import {
  AiOutlineStar,
  AiOutlineDownCircle,
  AiOutlineDelete,
} from "react-icons/ai";

export default function CreateTodo(props) {
  const todo = props.todo;
  const [doneState, setDoneState] = React.useState(false);

  const [checkState, setCheckState] = React.useState(false);

  function doneTodo(e) {
    setDoneState((prev) => !prev);
  }

  function check() {
    setCheckState((prev) => !prev);
  }

  function deleteTodo() {
    const index = props.index;
    console.log(index);

    props.setTodos((prev) => prev.filter((e, i) => i !== index));
  }
  return (
    <div className="my-todo">
      <AiOutlineStar
        className={doneState ? "icon icon-star-done" : "icon icon-star"}
        onClick={doneTodo}
      />
      <p className={checkState ? "icon-checked" : ""}>{todo}</p>
      <AiOutlineDownCircle className="icon icon-check" onClick={check} />
      <AiOutlineDelete className="icon icon-delete" onClick={deleteTodo} />
    </div>
  );
}
