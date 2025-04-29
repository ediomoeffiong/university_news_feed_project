import React from 'react';
import events from './data';

function App() {
    return (
        <div>
            <header style={{ backgroundColor: 'green', color: 'white', padding: '1rem' }}>
                <h1>University News Feed</h1>
            </header>
            <main style={{ padding: '1rem' }}>
                {events.map((event) => (
                    <div key={event.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
                        <h2>Event: {event.title}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;
