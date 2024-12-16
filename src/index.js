import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <div className="app">no more hello worlds</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);