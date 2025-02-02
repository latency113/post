import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Post from './pages/Post'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App