import React, { useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';

function App() {
  const [news, setNews] = useState([
    { title: 'Welcome to the University News Feed', description: 'Stay updated with university news and events!' },
    { title: 'Event: Science Fair', description: 'Don’t miss the annual science fair this weekend!' },
  ]);

  return (
    <div>
      <Header />
      <NewsList news={news} />
    </div>
  );
}

export default App;
