import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import ScrollTrigger from "react-scroll-trigger";
import NavigationBar from '../../common/navbar/NavigationBar'
import { WebContext } from '../../App';
import './home.css'
import { Link, useNavigate } from 'react-router-dom';
import CountUp from "react-countup";
import FooterPage from '../../common/footer/FooterPage';
import BackToTop from '../../common/backTotop/BackToTop';
import OurCourses from '../course/OurCourses';

function HomePage() {
  const data = useContext(WebContext);
  const [counterOn, setCounterOn] = useState(false);
  const nav = useNavigate()
  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  if (document.body.clientWidth > 315 && document.body.clientWidth < 500) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  }

  if (document.body.clientWidth > 501 && document.body.clientWidth < 750) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  }
  if (document.body.clientWidth > 751 && document.body.clientWidth < 780) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  }

  if (document.body.clientWidth > 781 && document.body.clientWidth < 1030) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
  }

  const navigateToContact =()=>{
    nav('/contact')
  }
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <div className='home-body' >
        <Container>
          {data?.HomePage?.map((val, index) => (
            <Row>
              <Col sm={6} md={6} >
                <div className='home-content'>
                  <p className='home-title' >{val.title}</p>
                  <div className='home-tagline' >
                    <span className='home-tagline1'>{val.tagline1}</span>
                    <span className='home-tagline2' >{val.tagline2}</span>
                    <span className='home-tagline2' >{val.tagline3}</span>
                  </div>
                  <div className="enroll-button">
                    <Button size='sm' className="btn" onClick={navigateToContact}>
                      ENROLL NOW
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} >
                <div className="home-banner-image">
                  <img
                    src={val.bannerImgurl}
                    alt="HomeImage"
                    className="home-image"
                  />
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
      {/*---------------------------------------------------about us section----------------------------------------*/}
      <Container>
        <div className='about-body'>
          {data?.homepageabout?.map((val, index) => (
            <Row>
              <Col md={6}>
                <div className="aboutus-image">
                  <img
                    src={val.aboutImageurl}
                    alt="homeaboutimage"
                    className="home-about-image"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className='about-section'>
                  <div>
                    <span className="pre-title">About</span>
                    <h3 className="about-title">{val.title}</h3>
                  </div>
                  <div className="description-wrapper">
                    <p className="description">{val.description1}</p>
                  </div>
                  <div className="description-wrapper">
                    <p className="description">{val.description2}</p>
                  </div>
                  <div className="aboutus-btn">
                   <Button size='sm' className="btn-about">KNOW MORE</Button> 
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
      {/*----------------------------------------------course section----------------------------------------------*/}
      <OurCourses />
      {/* -----------------------------------------------Slider-section-------------------------------------------- */}
      <div className='slider-section' >
        <Container>
          <Row>
            <Col>
            <p className="slider-container-main-heading">OUR PLACED STUDENTS</p>
              <div className="slider-container">
                <Slider {...settings}>
                  {data?.placedstudents?.map((src) => (
                    <div className="slider-image" key={src.id}>
                      <img
                        className="image"
                        src={`${src.img}`}
                        alt={`Slide ${src.id}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    
      {/*----------------------------------------------------couter bar---------------------------------------------*/}
      <div className='counter-section' >
        <Container>
          <Row>
            {data?.Counters?.map((counter, index) => (
              <Col sm={6} md={3} >
                <div className='counter-main-body'>
                  <Card className="counter-card" key={index}>
                    <Card.Body className="counter-card-body">
                      {counter.icon && (
                        <img
                          src={counter.icon}
                          className="counter-logo"
                          alt="icon"
                        />
                      )}
                      <Card.Title className="counter-title" >{counter.title}</Card.Title>
                      <Card.Text
                        className="counter-cardtext"
                        style={{ textAlign: "center" }}
                      >
                        <ScrollTrigger
                          onEnter={() => setCounterOn(true)}
                          onExit={() => setCounterOn(false)}
                        >
                          <div>
                            <p>
                              {counterOn && (
                                <CountUp
                                  start={0}
                                  end={counter.value}
                                  duration={2}
                                  delay={0}
                                />
                              )}
                              +
                            </p>
                          </div>
                        </ScrollTrigger>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <BackToTop />
      <FooterPage />
    </div>
  )
}

export default HomePage