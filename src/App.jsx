import React from 'react';



function App() {
  const [isAdult, setIsAdult] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <input
          type="checkbox"
          checked={isAdult}
          onChange={() => setIsAdult(!isAdult)}
          style={{ marginRight: '10px' }}
        />
        Мне уже есть 18 лет
      </label>

      {isAdult ? (
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '15px', 
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}>
          <h2 style={{ color: 'green' }}>Ура, вам уже есть 18!</h2>
          <p>Здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '15px', 
          borderRadius: '5px',
          border: '1px solid #ffeeba'
        }}>
          <p style={{ color: '#856404' }}>Увы, вам еще нет 18 лет :(</p>
        </div>
      )}
    </div>
  );
}





export default App;
