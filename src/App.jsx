import React from 'react';
function App() {
  function func(param1, param2, event) {
    console.log(param1, param2, event);
  }
  
  return (
    <div>
      <button onClick={event => func('eee', 'bbb', event)}>act</button>
    </div>
  );
}
export default App;