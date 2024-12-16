import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';

function App() {
    return <div className="app">no more hello worlds</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);