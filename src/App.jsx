import React from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState(0);

  const calculateProduct = () => {
    const num = Math.abs(Number(number));
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    
    setProduct(divisors.reduce((acc, val) => acc * val, 1));
  };

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(e.target.value)}
        onBlur={calculateProduct}
      />
      <p>Произведение делителей: {product}</p>
    </div>
  );
}
export default App;
