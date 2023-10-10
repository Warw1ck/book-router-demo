import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home';
import { Books } from './pages/Books';
import { Layout } from './pages/Layout';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Layout/>
      
      <h1>
        Hello
      </h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' >
          <Route index element={<Books/>} />
          <Route path=':id' element={<Book/>} />
          <Route path='new' element={<NewBook/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
