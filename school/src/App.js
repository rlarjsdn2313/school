import React, { useState } from 'react'
import Login from './Components/Login'
import Articles from './Components/Articles'
import './CSS/App.css'

function App() {
  const [check, setCheck] = useState('nothing')
  
  if (check === 'default') {
    return (
      <div className="App">
        <Articles></Articles>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Login setCheck={ setCheck }></Login>
      </div>
    );
  }

}

export default App;
