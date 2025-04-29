import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>University News Feed</h1>
    </header>
  );
}

const headerStyle = {
  padding: '1rem',
  backgroundColor: '#4CAF50',
  color: 'white',
  textAlign: 'center',
};

export default Header;
