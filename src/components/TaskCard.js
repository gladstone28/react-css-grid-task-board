import React from 'react';

function TaskCard({ task }) {
  return (
    <div className="card">
      <div className="rectangle yellow"></div>
      <div className="rectangle green"></div>
      <div className="rectangle blue"></div>
      <div className="rectangle orange"></div>
      <p className="task-description">{task.description}</p>
      <img className="list-icon" src="assets/list_icon.svg" alt="List Icon" />
      <p className="task-date">{task.date}</p>
    </div>
  );
}

export default TaskCard;
