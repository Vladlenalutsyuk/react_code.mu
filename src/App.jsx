import React from 'react';
function App() {
  const isAdmin = true;
  let content;

  if (isAdmin) {
    content = (
      <div>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
      </div>
    );
  }

  return content;
}
export default App;