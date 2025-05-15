import React from 'react';


function translit(text) {
  const cyrillic = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const latin = 'abvgdeejzijklmnoprstufhzcss_y_euaABVGDEEJZIJKLMNOPRSTUFHZCSS_Y_EUA';
  
  return text.split('').map(char => {
    const index = cyrillic.indexOf(char);
    return index >= 0 ? latin[index] : char;
  }).join('');
}

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите текст на русском"
        style={{ width: '300px', height: '100px', padding: '8px' }}
      />
      <p style={{ marginTop: '10px' }}>
        Транслит: <strong>{translit(text)}</strong>
      </p>
    </div>
  );
}


export default App;
