import React from 'react';
import './App.scss';
import { Navbar, Nav } from 'react-bootstrap';
import HomeScreen from './HomeScreen';
import ContactScreen from './contactscreen';
import SigninScreen from './signin';
import NewsScreen from './NewsScreens';
import AboutScreen from './AboutScreen';
import Productinfo from './NewsletterInfo';
import { HashRouter as Router, Route, Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand className="custom-brand" href="/">AJ Newsletter</Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
          <Nav className="custom-nav mr-auto">
  <Link to="/" className="custom-link">Home</Link>
  <Link to="/news" className="custom-link">News</Link>
  <Link to="/about" className="custom-link">About</Link>
  <Link to="/contact" className="custom-link">Account</Link>
</Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
  <Route path="/" element={<HomeScreen />} />
  <Route path="/contact" element={<ContactScreen />} />
  <Route path="/signin" element={<SigninScreen />} />
  <Route path="/news" element={<NewsScreen />} />
  <Route path="/about" element={<AboutScreen />} />
  <Route path="/newsletterinfo/:slug" element={<Productinfo />} />
</Routes>


        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h4>About Us</h4>
              <p>Ayaan is the best he created this all he really is the best ever</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled contact-info">
                <li>
                  <i className="fa fa-map-marker"></i> 123 Street
                </li>
                <li>
                  <i className="fa fa-phone"></i> 00000000000
                </li>
                <li>
                  <i className="fa fa-envelope"></i> info@example.com
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
          
            </div>
          </div>
        </div>
      </footer>
      </Router>
    </div>
  );
}
export default App;