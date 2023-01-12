import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from './components/main/Main';
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
