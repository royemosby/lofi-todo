import { useEffect, useRef, useState } from "react";
import { db } from "../../services/db";
import { toast } from "react-toastify";

export function NewTodoForm() {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");

  async function onHandleCreateTodo(event) {
    event.preventDefault();
    try {
      await db.todos.add({
        title,
        isCompleted: false,
        dateCreated: Date.now(),
      });
    } catch (error) {
      toast.error(`Failed to add "${title}" to todos`);
    }
    setTitle("");
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onHandleCreateTodo}>
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
