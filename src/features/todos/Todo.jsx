import { useRef, useState, useEffect } from "react";
import { styled } from "styled-components";
import { EditTodoForm } from "./EditTodoForm";
import { CheckSquare, Square, XCircle } from "react-feather";

export function Todo({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef(null);

  //TODO refactor to toggle state
  function toggleIsCompleted() {
    updateTodo(Object.assign({}, todo, { isCompleted: !todo.isCompleted }));
  }
  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }
  function toggleIsEditing(event) {
    if (event.detail === 2) {
      setIsEditing(!isEditing);
    }
  }

  useEffect(() => {
    const clickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsEditing(false);
      }
    };
    document.addEventListener("click", clickAway, true);
    return () => {
      document.removeEventListener("click", clickAway, true);
    };
  }, [isEditing]);

  return (
    <li ref={ref}>
      {isEditing ? (
        <EditTodoForm
          todo={todo}
          updateTodo={updateTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <StyledTodo>
          <CompleteButton onClick={toggleIsCompleted}>
            {todo.isCompleted ? <CheckSquare /> : <Square />}
          </CompleteButton>
          <StyledSpan
            onClick={toggleIsEditing}
            className={todo.isCompleted && "completed"}
          >
            {todo.title}
          </StyledSpan>
          <DeleteButton onClick={handleDeleteTodo}>
            <XCircle />
          </DeleteButton>
        </StyledTodo>
      )}
    </li>
  );
}

const StyledSpan = styled.span`
  &.completed {
    text-decoration: line-through;
  }
`;

const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  opacity: 0;
  color: #977b7b;
  &:hover {
    color: #ff0000;
    cursor: pointer;
  }
`;
const StyledTodo = styled.div`
  border: 1px solid #eee;
  padding: 5px;
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  & span:hover {
    cursor: pointer;
  }
  &:hover ${DeleteButton} {
    opacity: 1;
  }
`;

const CompleteButton = styled.button`
  padding: 0 0.25rem 0 0;
  background-color: transparent;
  border: none;
  color: #977b7b;
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

//TODO checkbox styling info: https://moderncss.dev/pure-css-custom-checkbox-style/
