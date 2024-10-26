import React from 'react';
import TaskCard from './TaskCard';
import AddCard from './AddCard';

function TaskColumn({ title, tasks }) {
  return (
    <div className="card-column">
      <div className="taskgroup-heading">
        <h2>{title}</h2>
        <div className="ellipsis-icon">
          <img src="assets/oval_copy.svg" alt="..." />
          <img src="assets/oval_copy.svg" alt="..." />
          <img src="assets/oval_copy.svg" alt="..." />
        </div>
      </div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <AddCard />
    </div>
  );
}

export default TaskColumn;
