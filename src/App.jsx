
import { useState } from 'react';

function App() {
  const [date, setDate] = useState({
    year: 2025,
    month: 12,
    day: 31
  });

  // Функция для получения дня недели
  function getDayOfWeek(year, month, day) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dateObj = new Date(year, month - 1, day);
    return days[dateObj.getDay()];
  }

  return (
    <div>
      <h2>Текущая дата:</h2>
      <p>
        {date.day}.{date.month}.{date.year} - {getDayOfWeek(date.year, date.month, date.day)}
      </p>
    </div>
  );
}



export default App;





