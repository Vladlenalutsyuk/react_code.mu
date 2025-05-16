import React, { useState } from 'react';
import './Checklist.css';

const Checklist = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: nextId, text: newTask, completed: false }]);
      setNextId(nextId + 1);
      setNewTask('');
    }
  };

  const toggleTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)));
  };

  const editTask = (task) => {
    const updatedText = prompt('Обновите дело:', task.text);
    if (updatedText !== null) {
      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, text: updatedText } : t)));
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="checklist">
      <h1>Чеклист</h1>
      <div className="inp">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTask()}
          placeholder="Введите дело, которое вы запланировали..."
        />
      </div>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-item">
              <span
                onClick={() => toggleTask(task)}
                className={task.completed ? 'done' : ''}
              >
                {task.text}
              </span>
              <div className="button-group">
                <button onClick={() => editTask(task)}>Редактировать</button>
                <button onClick={() => removeTask(task.id)}>Удалить</button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Checklist;