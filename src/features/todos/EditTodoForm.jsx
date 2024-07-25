import { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { db } from "../../services/db";

export function EditTodoForm({ todo, setIsEditing }) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState(todo.title);

  async function onUpdateTodo(event) {
    event.preventDefault();
    setIsEditing(false);
    try {
      await db.todos.update(todo.id, { title: title });
    } catch {
      toast.error(`Failed to update ${todo.id}`);
    }
  }

  return (
    <StyledForm>
      <button onClick={onUpdateTodo}>Update</button>
      <LeftAlignedInput
        ref={inputRef}
        type="text"
        name="todo"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 3px 1px;
`;

const LeftAlignedInput = styled.input`
  width: 100%;
  text-align: left;
  min-width: 120px;
`;
