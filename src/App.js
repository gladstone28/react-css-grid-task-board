import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import TaskColumn from './components/TaskColumn';

function App() {
  const futureTasks = [
    { description: 'Pick Color Trends', date: '4/21/2017' },
    { description: 'Source Fabrics', date: '4/21/2017' },
    { description: 'Manufacture clothing', date: '4/20/2017' },
    { description: 'Confirm structural integrity', date: '4/23/2017' },
    { description: 'Manufacture mandibles', date: '4/26/2017' },
  ];

  const activeTasks = [
    { description: 'Test fear factor', date: '4/20/2017' },
    { description: 'Develop button samples', date: '4/21/2017' },
    { description: 'Recall malfunctioning giraffes', date: '4/21/2017' },
    { description: 'Conduct user interviews', date: '4/20/2017' },
    { description: 'Perform user research on new stuffing', date: '4/23/2017' },
  ];

  const completedTasks = [
    { description: 'Research Trends', date: '4/19/2017' },
    { description: 'Test materials durability', date: '4/18/2017' },
    { description: 'Analyze competitor products', date: '4/17/2017' },
    { description: 'Develop initial designs', date: '4/16/2017' },
    { description: 'Secure product patents', date: '4/15/2017' },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="site-body">
        <div className="container">
          <TaskColumn title="FUTURE PROJECTS" tasks={futureTasks} />
          <TaskColumn title="ACTIVE PROJECTS" tasks={activeTasks} />
          <TaskColumn title="COMPLETED PROJECTS" tasks={completedTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
