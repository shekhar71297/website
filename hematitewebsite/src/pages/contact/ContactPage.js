import React, { useContext, useEffect } from 'react';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { WebContext } from '../../App';
import BackToTop from '../../common/backTotop/BackToTop';
import NavigationBar from '../../common/navbar/NavigationBar';
import CustomBreadCrumb from '../../common/breadCrumb/CustomBreadCrumb';
import FooterPage from '../../common/footer/FooterPage';
import './contact.css';

function ContactPage() {
  const data = useContext(WebContext);

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <CustomBreadCrumb pageTitle='Contact Us' />
      <div className='contact-form'>
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
                    <p className='address'>{val.address}</p>
                  </div>
                  <div className='contact_info'>
                    <div className='icon-div'><IoMdMail className='contact-icon' /></div>
                    <span className='email'>{val.email}</span>
                  </div>
                  <div className='contact_info'>
                    <div className='icon-div'><FaPhone className='contact-icon' /></div>
                    <span className='phone'>{val.mobile}</span>
                  </div>
                </div>
              </Col>
            ))}
            <Col lg={8} md={12} sm={12}>
              <div className='contact-form-body'>
                <div className='contact-heading2'>
                  <span>Get In Touch</span>
                </div>
                <Form>
                  <Stack direction="horizontal" gap={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='form-label'>First Name</Form.Label>
                      <Form.Control className='form-input' type="text" placeholder="John" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='form-label'>Last Name</Form.Label>
                      <Form.Control className='form-input' type="text" placeholder="Doe" />
                    </Form.Group>
                  </Stack>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='form-label'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="subject" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='form-label'>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                  </Form.Group>
                  <Button size='sm' id="contact-btn" type="submit">
                    Send a message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        { data.contact && data.contact.map((val , index)=>(
          <div className="map-section" key={index}>
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
    </>
  );
}

export default ContactPage;
