import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import {Activities} from "./components/Activities.jsx";

import {Arch} from "./components/Arch.jsx";

const App = () => {
    const [mode,updateMode] = useState("all")


  return (
    <div className='container'>

        <Header setMode={mode=>updateMode(mode)}/>
        {mode === "all"?<Activities/>:<Arch/>}
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
