import React from 'react';

function Skill({ skill }) {
  return (
    <li key={skill.name} className="list-group-item">
      <div className="flex items-center mb-2">
        <img src={skill.logo} className="w-10 h-10 mr-2" alt="Skill Logo" />
        <div>{skill.name}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-2" style={{ width: `${skill.progress}%` }}></div>
      </div>
    </li>
  );
}

export default Skill;
