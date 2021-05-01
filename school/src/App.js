import React, { useState } from 'react'
import Login from './Components/Login'

function App() {
  const [check, setCheck] = useState('nothing')
  console.log(check)
  
  if (check == 'default') {
    return (
      <div className="App">
        hello
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
