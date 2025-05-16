// styles.js
const container = {
  margin: '20px',
  padding: '20px',
  border: '2px solid #3498db',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center',
  maxWidth: '500px'
};

const title = {
  color: '#2c3e50',
  marginBottom: '15px'
};

const baseButton = {
  padding: '10px 20px',
  margin: '0 10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s'
};

const primaryButton = {
  ...baseButton,
  backgroundColor: '#3498db',
  color: 'white'
};

const secondaryButton = {
  ...baseButton,
  backgroundColor: '#2ecc71',
  color: 'white'
};

export const styles = {
  container,
  title,
  primaryButton,
  secondaryButton,
  // Функции для динамических стилей
  getHoverStyle: (baseColor, hoverColor) => ({
    ...baseButton,
    backgroundColor: baseColor,
    color: 'white',
    ':hover': {
      backgroundColor: hoverColor
    }
  })
};