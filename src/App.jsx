import React from 'react';


function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState('');
  
  const handleLanguageChange = (event) => {
    setFavoriteLanguage(event.target.value);
  };
  
  return (
    <div>
      <h3>Выберите ваш любимый язык программирования:</h3>
      
      <label>
        <input
          type="radio"
          name="programmingLanguage"
          value="JavaScript"
          checked={favoriteLanguage === 'JavaScript'}
          onChange={handleLanguageChange}
        />
        JavaScript
      </label>
      
      <label>
        <input
          type="radio"
          name="programmingLanguage"
          value="Python"
          checked={favoriteLanguage === 'Python'}
          onChange={handleLanguageChange}
        />
        Python
      </label>
      
      <label>
        <input
          type="radio"
          name="programmingLanguage"
          value="Java"
          checked={favoriteLanguage === 'Java'}
          onChange={handleLanguageChange}
        />
        Java
      </label>
      
      {favoriteLanguage && (
        <p>
          Ваш любимый язык: {favoriteLanguage}
          {favoriteLanguage === 'JavaScript' && ' - Отличный выбор! JavaScript это мощный и гибкий язык!'}
        </p>
      )}
    </div>
  );
}

export default App;





