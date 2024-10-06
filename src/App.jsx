import React from 'react'
import Nav from './components/Navbar/Nav'
import Hoe from './components/Home/Hoe'
import Compo from './components/compo/Compo'
import Fun from './components/Fun/Fun'
import Chatbox from './components/Chatbox/Chatbox'

const App = () => {
  return (
    <div className='app'>
    <Nav/>
    <Hoe/>
    <Compo/>
    <Fun/>
    <Chatbox/>
    </div>
  )
}

export default App

