import React from 'react';

function NewsList({ filteredEvents }) {
  return (
    <main style={newsListStyle}>
      {filteredEvents.map((event) => (
        <div key={event.id} style={eventStyle}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <small>Type: {event.type}</small>
        </div>
      ))}
    </main>
  );
}

const newsListStyle = {
  padding: '20px',
};

const eventStyle = {
  borderBottom: '1px solid #ccc',
  padding: '10px 0',
};

export default NewsList;
