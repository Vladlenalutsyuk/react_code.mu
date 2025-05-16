import React from 'react';
import styled from 'styled-components';

// Стилизованный контейнер (div)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
`;

// Стилизованная кнопка
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props => (props.warn ? 'yellow' : 'green')};
  color: ${props => (props.warn ? 'red' : 'white')};
  &:hover {
    background-color: ${props => (props.disabled ? '#f0f0f0' : props.warn ? '#ffeb3b' : '#4caf50')};
  }
`;

function Block() {
  return (
    <Container>
      <Button disabled>Button 1</Button>
      <Button warn>Button 2</Button>
      <Button type="reset">Button 3</Button>
    </Container>
  );
}

export default Block;