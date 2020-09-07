import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './Routes/Landing';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Landing />
            </div>
        </BrowserRouter>
  );
}

export default App;
