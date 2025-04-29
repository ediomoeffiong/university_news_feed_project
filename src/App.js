import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import events from './data/events';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredEvents = events.filter((event) => {
    return (
      (filter === 'All' || event.type === filter) &&
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="controls" style={controlsStyle}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <NewsList filteredEvents={filteredEvents} />
      <Footer />
    </div>
  );
}

const controlsStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
};

export default App;
