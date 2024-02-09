import React, { useState } from 'react';

function TaskItem({ task, index, markDone, deleteTask }) {
  const [done, setDone] = useState(false);

  const handleMarkDone = () => {
    setDone(!done);
    markDone(index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <li className="list-group-item">
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{task}</span>
      <div className="float-end">
        <button className="btn btn-sm btn-success me-2" onClick={handleMarkDone}>Done</button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
