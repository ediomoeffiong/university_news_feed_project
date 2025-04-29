import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)} style={filterStyle}>
      <option value="All">All</option>
      <option value="Academic">Academic</option>
      <option value="Sports">Sports</option>
      <option value="Social">Social</option>
    </select>
  );
}

const filterStyle = {
  padding: '10px',
  fontSize: '16px',
};

export default Filter;
