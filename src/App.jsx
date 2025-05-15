import React from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={() => setIsVisible(!isVisible)}
          style={{ marginRight: '10px' }}
        />
        Показать абзац
      </label>

      {isVisible && (
        <p style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: '#e9f7ef',
          borderRadius: '5px'
        }}>
          Этот абзац виден только когда чекбокс отмечен!
        </p>
      )}
    </div>
  );
}

export default App;





