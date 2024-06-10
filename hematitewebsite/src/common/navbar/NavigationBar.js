import React, { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, NavDropdown } from 'react-bootstrap';
import { FaAngleDown } from "react-icons/fa";
import { WebContext } from '../../App';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {

  const data = useContext(WebContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    //------------------------------------Function to handle scroll events-------------------------------//
    const handleScroll = () => {
      let isTop;

      if (window.innerWidth >= 375 && window.innerWidth <= 768) {
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

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <Navbar
        fixed='top'
        expand="lg"
        className={`navbar p-3 ${scrolled ? 'scrolled' : ''}`}
      >
        <div className='container'>
          {data?.logo?.map((val, index) =>
            <Navbar.Brand >
              <Link to='/' >
              <Image src={val.logoImgurl} alt={val.id} style={{ maxHeight: '30px', maxWidth: '150px' }} />
              </Link>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-aut">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About</Link>
              <Link className='nav-link' to="/service">Services</Link>
              <NavDropdown
                title={
                  <span>
                    Course <FaAngleDown />
                  </span>
                }
                className="custom-dropdown"
                show={showDropdown}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link className='nav-dropdown-item dropdown-item' to="/allcourse">Courses</Link>
                <Link className='nav-dropdown-item dropdown-item' to="/upcomingcourse">Upcoming Batches</Link>
              </NavDropdown>
              <Link className='nav-link' to="/placement">Placement</Link>
              <Link className='nav-link' to="/contact">Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
