import React from 'react';

function NewsList({ news }) {
  return (
    <div style={listStyle}>
      {news.length > 0 ? (
        news.map((item, index) => (
          <div key={index} style={newsItemStyle}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
}

const listStyle = { padding: '1rem' };
const newsItemStyle = { marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' };

export default NewsList;
