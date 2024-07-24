import { styled } from "styled-components";

export function Header() {
  return (
    <header>
      <Title>
        <a href="https://localfirstweb.dev/">LoFi</a> Todo List
      </Title>
    </header>
  );
}

const Title = styled.p`
  font-size: 3em;
`;
