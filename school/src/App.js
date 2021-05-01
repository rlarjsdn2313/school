import React, { useState } from 'react'
import Login from './Components/Login'

function App() {
  const [check, setCheck] = useState('nothing')
  return (
    <div className="App">
      <Login setCheck={ setCheck }></Login>
      { check }
    </div>
  );
}

export default App;
