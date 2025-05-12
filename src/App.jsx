import React from 'react';
function App() {
  const age = 19;
  
  return (
    <div>
      {age > 18 ? (
        <p>Вам уже есть 18 лет, доступ разрешён</p>
      ) : (
        <p>Вам ещё нет 18 лет, доступ запрещён</p>
      )}
    </div>
  );
}
 
export default App;