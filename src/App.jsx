import styled from 'styled-components';

// Стилизованный див DIVA (Задача №1)
const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black;
`;

// Стилизованный див DIVB на базе DIVA (Задача №2)
const DIVB = styled(DIVA)`
  background-color: green;
  border: 3px solid black;
`;

// Стилизованный контейнер (для Задачи №3)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Компонент Block1 (Задача №3)
function Block1() {
  return (
    <Container>
      <DIVA />
      <DIVB />
      <DIVA />
    </Container>
  );
}

export default Block1;