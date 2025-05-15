import React from 'react';
function App() {
  function handleClick(event) {
    console.log(event); // SyntheticEvent объект
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
export default App;