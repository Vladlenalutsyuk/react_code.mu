import React from 'react';


function App() {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false
  });

  const handleChange = (lang) => {
    setLanguages({
      ...languages,
      [lang]: !languages[lang]
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Какие языки вы знаете?</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="checkbox"
          id="html"
          checked={languages.html}
          onChange={() => handleChange('html')}
        />
        <label htmlFor="html" style={{ marginLeft: '5px' }}>HTML</label>
        <p>HTML: {languages.html ? '✓' : '✗'}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="checkbox"
          id="css"
          checked={languages.css}
          onChange={() => handleChange('css')}
        />
        <label htmlFor="css" style={{ marginLeft: '5px' }}>CSS</label>
        <p>CSS: {languages.css ? '✓' : '✗'}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <input
          type="checkbox"
          id="js"
          checked={languages.js}
          onChange={() => handleChange('js')}
        />
        <label htmlFor="js" style={{ marginLeft: '5px' }}>JavaScript</label>
        <p>JavaScript: {languages.js ? '✓' : '✗'}</p>
      </div>
      
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Вы знаете: {[
          languages.html && 'HTML',
          languages.css && 'CSS',
          languages.js && 'JavaScript'
        ].filter(Boolean).join(', ') || 'ничего'}
      </p>
    </div>
  );
}



export default App;
