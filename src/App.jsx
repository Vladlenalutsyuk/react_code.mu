import React from 'react';
function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  
  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default App;