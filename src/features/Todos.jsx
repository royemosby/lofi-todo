import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ShortUniqueId from "short-unique-id";
import { NewTodoForm } from "./todos/NewTodoForm";
import { TodoList } from "./todos/TodoList";
import { FilterTodos } from "./todos/FilterTodos";
import { SortTodos } from "./todos/SortTodos";

//TODO figure out best location for this to be instantiated
const { randomUUID } = new ShortUniqueId({ length: 10 });

export function Todos() {
  const [todos, setTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("alpha");

  function createTodo(title) {
    setTodos([
      ...todos,
      {
        title: title,
        id: randomUUID(),
        dateCreated: Date.now(),
        isCompleted: false,
      },
    ]);
  }
  function updateTodo(todo) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return Object.assign({}, todo, { isCompleted: todo.isCompleted });
      }
      return t;
    });
    setTodos(updatedTodos);
  }
  function deleteTodo(id) {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  }

  useEffect(() => {
    let sortedTodos;

    switch (sort) {
      case "alpha":
        sortedTodos = todos.sort((a, b) => {
          if (a.title === b.title) {
            return 0;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "completion":
        sortedTodos = todos.sort((a, b) => {
          if (a.isCompleted === b.isCompleted) {
            return 0;
          } else if (a.isCompleted > b.isCompleted) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      default:
        sortedTodos = todos.sort((a, b) => {
          if (a.dateCreated === b.dateCreated) {
            return 0;
          } else if (a.dateCreated > b.dateCreated) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
    }

    switch (filter) {
      case "active":
        setVisibleTodos([
          ...sortedTodos.filter((todo) => todo.isCompleted === false),
        ]);
        break;
      case "completed":
        setVisibleTodos([
          ...sortedTodos.filter((todo) => todo.isCompleted === true),
        ]);
        break;
      default:
        setVisibleTodos([...sortedTodos]);
        break;
    }
  }, [filter, sort, todos]);

  return (
    <Main>
      <FormFilterWrapper>
        <NewTodoForm createTodo={createTodo} />
        <FilterTodos setFilter={setFilter} currentFilter={filter} />
      </FormFilterWrapper>
      <ListSortWrapper>
        <TodoList
          todos={visibleTodos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        {todos.length > 1 && <SortTodos currentSort={sort} setSort={setSort} />}
      </ListSortWrapper>
    </Main>
  );
}

const Main = styled.main`
  width: 400px;
  display: grid;
  grid-template-rows: 64px 1fr;
`;

const FormFilterWrapper = styled.div`
  display: grid;
  grid-template-rows: 32px;
`;

const ListSortWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
