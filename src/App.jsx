import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import {AllCalls} from "./components/AllCalls.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Arch} from "./components/Arch.jsx";

const App = () => {
    const [mode,updateMode] = useState("all")


  return (
    <div className='container'>
        <Header/>
        <Navigation setMode={mode=>updateMode(mode)}/>
        {mode === "all"?<AllCalls/>:<Arch/>}
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
