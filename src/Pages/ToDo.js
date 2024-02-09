import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
        ...tasks,
        task]);
  };

  const markDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <p className="task-heading">Add Your TASKS</p>
      <TaskForm addTask={addTask} />
      <ul className="list-group">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            markDone={markDone}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
