import React, { useState, useEffect } from 'react';
import Task from '../../Components/Task.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Tarea 1', completed: false },
      { id: 2, text: 'Tarea 2', completed: false },
    ];
  });
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    if (taskName.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: taskName,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskName('');
    }
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='espacio'>
      <h1 className='titulo'>Lista de tareas</h1>
      <div>
        <input className='search'
          type="text"
          value={taskName}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Nombre de la tarea"
        />
        <button className='btn' onClick={addTask}>Agregar</button>
      </div>
      <ul className='formato'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;