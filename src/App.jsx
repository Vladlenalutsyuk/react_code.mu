/*В компонентах Products, Product и ProductField данные движутся строго в соответствии с принципами однонаправленного потока в React. Рассмотрим оба направления потока:

1. Нисходящий поток данных (от родителя к потомкам)
Схема:
Products (state) → Product (props) → ProductField (props)

Как это работает:

Компонент-контейнер Products:

Хранит состояние (state) с массивом продуктов prods

Передает данные вниз через пропсы:

jsx
<Product 
  key={prod.id}
  id={prod.id}
  name={prod.name} 
  cost={prod.cost}
/>
Презентационный Product:

Получает данные только через пропсы (name, cost)

Может передавать данные дальше вниз (если использует ProductField):

jsx
<ProductField 
  label="Название" 
  value={name}
/>
Презентационный ProductField (если есть):

Получает только то, что ему передали (label, value)

Не знает об источнике данных

2. Восходящий поток данных (от потомков к родителю)
Схема:
ProductField (event) → Product (callback) → Products (setState)

Как это работает:

Products передает колбэк через пропсы:

jsx
<Product
  ...
  onUpdate={(id, newData) => updateProduct(id, newData)}
/>
Product:

Передает колбэк дальше или обрабатывает события:

jsx
<ProductField
  ...
  onChange={(newValue) => onUpdate(id, {name: newValue})}
/>
ProductField:

Вызывает переданный колбэк при изменениях:

jsx
<input 
  value={value}
  onChange={(e) => onChange(e.target.value)}
/>