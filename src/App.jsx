import React from 'react';
function App() {
  function func(event, param1, param2) {
    console.log(event, param1, param2);
  }
  
  return (
    <div>
      <button onClick={event => func(event, 'eee', 'bbb')}>act</button>
    </div>
  );
}
export default App;