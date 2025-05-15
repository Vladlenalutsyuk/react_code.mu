import React from 'react';
function App() {
  function func(arg, event) {
    console.log(arg, event);
  }
  
  return (
    <div>
      <button onClick={event => func('eee', event)}>act</button>
    </div>
  );
}
export default App;