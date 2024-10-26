import React, { useState } from 'react';

function AddCard() {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddCard = () => {
    if (taskDescription) {
      const today = new Date();
      const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
      // Logic to add the card (e.g., updating state in App)
      setTaskDescription('');
    }
  };

  return (
    <div className="add-card-container">
      <input
        className="new-card-task"
        placeholder="Add a card..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="add-card" onClick={handleAddCard}>
        Add
      </button>
    </div>
  );
}

export default AddCard;
