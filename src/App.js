import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const events = [
    { id: 1, title: 'Science Fair', description: 'Annual science fair this weekend!', type: 'Academic' },
    { id: 2, title: 'Football Match', description: 'University finals next Saturday!', type: 'Sports' },
    { id: 3, title: 'Cultural Night', description: 'Experience culture and diversity!', type: 'Social' },
  ];

  const filteredEvents = events.filter(event => {
    return (
      (filter === 'All' || event.type === filter) &&
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="App">
      <header>
        <h1>University News Feed</h1>
      </header>
      <div className="controls">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Academic">Academic</option>
          <option value="Sports">Sports</option>
          <option value="Social">Social</option>
        </select>
      </div>
      <main>
        {filteredEvents.map(event => (
          <div key={event.id} className="event">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <small>Type: {event.type}</small>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
