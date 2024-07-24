import { styled } from "styled-components";

import { Todo } from "./Todo";

export function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <List>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          ></Todo>
        ))
      ) : (
        <li>Nothing to do!</li>
      )}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 8px 0;
  display: grid;
  grid-gap: 4px;
`;
