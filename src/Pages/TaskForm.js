import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}

export default TaskForm;