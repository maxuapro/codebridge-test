// import React from 'react'

import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<h1>ABOUT</h1>} />
        <Route path="/article/:id" element={<ArticlePage/>} />

      </Routes>
    </Router>
  )
}

export default App
