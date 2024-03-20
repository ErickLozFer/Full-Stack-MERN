import React from 'react';
import './Task.css';

const Task = ({ task, removeTask, toggleTask }) => {
  return (
    <li className='espacio2'>
      <input className='check'
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className='btn2' onClick={() => removeTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;