import React, { useState } from 'react'
import Login from './Components/Login'
import Article from './Components/Article'

function App() {
  const [check, setCheck] = useState('nothing')
  
  if (check == 'default') {
    return (
      <div className="App">
        <Article no="2" password="hello"></Article>
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
