import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate replace to="/article"/>} />
        <Route path="/about" element={<h1>ABOUT</h1>} />
        <Route path="/article" element={<HomePage/>} />
        <Route path="/article/:id" element={<ArticlePage/>} />
        <Route path="/article/404" element={<NotFoundPage/>} />
        <Route path="/404" element={<NotFoundPage/>} />
        <Route path="*" element={<Navigate to="/404"/>} />

      </Routes>
    </Router>
  )
}

export default App
