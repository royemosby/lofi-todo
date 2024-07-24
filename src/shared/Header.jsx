import { styled } from "styled-components";

export function Header() {
  return (
    <header>
      <Title>YA Todo List</Title>
    </header>
  );
}

const Title = styled.p`
  font-size: 3em;
`;
