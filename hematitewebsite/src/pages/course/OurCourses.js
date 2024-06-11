import React, { useContext } from "react";
import Slider from "react-slick";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import {FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../common/navbar/NavigationBar";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import "./courses.css";

function OurCourses() {
  const data = useContext(WebContext);
  const nav = useNavigate();

  
  const navigateToAllCourse = () => {
    nav("/allcourse");
  };

  const navigateToUpcomingCourse = () => {
    nav("/upcomingcourse");
  };


  const slicedata = data?.courses?.slice(0, 6);
  const sliceupcomingbatch = data?.courses
    ?.filter((course) => course.upcomingbatch)
    .slice(0, 3);

  const settings = {
    dots: true,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
         <NavigationBar />
      <BackToTop />
      {/* Our Courses in Home Page */}
      <div className="backgroundImgUrl allcoursemargintop">
        <Container>
          <Row>
            <Col>
              <h2 className="course-heading coursetopmargin">OUR COURSES</h2>
              <div className="coursetopmargin">
                <Slider {...settings}>
                  {slicedata &&
                    slicedata.length > 0 &&
                    slicedata.map((course, index) => (
                      <Card className="card-adjustment" key={index}>
                        <Card.Body>
                          <Card.Img src={course.cardimg} fluid />
                          <h6 className="coursetextfontsize">
                            <MdLibraryBooks /> {course.month}
                          </h6>
                          <hr />
                          <div>
                            {course.price.discount ? (
                              <div className="price-wrapper">
                                <span className="courseOfferPrice">
                                  <FaRupeeSign /> {course.price.offerprice}
                                </span>
                                <b className="coursePriceHeading">
                                  Original Price:
                                </b>
                                <span className="courseOriginalPrice">
                                  <FaRupeeSign /> {course.price.originalprice}
                                </span>
                              </div>
                            ) : (
                              <span className="courseOfferPrice">
                                <FaRupeeSign /> {course.price.originalprice}
                              </span>
                            )}
                          </div>
                        </Card.Body>
                        <div className="applyinghover">
                          <Card.Title className="text-alignment">
                           
                            {course.title}
                          </Card.Title>
                          <br />
                          <h6 className="coursetextfontsize">
                          
                            <MdLibraryBooks /> {course.month}
                          </h6>
                          <br />
                          <div>
                            {course?.price?.discount && (
                              <div>
                                <span className="hovercourseOfferPrice">
                                  <FaRupeeSign />
                                  {course?.price?.offerprice}
                                </span>

                                <b
                                  className="hovercoursePriceHeading"
                                 
                                >
                                  Original Price
                                </b>
                                <span
                                  className="hovercourseOriginalPrice"
                                  
                                >
                                  
                                  <FaRupeeSign />
                                  {course?.price?.originalprice}
                                </span>
                              </div>
                            )}
                            {!course?.price?.discount && (
                              <span className="hovercourseOfferPrice">
                                <FaRupeeSign />
                                {course?.price?.originalprice}
                              </span>
                            )}
                          </div>
                          <br />
                          {/* <Button
                    className="buttonscreen"
                    variant=""
                    style={{ width: "210px", height: "40px" }}
                    type="submit"
                  >
                    Join Our Telegram Group
                  </Button> */}
                          <br />
                          <Link
                            to={`/coursedetail/${course?.id}`}
                          >
                            <Button type="button" variant="">
                              Know More <FaArrowRightLong />
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    ))}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="viewmorebtn" onClick={navigateToAllCourse}>
                  View More <FaArrowRightLong />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Upcoming Courses in Home Page */}
      <div className="upcomingcourse-padding">
      <Container>
        <Row>
          <Col lg='12'>
            <h1 className="upcomingcourseheading coursetopmargin">
              UPCOMING BATCHES
            </h1>
            <div className="coursetopmargin">
              <Slider {...settings}>
                {sliceupcomingbatch &&
                  sliceupcomingbatch.length > 0 &&
                  sliceupcomingbatch.map((course, index) => (
                    <Card className="card-adjustment" key={index}>
                      <Card.Body>
                        <div className="registration-text">
                          Registration Start From 01-05-2024 to 15-05-2024
                        </div>
                        <hr />
                        <Card.Img src={course.cardimg} fluid />
                        <h6 className="coursetextfontsize">
                          <MdLibraryBooks /> {course.month}
                        </h6>
                        <hr />
                        <div>
                          {course.price.discount ? (
                            <div className="price-wrapper">
                              <span className="courseOfferPrice">
                                <FaRupeeSign /> {course.price.offerprice}
                              </span>
                              <b className="coursePriceHeading">
                                Original Price
                              </b>
                              <span className="courseOriginalPrice">
                                <FaRupeeSign /> {course.price.originalprice}
                              </span>
                            </div>
                          ) : (
                            <div className="price-wrapper">
                              <span className="courseOfferPrice">
                                <FaRupeeSign /> {course.price.originalprice}
                              </span>
                            </div>
                          )}
                        </div>
                      </Card.Body>
                      <div className="applyinghover">
                        <Card.Title className="text-alignment">
                          {course.title}
                        </Card.Title>
                        <br />
                        <h6 className="coursetextfontsize">
                          <MdLibraryBooks /> {course.month}
                        </h6>
                        <br />
                        <div>
                          {course.price.discount && (
                            <div>
                              <span className="hovercourseOfferPrice">
                                <FaRupeeSign />
                                {course.price.offerprice}
                              </span>

                              <b
                                className="hovercoursePriceHeading"
                               
                              >
                                Original Price
                              </b>
                              <span
                                className="hovercourseOriginalPrice"
                               
                              >
                                <FaRupeeSign />
                                {course.price.originalprice}
                              </span>
                            </div>
                          )}
                          {!course.price.discount && (
                            <span className="hovercourseOfferPrice">
                              <FaRupeeSign />
                              {course.price.originalprice}
                            </span>
                          )}
                        </div>
                        <br />
                        {/* <Button
                   className="buttonscreen"
                   variant=""
                   style={{ width: "210px", height: "40px" }}
                   type="submit"
                 >
                   Join Our Telegram Group
                 </Button> */}
                        <br />
                        <Link
                          to={`/coursedetail/${course?.id}`}
                          
                        >
                          <Button type="button" variant="">
                            Know More <FaArrowRightLong />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
              </Slider>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="viewmorebtn"
                onClick={navigateToUpcomingCourse}
              >
                View All Courses <FaArrowRightLong />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

        </div>
     
    </div>
  );
}

export default OurCourses;
