import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Franchise from './pages/Franchise';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="body_wrap">
        <div className="page_wrap">
          <Header />
          <div className="page_content_wrap">
            <div className="content_wrap_fullscreen">
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/franchise" element={<Franchise />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
