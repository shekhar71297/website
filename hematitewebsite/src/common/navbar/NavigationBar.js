import React, { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { WebContext } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function NavigationBar() {
  const data = useContext(WebContext);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current path

  useEffect(() => {
    //------------------------------------Function to handle scroll events-------------------------------//
    const handleScroll = () => {
      let isTop;

      if (window.innerWidth >= 320 && window.innerWidth <= 768) {
        // Adjust the scroll threshold for widths between 376px and 768px
        isTop = window.scrollY < 0;  // Adjust this value as needed for this range
      } else {
        // Default behavior for other widths
        isTop = window.scrollY < 5;  // Adjust this value as needed for other ranges
      }

      // If scrolled beyond the threshold, set scrolled state to true
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    //----------------------------------Function to handle window resize events--------------------------//
    const handleResize = () => {
      // If window width is less than 992px, set scrolled state to true
      if (window.innerWidth < 992) {
        setScrolled(true);
      } else {
        // Otherwise, handle scroll normally
        handleScroll();
      }
    };

    //event listeners for scroll and resize events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check on mount to set scrolled state
    handleResize();

    // Clean up by removing event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        fixed='top'
        expand="lg"
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{backgroundColor: '#ffffff'}}
      >
        <div className='container'>
          {data?.logo?.map((val, index) =>
            <Navbar.Brand key={index}>
              <div>
                <Link to='/'>
                  <Image src={val.logoImgurl} alt={val.id} style={{ maxHeight: '55px', maxWidth: '180px' }} />
                </Link>
              </div>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-aut">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              <Link className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">About</Link>
              <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
              <Link className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`} to="/courses">Courses</Link>
              <Link className={`nav-link ${location.pathname === '/batches' ? 'active' : ''}`} to="/batches">Batches</Link>
              <Link className={`nav-link ${location.pathname === '/placement' ? 'active' : ''}`} to="/placement">Placement</Link>
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
