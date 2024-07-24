import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { NewTodoForm } from "./todos/NewTodoForm";
import { TodoList } from "./todos/TodoList";
import { FilterTodos } from "./todos/FilterTodos";
import { SortTodos } from "./todos/SortTodos";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../services/db";

export function Todos() {
  const todos = useLiveQuery(() => db.todos.toArray());
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("alpha");

  useEffect(() => {
    let sortedTodos;

    if (!todos) {
      return;
    }

    switch (sort) {
      case "alpha":
        sortedTodos = todos.sort((a, b) => {
          if (a.title.toLowerCase() === b.title.toLowerCase()) {
            return 0;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
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
        <NewTodoForm />
        <FilterTodos setFilter={setFilter} currentFilter={filter} />
      </FormFilterWrapper>
      <ListSortWrapper>
        <TodoList todos={visibleTodos} />
        {todos?.length > 1 && (
          <SortTodos currentSort={sort} setSort={setSort} />
        )}
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
