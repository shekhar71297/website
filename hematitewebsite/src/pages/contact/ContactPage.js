import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { WebContext } from '../../App';
import Modal from 'react-bootstrap/Modal';
import BackToTop from '../../common/backTotop/BackToTop';
import NavigationBar from '../../common/navbar/NavigationBar';
import CustomBreadCrumb from '../../common/breadCrumb/CustomBreadCrumb';
import FooterPage from '../../common/footer/FooterPage';
import './contact.css';
import { Post } from '../../services/HttpService';
import { urls } from '../../util/Constant';
import IconBar from '../../common/IconBar/IconBar';

function ContactPage() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: ''
  });

  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const mobileRegex = /^[0-9]{10}$/;

  const data = useContext(WebContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (modalShow) {
      const timer = setTimeout(() => {
        setModalShow(false);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or modalShow changes
    }
  }, [modalShow]);




  useEffect(() => {
    // Check if all fields are filled and valid
    if (fname && lname && mobile && email && message && !errors.fname && !errors.lname && !errors.email && !errors.mobile) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [fname, lname, mobile, email, message, errors]);

  if (!data) {
    return <div>Loading data...</div>;
  }

  const handleChange = (event) => {
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
      case 'message':
        setMessage(value);
        break;
      case 'email':
        setEmail(value.trim());
        break;
      default:
        break;
    }
  };

  const handleBlur = (event) => {
    validateField(event.target.name);
  };


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

  const validateForm = () => {
    let isValid = true;
    Object.keys(errors).forEach(key => {
      if (errors[key]) {
        isValid = false;
      }
    });
    if (/\s/.test(fname) || !nameRegex.test(fname)) {
      setErrors(prevErrors => ({ ...prevErrors, fname: 'First Name is invalid or contains spaces.' }));
      isValid = false;
    }
    if (/\s/.test(lname) || !nameRegex.test(lname)) {
      setErrors(prevErrors => ({ ...prevErrors, lname: 'Last Name is invalid or contains spaces.' }));
      isValid = false;
    }
    if (/\s/.test(email) || !emailRegex.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Email is invalid or contains spaces.' }));
      isValid = false;
    }
    if (/\s/.test(mobile) || !mobileRegex.test(mobile)) {
      setErrors(prevErrors => ({ ...prevErrors, mobile: 'Mobile number is invalid or contains spaces.' }));
      isValid = false;
    }
    return isValid;
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="mb"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title || "Default Title"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.message || "Default message"}
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  // const emailId = email;

  const SentData = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    Post(urls.sendEnquiry, {
      fname:fname,
      lname:lname,
      email:email,
      mobile:mobile,
      message: message,
      status:''
    }).then((response) => {
      setAlertTitle('Email Sent Successfully');
      setAlertMessage('Thank you for your enquiry. We will get back to you shortly.');
      setModalShow(true);
      // console.log(response, "Email success");
    }).catch((error) => {
      setAlertTitle("Email Not Sent");
      setAlertMessage('There was an issue sending your email. Please try again later.');
      setModalShow(true);
      // console.error('Error sending email:', error);
    });
    resetForm();
  };

  const resetForm = () => {
    setFname('');
    setLname('');
    setMobile('');
    setMessage('');
    setEmail('');
    setErrors({
      fname: '',
      lname: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <IconBar />
      <CustomBreadCrumb pageTitle='Contact Us' />
      <div className='contact-form '>
        <Container>
          <Row>
            {data.contact && data.contact.map((val, index) => (
              <Col lg={4} md={12} sm={12} key={index}>
                <div className='contact-body'>
                  <div className='contact-heading'>
                    <span>Contact Us</span>
                  </div>
                  <div className='contact_info'>
                    <div className='icon-div'><FaLocationDot className='contact-icon' /></div>
                    <div className='content-div' >
                      <p className='address'>{val.address}</p>
                    </div>
                  </div>
                  <div className='contact_info'>
                    <div className='icon-div'><IoMdMail className='contact-icon' /></div>
                    <div className='content-div' >
                      <span className='email'>{val.email}</span>
                    </div>
                  </div>
                  <div className='contact_info'>
                    <div className='icon-div'><FaPhone className='contact-icon' /></div>
                    <div className='content-div' >
                      <span className='phone'>{val.mobile}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <Col lg={8} md={12} sm={12}>
              <div className='contact-form-body'>
                <div className='contact-heading2'>
                  <span>Get In Touch</span>
                </div>
                <Form noValidate onSubmit={SentData}>
                  <Stack direction="horizontal" gap={4}>
                    <Form.Group className="mb-3" controlId="formFname">
                      <Form.Label className='form-label'>First Name</Form.Label>
                      <div className='form-group-wrapper'>
                        <Form.Control
                          className='form-input'
                          name='fname'
                          value={fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Enter first name"
                          isInvalid={!!errors.fname}
                        />
                        {!errors.fname && (
                          <Form.Text className="text-muted">
                            e.g., Jhon
                          </Form.Text>
                        )}
                        <Form.Control.Feedback type="invalid">
                          {errors.fname}
                        </Form.Control.Feedback>

                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLname">
                      <Form.Label className='form-label'>Last Name</Form.Label>
                      <div className='form-group-wrapper'>
                        <Form.Control
                          className='form-input'
                          name='lname'
                          value={lname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Enter last name"
                          isInvalid={!!errors.lname}
                        />
                        {!errors.lname && (
                          <Form.Text className="text-muted">
                            e.g., Doe
                          </Form.Text>
                        )}
                        <Form.Control.Feedback type="invalid">
                          {errors.lname}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Stack>
                  <Stack direction="horizontal" gap={4}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className='form-label'>Email Address</Form.Label>
                      <div className='form-group-wrapper'>
                        <Form.Control
                          className='form-input'
                          name='email'
                          value={email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Enter email id"
                          isInvalid={!!errors.email}
                        />
                        {!errors.email && (
                          <Form.Text className="text-muted">
                           e.g., name@gmail.com
                          </Form.Text>
                        )}
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMobile">
                      <Form.Label className='form-label'>Mobile No</Form.Label>
                      <div className='form-group-wrapper'>
                        <Form.Control
                          className='form-input'
                          name='mobile'
                          value={mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Enter mobile no"
                          isInvalid={!!errors.mobile}
                        />
                        {!errors.mobile && (
                          <Form.Text className="text-muted">
                            e.g., 9999999999
                          </Form.Text>
                        )}
                        <Form.Control.Feedback type="invalid">
                          {errors.mobile}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Stack>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label className='form-label'>Message</Form.Label>
                    <Form.Control
                      name='message'
                      value={message}
                      onChange={handleChange}
                      as="textarea"
                      rows={4}
                    />
                  </Form.Group>
                  <Button className='contact-btn' size='sm' disabled={isButtonDisabled} type="submit">
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={alertTitle}
        message={alertMessage}
      />
      <Container>
        {data.contact && data.contact.map((val, index) => (
          <div className="map-section " key={index}>
            <iframe
              title="Google Map"
              src={val.maplink}
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </Container>
      <FooterPage />
      {/* Snackbar for validation messages */}
    </>
  );
}

export default ContactPage;
