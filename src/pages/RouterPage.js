import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </Router>
  )
}
