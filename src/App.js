import React, { useState } from "react";
import events from "./data";

function App() {
    // State for the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Filter events based on the search query
    const filteredEvents = events.filter(
        (event) =>
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Header */}
            <header style={{ backgroundColor: "green", color: "white", padding: "1rem" }}>
                <h1>University News Feed</h1>
            </header>

            {/* Search Bar */}
            <div style={{ padding: "1rem", textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Search for events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        width: "80%",
                        maxWidth: "400px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                    }}
                />
            </div>

            {/* Events */}
            <main style={{ padding: "1rem" }}>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <div key={event.id} style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}>
                            <h2>Event: {event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>No events found.</p>
                )}
            </main>
        </div>
    );
}

export default App;
