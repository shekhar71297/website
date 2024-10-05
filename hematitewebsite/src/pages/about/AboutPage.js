import React, { useContext, useEffect } from "react";
import BackToTop from "../../common/backTotop/BackToTop"
import NavigationBar from "../../common/navbar/NavigationBar";
import CustomBreadcrumb from "../../common/breadCrumb/CustomBreadCrumb"
import { WebContext } from "../../App";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Slider from "react-slick";
import "./AboutUs.css"
import FooterPage from "../../common/footer/FooterPage";
import IconBar from "../../common/IconBar/IconBar";
import reveal from "../../common/ScrollAnimation/reveal";


function AboutPage() {
  const data = useContext(WebContext);
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      }
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // }
    ],
  };

  const navigate = useNavigate();
  const navigateToCourses = () => {
    navigate("/courses");
  };
  useEffect(() => {
    reveal()
  }, [])

  return (
    <>
      <IconBar />
      <BackToTop />
      <NavigationBar />
      <CustomBreadcrumb pageTitle="About us" />

      {/* ---------------------------------------- About Section ------------------------------ */}

      <div className="aboutUsContainer ">
        <Container >
          <Row>
            <Col sm={12} lg={6} >
              {data?.aboutUsImages?.map((data, index) => (
                <div className="aboutUsImage"  key={index} >
                  <img
                    src={data.imageUrl}
                    alt="img1"
                    className="aboutimg"
                  />

                </div>
              ))}
            </Col>

            <Col sm={12} lg={6}>
              {data?.aboutPage?.map((data, index) => (
                <div className="aboutUsContent" key={index}>

                  {/* <span className="aboutUsHeading">{data.heading1}</span> */}
                  {/* <p className="aboutUsHeading">{data.heading1}</p> */}
                  <p className="aboutUspara">{data.description[0]}</p>
                  <p className="aboutUspara">{data.description[1]}</p>

                  {/* <p className="aboutUsSubheading">People Love To Learn With Us</p> */}
                  <div className="aboutUsBtnDiv">
                    <Button
                      size="sm"
                      className="aboutUsBtn" variant=""
                      onClick={navigateToCourses}
                    >
                      Get Started <FaArrowRightLong />
                    </Button>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      {/*  ----------------------------- Mission, Purpose, Values Section -------------------------- */}

      <div className="mission_Container ">
        <Container >
          {data?.aboutUsHeadings?.map((data, index) => (
            <div key={index}>
              <p className="mission_heading"  >{data.heading2}</p>
            </div>
          ))}
          <Row>
            {data?.aboutAimDetails?.map((data, index) => (
              <Col lg={4} md={6}>
                <div
                  className="mission_card"
                  style={{ backgroundColor: `${data.bgcolour}` }}
                  key={index}
                >
                  <div className="inner">
                    <div >
                      <img
                        className="about_icon"
                        src={data.iconImg}
                        alt="iconImg1"

                      />
                    </div>
                    <div className="text_Content">
                      <span className="mission_subheading">{data.title}</span>
                      <p className="mission-description">{data.description}</p>
                    </div>
                  </div>
                </div>
                {/* ))} */}
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* ---------------------------------Event Section -------------------------------- */}

      {/* <div className="bgImage  reveal fade-bottom ">
        <Container className="event_Container">
          <Row>
            <Col sm={12} lg={6}>
              <div className="event_Column">
                <div className="about_event">
                  <span className="event_heading">EVENTS</span>
                  {data?.aboutUsHeadings?.map((data, index) => (
                    <p className="event_subheading">{data.heading3}</p>
                  ))}
                  <div>
                    <Button
                      className="about_eventBtn"
                      variant=""
                      // onClick={navigateToCourses}
                      size="sm"
                    >
                      More Upcoming Events
                      <FaArrowRightLong />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              {data?.aboutUsImages?.map((data, index) => (
                <div className="eventImage">
                  <img
                    src={data.eventImgUrl}
                    alt="img_Event"
                    className="w-100"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              ))}
            </Col>
          </Row>

        </Container>
      </div> */}

      {/* ---------------------------------- Infrastructure Section ---------------------------  */}
      <Container>
        <div className="infrastructure_Container  ">

          {data?.aboutUsHeadings?.map((data, index) => (
            <div>
              <p className="infrastructure_heading" key={index} >{data.heading5}</p>
            </div>
          ))}
          <div className="image_Carousel">
            <Slider {...settings}>
              {data?.infrastructure?.map((data, index) => (
                <div>
                  <div className="infrastructure_Images"  key={index}>
                    <img
                      src={data.imageUrl}
                      alt="aboutimage"
                      className="about-img"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </Container>

      {/* ----------------------- Feedback Section --------------------------------  */}

      <div className="about_feedback  ">
        <Container>
          <div>
            <h3 className="feedback_heading">Our Lovely Students Feedback</h3>
          </div>
          <div className="feedback-slider-container">
            <Slider {...settings}>
              {data?.feedback?.map((about, index) => (
                <div>
                  <Card className="card-container" key={index}>
                    <Card.Body>
                      <div className="sk_google_reviews_slider">
                        <Image
                          src="images/aboutus/profile.png"
                          roundedCircle
                          className="sk-review-image"
                        />
                      </div>
                      <h3 id="name-content">{about.name}</h3>
                      {/* <div className="star-icons">
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                        <i
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                      </div> */}

                      <div className="feedback-content-container">
                        <p className="feedback-content">{about.comment}</p>

                      </div>
                      <div className="sk-google-review-button-container">
                        <a
                          className="sk-google-review-button-more"
                          href="https://maps.app.goo.gl/eokdxntv3UPGqio29"
                        >
                          <FaGoogle className="google-icon" size={20} />
                        </a>
                        <Card.Link href={about.googleLink} target="blank" >
                          View On Google
                        </Card.Link>
                      </div>
                      <div className="image-container">
                        <Image src={about.image} fluid />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
      <FooterPage />
    </>
  )
}

export default AboutPage;