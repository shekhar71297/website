import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import NavigationBar from "../../common/navbar/NavigationBar";
import CustomBreadcrumb from "../../common/breadCrumb/CustomBreadCrumb"
// import Footer from '../courses/Footer';
import { Breadcrumb } from 'react-bootstrap';
import BackToTop from "../../common/backTotop/BackToTop"
import { WebContext } from '../../App';
import "./placement.css"
function PlacementPage() {
  const data = useContext(WebContext);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <>
      <BackToTop />
      <NavigationBar />
      <CustomBreadcrumb pageTitle='Placements' />

      <div className='placement_Description_Container'>
        <Container>
          {data?.placementcontent?.map((val, index) =>
            <div className='placement_Row'>
              <Row>
                {index % 2 === 0 ? (
                  // When index is 1, render the image on the left side
                  <>
                    {/* <div className='image_Col'> */}
                    <Col lg={6} className='firstColumn'>
                      <div className='images'>
                        <img src={val.img} alt='placement' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '5px' }} />
                      </div>
                    </Col>
                    {/* </div> */}
                    {/* <div className='placementDescripCol'> */}
                    <Col lg={6} className='secondColumn'>
                      <div className='placementDescripCol'>
                        <p className='paragraph'>{val.placementDescription[0]}</p>
                        <p className='paragraph'>{val.placementDescription[1]}</p>
                      </div>
                    </Col>
                    {/* </div> */}
                  </>
                ) : (
                  // When index is 0 or any other number, render the image on the right side
                  <>
                    {/* <div className='placementDescripCol'> */}
                    <Col lg={6} className='secondColumn'>
                      <div className='placementDescripCol'>
                        <p className='paragraph'>{val.placementDescription[0]}</p>
                        <p className='paragraph'>{val.placementDescription[1]}</p>
                      </div>
                    </Col>
                    {/* </div> */}
                    {/* <div className='image_Col'> */}
                    <Col lg={6} className='firstColumn'>
                      <div className='images'>
                        <img src={val.img} alt='placement' style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '5px' }} />
                      </div>
                    </Col>
                    {/* </div> */}
                  </>
                )}
              </Row>
            </div>
          )}

        </Container>
      </div>

      <div className="bgcontainer1">
        <Container >
          <h2 className='highlightHeading'>Placement Highlights</h2>
          <div className="bgcontainer2">
            <Container>
              <Row style={{ margin: 'auto' }}>
                {data?.placementHighlightCounter?.map((data, index) => (
                  <>
                    <Col lg={4} md={4} sm={6}>
                      <div className='align_center_div'>
                        <img src='https://firstbitsolutions.com/public/assets/frontend/images/icons/icons8-business-building-50.png' alt='img1' />
                        <h2 className='placementCounter'>{data.companyVisited}</h2>
                        <span className='counterDescription'>COMPANIES VISITED</span>
                      </div>
                    </Col>
                    <Col lg={4} md={4}  sm={6}>
                      <div className='align_center_div'>
                        <img src='	https://firstbitsolutions.com/public/assets/frontend/images/bg/icons8-group-of-companies-50.png' alt='img1' />
                        <h2 className='placementCounter'>{data.noCriteriaCompanies}</h2>
                        <span className='counterDescription'>NO CRITERIA COMPANIES</span>
                      </div>
                    </Col>
                    <Col lg={4} md={4}  sm={6}>
                      <div className='align__center_div'>
                        <img src='	https://firstbitsolutions.com/public/assets/frontend/images/icons/icons8-calling-50.png' alt='img1' />
                        <h2 className='placementCounter'>{data.calls}</h2>
                        <span className='counterDescription'>MAXIMUM CALLS WERE GIVEN</span>
                      </div>
                    </Col>
                  </>
                ))}
              </Row>
            </Container>
          </div>
        </Container>
      </div>


      <Container>
        <div className="bgimg">
          <Row >
            <Col md={6}>
              <div className="placementcard"  >
                <Card className='placement_Cards' >
                  <Slider {...settings}>
                    {data?.placedstudents?.map((val, index) =>
                      <div className='studimg'>
                        <img src={val.img} alt={val.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '5px' }} />
                        <div className='stdnames'>
                          <strong className='studentName'>{val.name}</strong>
                        </div>
                      </div>
                    )}
                  </Slider>
                </Card>
              </div>
            </Col>
            <Col className='placed_Std_Col' >
              <div className="content">
                <p className='p1'>PLACEMENTS</p>
                <p className='p2'>Recent Placements</p>
                <p className='p3'>People Love To Learn With Us</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container >

      {/* <Footer /> */}
    </>
  );
}

export default PlacementPage;
