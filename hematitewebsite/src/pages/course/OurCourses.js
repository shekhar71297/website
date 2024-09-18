import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, Card, Col, Container, Modal, Row, Toast } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import "./courses.css";
import '../../common/ScrollAnimation/scroll.css'
import { Post } from "../../services/HttpService";
import { urls } from "../../util/Constant";

function OurCourses() {
  const [show, setShow] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('');
  const [mode, setMode] = useState('');
  const [variant, setVariant] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    course: '',
    mode: ''
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const mobileRegex = /^[0-9]{10}$/;

  const data = useContext(WebContext);
  const filterBatch = data?.courses?.filter((data, index) => data.upcomingbatch === true
  );
  const nav = useNavigate();


  const navigateToAllCourse = () => {
    nav("/courses");
  };

  const navigateToUpcomingCourse = () => {
    nav("/batches");
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fname':
        setFname(value.trim());
        break;
      case 'lname':
        setLname(value.trim());
        break;
      case 'mobile':
        setMobile(value.trim());
        break;
      case 'course':
        setCourse(value);
        break;
      case 'email':
        setEmail(value.trim());
        break;
      case 'mode':
        setMode(value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (event) => {
    validateField(event.target.name);
  };

  useEffect(() => {
    // Check if all fields are filled and valid
    if (fname && lname && mobile && email && course && mode && !errors.fname && !errors.lname && !errors.email && !errors.mobile) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [fname, lname, mobile, email, course, mode, errors]);


  const validateField = (name) => {
    let error = '';
    switch (name) {
      case 'fname':
        if (/\s/.test(fname) || !nameRegex.test(fname)) {
          error = 'First Name is invalid or contains spaces.';
        }
        break;
      case 'lname':
        if (/\s/.test(lname) || !nameRegex.test(lname)) {
          error = 'Last Name is invalid or contains spaces.';
        }
        break;
      case 'course':
        if (course === '') {
          error = 'please select course.';
        }
        break;
      case 'mode':
        if (mode === '') {
          error = 'please select training mode.';
        }
        break;
      case 'email':
        if (/\s/.test(email) || !emailRegex.test(email)) {
          error = 'Email is invalid or contains spaces.';
        }
        break;
      case 'mobile':
        if (/\s/.test(mobile) || !mobileRegex.test(mobile)) {
          error = 'Mobile number is invalid or contains spaces.';
        }
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EnrollData = (event) => {
    event.preventDefault();
    // if (!validateField()) return;
    Post(urls.enrollNow, {
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      course: course,
      mode: mode
    }).then((response) => {
      console.log(response, "Email success");
      setShow(false)

      setVariant('success')
      setToastMessage('Enrollment Done successfully')
      setShowToast(true)
    }).catch((error) => {
      setShow(false)
      setVariant('danger')
      setToastMessage('Somethings went')
      setShowToast(true)
    });
    resetForm()



  }
  const resetForm = () => {
    setFname('');
    setLname('');
    setMobile('');
    setCourse('');
    setEmail('');
    setMode('');
    setErrors({
      fname: '',
      lname: '',
      email: '',
      mobile: ''
    });
  };



  return (
    <div>
      <BackToTop />
      {/* Our Courses in Home Page */}
      <div className="backgroundImgUrl">
        <Container>
          <Row>
            <Col>
              <h2 className="course-heading ">OUR COURSES</h2>
              <div className="upcoming-slider-body">
                <Slider {...settings}>
                  {slicedata &&
                    slicedata.length > 0 &&
                    slicedata.map((course, index) => (
                      <Card className="card-adjustment" key={index}>
                        <Card.Body>
                          <Card.Img src={course.cardimg} fluid />
                          <h6 className="course-duration-wrapper">
                            <MdLibraryBooks /> {course.month}
                          </h6>
                          <hr />
                          <div id="course-price" >
                            {course.price.discount ? (
                              <div className="course-discounted-price">
                                <span className="courseOfferPrice"><FaRupeeSign /> {course.price.offerprice}
                                </span>
                                <span>Original Price: <FaRupeeSign /><del>{course.price.originalprice}</del></span>
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
                          <h6 className="course-duration">

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


                          <Link to={`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <Button size='sm' type="button" variant="">
                              Know More <FaArrowRightLong />
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    ))}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <Button size='sm' className="viewmorebtn" onClick={navigateToAllCourse}>
                  View More <FaArrowRightLong />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Upcoming Courses in Home Page */}
      <div className="upcomingcourse-body   ">
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className="upcomingcourseheading">
                UPCOMING BATCHES
              </h1>
              <div className="upcoming-slider-body">
                <Slider {...settings}>
                  {sliceupcomingbatch &&
                    sliceupcomingbatch.length > 0 &&
                    sliceupcomingbatch.map((course, index) => (
                      <Card className="card-adjustment" key={index}>
                        <Card.Body>
                          <div className="registration-text">
                            Registration start from {course.registrationStart}
                          </div>
                          <hr />
                          <Card.Img src={course.cardimg} fluid />
                          <h6 className="course-duration-wrapper">
                            <MdLibraryBooks /> {course.month}
                          </h6>
                          <hr />
                          <div>
                            {course.price.discount ? (
                              <div className="course-discounted-price">
                                <span className="courseOfferPrice"><FaRupeeSign /> {course.price.offerprice}
                                </span>
                                <span>Original Price: <FaRupeeSign /><del>{course.price.originalprice}</del></span>
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
                          <h6 className="course-duration">
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
                          <Link to={`/course/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <Button size='sm' type="button" variant="">
                              Know More <FaArrowRightLong />
                            </Button>
                          </Link>
                          <Button type="button" className="registerBtn" variant="" onClick={handleShow} >
                            Enroll Now <FaArrowRightLong />
                          </Button>
                        </div>
                      </Card>
                    ))}
                </Slider>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  size='sm'
                  className="viewmorebtn"
                  onClick={navigateToUpcomingCourse}
                >
                  View More <FaArrowRightLong />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enrollment Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <section class="container">
            <form action="#" class="form" onSubmit={EnrollData}>
              <div class="column">
                <div class="input-box">
                  <label>First Name</label>
                  <input type="text" name="fname" value={fname} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter full name" required />
                  {!errors.fname && <small className="helper-text">Ex:john</small>}
                  {errors.fname && <small className="error" style={{ color: 'red' }} >{errors.fname}</small>}
                </div>
                <div class="input-box">
                  <label>Last Name</label>
                  <input type="text" name="lname" value={lname} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter full name" required />
                  {!errors.lname && <small className="helper-text">Ex:john</small>}
                  {errors.lname && <small className="error" style={{ color: 'red' }} >{errors.lname}</small>}
                </div>
              </div>
              <div class="input-box">
                <label>Email Address</label>
                <input type="text" name="email" value={email} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter email address" required />
                {!errors.email && <small className="helper-text">Ex:youremail@gmail.com</small>}
                {errors.email && <small className="error" style={{ color: 'red' }} >{errors.email}</small>}
              </div>

              <div class="input-box">
                <label>Phone Number</label>
                <input type="text" name="mobile" value={mobile} onChange={handleInputChange} onBlur={handleBlur} placeholder="Enter phone number" required />
                {!errors.mobile && <small className="helper-text">Ex:9999999999.</small>}
                {errors.mobile && <small className="error" style={{ color: 'red' }}>{errors.mobile}</small>}
              </div>
              <div class="column">




                <div class="select-box">
                  <select name="course" value={course} onChange={handleInputChange} >
                    <option hidden>Select course</option>
                    {filterBatch?.map((data, index) => (
                      <option key={index} value={data.title}>{data.title}</option>
                    ))}

                  </select>
                </div>
                <div class="select-box">
                  <select name="mode" value={mode} onChange={handleInputChange}  >
                    <option hidden>Mode of Training</option>
                    <option value='online'>Online</option>
                    <option value='offline'>Offline</option>
                  </select>
                </div>
              </div>
              <Button type="submit" disabled={isButtonDisabled} >Submit</Button>
            </form>
          </section>
        </Modal.Body>
      </Modal>
      <Toast
        className="d-inline-block m-1"
        bg={variant}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}
      >
        <Toast.Body className="text-white">{toastMessage}</Toast.Body>
      </Toast>
    </div>
  );
}

export default OurCourses;
