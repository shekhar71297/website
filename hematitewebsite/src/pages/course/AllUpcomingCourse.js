import React, { useContext, useEffect, useState } from "react";
import { Row, Card, Container, Col, Button, Form } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import NavigationBar from "../../common/navbar/NavigationBar";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import "./courses.css";
import CustomBreadcrumb from "../../common/breadCrumb/CustomBreadCrumb";
import FooterPage from "../../common/footer/FooterPage";
import IconBar from "../../common/IconBar/IconBar";
import { Post } from "../../services/HttpService";
import { urls } from "../../util/Constant";
import Toast from 'react-bootstrap/Toast';
import CourseStyle from "../../common/course/CourseStyle";


function AllUpcomingCourse() {
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
  console.log("filterd batch", filterBatch);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      mode: mode,
    }).then((response) => {
      console.log(response, "Email success");
      setShow(false)

      setVariant('success')
      setToastMessage('Registration Done successfully')
      setShowToast(true)
    }).catch((error) => {
      setShow(false)
      setVariant('danger')
      setToastMessage('Somethings went wrong')
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
      <IconBar />
      <NavigationBar />
      <BackToTop />
      <CustomBreadcrumb pageTitle='Upcoming Batches' />
      <Container className="allcoursemargintop">
        <Row>
          {filterBatch?.map((data, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4}>
            <CourseStyle
              course={data}
              onRegisterClick={handleShow}
              show={true}
            />
            <br />
          </Col>
          ))}
        </Row>
      </Container>
      <FooterPage />

      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title className="registration-heading" >Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Wrapping the form in a scrollable container */}
          <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '15px' }}>
            <Form onSubmit={EnrollData}>
              <Form.Group className="mb-3" controlId="formFname">
                <Form.Label className= "registration-label" >First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter first name"
                  isInvalid={!!errors.fname}
                  required
                />
                <Form.Text className="text-muted">
                  e.g., John.
                </Form.Text>
                <Form.Control.Feedback type="invalid">{errors.fname}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLname">
                <Form.Label className= "registration-label" >Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter last name"
                  isInvalid={!!errors.lname}
                  required
                />
                <Form.Text className="text-muted">
                  e.g., Doe.
                </Form.Text>
                <Form.Control.Feedback type="invalid">{errors.lname}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className= "registration-label" >Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter email"
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Text className="text-muted">
                  e.g., John@gmail.com.
                </Form.Text>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label className= "registration-label" >Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter mobile number"
                  isInvalid={!!errors.mobile}
                  required
                />
                <Form.Text className="text-muted">
                  e.g., 9999999999.
                </Form.Text>
                <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCourse">
                <Form.Label className= "registration-label" >Course</Form.Label>
                <Form.Control
                  as="select"
                  name="course"
                  value={course}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.course}
                  required
                >
                  <option value="">Select Course</option>
                  {filterBatch?.map((data, index) => (
                    <option key={index} value={data.title}>{data.title}</option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMode">
                <Form.Label className= "registration-label" >Training Mode</Form.Label>
                <Form.Control
                  as="select"
                  name="mode"
                  value={mode}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.mode}
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </Form.Control>
                
                <Form.Control.Feedback type="invalid">{errors.mode}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" disabled={isButtonDisabled}>
                Submit
              </Button>
            </Form>
          </div>
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

export default AllUpcomingCourse;
