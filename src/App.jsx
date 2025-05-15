import React from 'react';
function App() {
  function handleClick(event) {
    console.log(event.target); // DOM-элемент кнопки
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
export default App;