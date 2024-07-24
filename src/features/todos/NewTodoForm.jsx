import { useEffect, useRef, useState } from "react";

export function NewTodoForm({ createTodo }) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  function onHandlecreateTodo(event) {
    event.preventDefault();
    createTodo(title);
    setTitle("");
    inputRef.current.focus();
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={onHandlecreateTodo}>
      <label htmlFor="todo"></label>
      <input
        ref={inputRef}
        type="text"
        name="todo"
        value={title}
        placeholder="what needs doing?"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit" disabled={title.length === 0}>
        Add Todo
      </button>
    </form>
  );
}
