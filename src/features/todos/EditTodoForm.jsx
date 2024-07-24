import { useRef, useState } from "react";
import styled from "styled-components";

export function EditTodoForm({ todo, setIsEditing, updateTodo }) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState(todo.title);

  function onUpdateTodo(event) {
    event.preventDefault();
    updateTodo(Object.assign({}, todo, { title: title }));
    setIsEditing(false);
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
