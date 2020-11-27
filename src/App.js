import React from "react";
import "./styles.css";
import Home from './containers/Home/Home';

export default function App() {
    return (
        <main className="App">
            <h1 className="header-name">Shop at your Beer Store</h1>
            <Home />
        </main>
    );
}
