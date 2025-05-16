//Задача 1. Счетчик с кнопками +/-
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Display count={count} />
      <Controls 
        onIncrement={() => setCount(c => c + 1)}
        onDecrement={() => setCount(c => c - 1)}
      />
    </div>
  );
}

function Display({ count }) {
  return <h2>Текущее значение: {count}</h2>;
}

function Controls({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
//Задача 2. Форма регистрации с валидацией
function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <form>
      <InputField 
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
      />
      <InputField 
        name="password"
        value={formData.password}
        onChange={handleChange}
        label="Пароль"
        type="password"
      />
      <ValidationMessage formData={formData} />
    </form>
  );
}

function InputField({ name, value, onChange, label, type = 'text' }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function ValidationMessage({ formData }) {
  const isValid = formData.password === formData.confirmPassword;
  return !isValid && <p style={{color: 'red'}}>Пароли не совпадают!</p>;
}
//Задача 3. Переключатель тем (темная/светлая)
function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      background: isDark ? '#333' : '#fff',
      color: isDark ? '#fff' : '#333',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <SwitchButton 
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />
    </div>
  );
}

function Header({ isDark }) {
  return <h1>{isDark ? 'Тёмная тема' : 'Светлая тема'}</h1>;
}

function Content({ isDark }) {
  return <p>Текущая тема: {isDark ? 'тёмная' : 'светлая'}</p>;
}

function SwitchButton({ isDark, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Переключить на {isDark ? 'светлую' : 'тёмную'} тему
    </button>
  );
}