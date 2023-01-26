import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from './components/main/Main';
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {Projects} from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
