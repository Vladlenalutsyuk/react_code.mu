import React from 'react';

// Компонент Book
function Book({ title, author, year, price }) {
  return (
    <div style={{
      border: '1px solid #eee',
      padding: '15px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>{title}</h3>
      <p><strong>Автор:</strong> {author}</p>
      <p><strong>Год издания:</strong> {year}</p>
      <p><strong>Цена:</strong> {price} руб.</p>
    </div>
  );
}

// Компонент App с тремя книгами
function App() {
  // Данные для первой книги
  const title1 = "Преступление и наказание";
  const author1 = "Фёдор Достоевский";
  const year1 = 1866;
  const price1 = 450;

  // Данные для второй книги
  const title2 = "Мастер и Маргарита";
  const author2 = "Михаил Булгаков";
  const year2 = 1967;
  const price2 = 520;

  // Данные для третьей книги
  const title3 = "1984";
  const author3 = "Джордж Оруэлл";
  const year3 = 1949;
  const price3 = 380;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Каталог книг</h1>
      
      <Book 
        title={title1} 
        author={author1} 
        year={year1} 
        price={price1} 
      />
      
      <Book 
        title={title2} 
        author={author2} 
        year={year2} 
        price={price2} 
      />
      
      <Book 
        title={title3} 
        author={author3} 
        year={year3} 
        price={price3} 
      />
    </div>
  );
}

export default App;