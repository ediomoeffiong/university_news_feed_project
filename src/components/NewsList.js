import React from 'react';

function NewsList({ filteredEvents }) {
  return (
    <main>
      {filteredEvents.map((event) => (
        <div key={event.id} className="event">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <small>Type: {event.type}</small>
        </div>
      ))}
    </main>
  );
}

export default NewsList;
