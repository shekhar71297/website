import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import './contact.css'
import { WebContext } from '../../App';
import BackToTop from '../../common/backTotop/BackToTop';
import NavigationBar from '../../common/navbar/NavigationBar';
import CustomBreadCrumb from '../../common/breadCrumb/CustomBreadCrumb';
import FooterPage from '../../common/footer/FooterPage';

function ContactPage() {
  const data = useContext(WebContext);

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <CustomBreadCrumb pageTitle='Contact Us' />
      <div className='contact-form' >
        <Container>
          <Row>
            <Col lg={4} md={12} sm={12}>

              <div className='contact-body' >
                <div className='contact-heading'>
                  <span>Contact Us</span>
                </div>
                <div className='contact_info'>
                  <div className='icon-div'><FaLocationDot className='contact-icon' /></div>
                  <p className='address' >2nd Floor, Mathura Nagar Housing Society, Near Janseva Sahakari Bank Chandan Nagar, Kharadi, Pune - 411014.</p>
                </div>
                <div className='contact_info' >
                  <div className='icon-div' ><IoMdMail className='contact-icon' /></div>
                  <span className='email'  >contact@hematitecorp.com</span>
                </div>
                <div className='contact_info' >
                  <div className='icon-div' ><FaPhone className='contact-icon' /></div>
                  <span className='phone'  >8263926309 / 8208683698 / 8999639478</span>
                </div>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <div className='contact-form-body'>
                <div className='contact-heading2'>
                  <span>Get In Touch</span>
                </div>

                <Form>
                  <Stack direction="horizontal" gap={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='form-label' >First Name</Form.Label>
                      <Form.Control className='form-input' type="text" placeholder="Jhon" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='form-label' >Last Name</Form.Label>
                      <Form.Control className='form-input' type="text" placeholder="Doe" />
                    </Form.Group>
                  </Stack>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='form-label' >Subject</Form.Label>
                    <Form.Control type="text" placeholder="subject" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='form-label' >Message</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                  </Form.Group>
                  <Button size='sm' id="contact-btn" type="submit" className="btn btn-lg mb-0">
                    Send a message
                  </Button>
                </Form>

              </div>

            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.700402408061!2d-73.93801658549696!3d40.66450937933627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19619db66b%3A0xb129f37d68f7cc38!2s1477%20Bedford%20Ave%2C%20Brooklyn%2C%20NY%2011216!5e0!3m2!1sen!2sus!4v1622148017013!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
      <FooterPage />
    </>
  )
}

export default ContactPage