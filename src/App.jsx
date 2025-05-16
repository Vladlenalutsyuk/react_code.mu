/*1. Иммутабельное добавление элементов в массив

Для добавления элементов в массив без мутации исходного массива следует использовать:

Оператор spread: const newArray = [...oldArray, newElement]

Метод concat: const newArray = oldArray.concat(newElement)

Пример в React-компоненте:

setUsers([...users, newUser]);  // через spread
// или
setUsers(users.concat(newUser)); // через concat
2. Иммутабельное изменение элементов в массиве

Для изменения элементов нужно использовать метод map:

javascript
const updatedArray = originalArray.map((item, index) => 
  index === targetIndex ? modifiedItem : item
);
React-пример:

javascript
setTodos(todos.map((todo, i) => 
  i === 1 ? {...todo, completed: true} : todo
));
3. Иммутабельное удаление элементов из массива

Правильные подходы:

Через filter: const newArray = oldArray.filter((_, i) => i !== indexToRemove)

Комбинацией slice (менее предпочтительно):

javascript
const newArray = [
  ...oldArray.slice(0, index),
  ...oldArray.slice(index + 1)
];
Пример использования:

javascript
setNumbers(numbers.filter((_, i) => i !== 0)); // удаляем первый элемент
4. Иммутабельное добавление в массив объектов

Аналогично простому массиву, но добавляем целый объект:

javascript
setProducts([...products, {id: 5, name: 'Новый продукт'}]);
5. Иммутабельное изменение в массиве объектов

Основные подходы:

По идентификатору:

javascript
setStudents(students.map(student => 
  student.id === 101 ? {...student, grade: 'A'} : student
));
По индексу (если нет уникального id):

javascript
setItems(items.map((item, index) => 
  index === 2 ? {...item, checked: true} : item
));
6. Иммутабельное удаление из массива объектов

Правильные методы:

По id:

javascript
setEmployees(employees.filter(emp => emp.id !== 205));
По индексу:

javascript
setPosts(posts.filter((_, i) => i !== 3));
Общие рекомендации:

Всегда создавайте новые массивы/объекты вместо изменения существующих

Для сложных структур делайте глубокие копии

Используйте spread-оператор (...) для копирования объектов и массивов

Комбинируйте методы (map + filter + spread) для сложных операций

Для вложенных структур рассмотрите использование библиотек типа Immer

Пример комплексного обновления:

javascript
// Обновление вложенного свойства объекта в массиве
setData(data.map(item => 
  item.id === 42 
    ? {
        ...item,
        details: {
          ...item.details,
          price: item.details.price * 1.1
        }
      }
    : item
));