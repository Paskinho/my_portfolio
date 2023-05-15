import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Main} from '../components/main/Main';
import {Skills} from "../components/skills/Skills";
import {Contacts} from "../components/contacts/Contacts";
import {Footer} from "../components/footer/Footer";
import {Projects} from "../components/projects/Projects";
import {useAppDispatch, useAppSelector} from "./hooks";
import {appActions} from "./app.slice";


function App() {

   const isLoading = useAppSelector((state) => state.app.isLoading)

    const dispatch = useAppDispatch();

   useEffect(()=> {
       // dispatch(appActions)
   },[])


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
