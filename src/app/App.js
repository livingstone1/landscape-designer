import React from 'react';
import './App.scss';
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Editor} from "../components/editor/Editor";

function App() {
    return (
        <div className="main-page">
            <Header/>
            <br/>
            <br/>
            <br/>
            <Editor/>
            <Footer/>
        </div>
    );
}

export default App;
