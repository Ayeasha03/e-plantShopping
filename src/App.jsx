import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductList from './ProductList'
import AboutUs from './AboutUs'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Landing Page Route */}
          <Route
            path="/"
            element={
              <div className="landing-page">
                <div className="background-image"></div>
                <div className="content">
                  <div className="landing_content">
                    <h1>Welcome To Paradise Nursery</h1>
                    <div className="divider"></div>
                    <p>Where Green Meets Serenity</p>

                    {/* Link to Products Page */}
                    <Link to="/products">
                      <button className="get-started-button">
                        Get Started
                      </button>
                    </Link>
                  </div>
                  <div className="aboutus_container">
                    <AboutUs />
                  </div>
                </div>
              </div>
            }
          />

          {/* Product Listing Route */}
          <Route
            path="/products"
            element={<ProductList />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
