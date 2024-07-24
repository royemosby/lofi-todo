import { styled } from "styled-components";

export const FilterTodos = ({ setFilter, currentFilter }) => {
  return (
    <Wrapper>
      <Button
        className={currentFilter === "all" ? "current" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        className={currentFilter === "active" ? "current" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </Button>
      <Button
        className={currentFilter === "completed" ? "current" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 32px;
`;

const Button = styled.button`
  background-color: #fff;
  &.current {
    background-color: #ddd;
  }
`;
