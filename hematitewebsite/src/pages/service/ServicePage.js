import React, { useContext, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { WebContext } from '../../App';
import NavigationBar from '../../common/navbar/NavigationBar';
import BackToTop from '../../common/backTotop/BackToTop';
import FooterPage from '../../common/footer/FooterPage';
import './service.css'
import CustomBreadCrumb from '../../common/breadCrumb/CustomBreadCrumb';
import reveal from '../../common/ScrollAnimation/reveal';

function ServicePage() {
  const data = useContext(WebContext);
  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);
  const getServiceIcon = (iconUrl) => {
    // If an icon URL is provided, return an img element with the icon
    if (iconUrl) {
      return <img src={iconUrl} alt="service icon" className="logo" />;
    }
    return null;
  };

  useEffect(()=>{
    reveal()
  },[])
  return (
    <div>
      <NavigationBar/>
      <BackToTop/>
      <CustomBreadCrumb pageTitle='Services'/>
      <Container>
        <div className="service-container reveal fade-bottom ">
          <div className="heading2">
            <span className="service-heading-title">What We Provide</span>
          </div>
          <Row>
            {data?.services?.map((service, index) => (
              <Col lg={4} md={12} sm={12}>
                <div className="card-container">


                  <Card className="main-card" key={index}>
                    <Card.Body>

                      <div className='serviceicon'>
                        {getServiceIcon(service.iconUrl)}
                      </div>
                      <Card.Title className="service-title">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="cardtext">
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
<FooterPage/>

    </div>
  )
}

export default ServicePage
