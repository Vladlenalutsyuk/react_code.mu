import React from 'react';
function App() {
  function func(param1, event, param2) {
    console.log(param1, event, param2);
  }
  
  return (
    <div>
      <button onClick={event => func('eee', event, 'bbb')}>act</button>
    </div>
  );
}
export default App;