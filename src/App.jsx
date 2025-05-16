import React from 'react';
import styled from 'styled-components';

// Стилизованные компоненты
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 8px;
  background-color: #f8f9fa;
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  color: white;
`;

const PrimaryButton = styled(Button)`
  background-color: #3498db;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #2ecc71;
  
  &:hover {
    background-color: #27ae60;
  }
`;

// Основной компонент
function App() {
  return (
    <Container>
      <Title>Кнопки со Styled Components</Title>
      <PrimaryButton>Основная кнопка</PrimaryButton>
      <SecondaryButton>Дополнительная кнопка</SecondaryButton>
    </Container>
  );
}

export default App;