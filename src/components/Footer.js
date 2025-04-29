import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 University News Feed. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#4CAF50',
  color: 'white',
};

export default Footer;
