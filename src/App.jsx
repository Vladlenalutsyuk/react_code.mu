import React from 'react';
function App() {
  const isAdult = true;
  let message;

  if (isAdult) {
    message = <p>Вам уже есть 18 лет</p>;
  } else {
    message = <p>Вам ещё нет 18 лет</p>;
  }

  return <div>{message}</div>;
}

export default App;