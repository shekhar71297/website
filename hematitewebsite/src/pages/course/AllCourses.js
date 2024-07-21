import React, { useContext, useEffect } from "react";
import { Row, Card, Container, Col, Button } from "react-bootstrap";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Footer from "./Footer";
import NavigationBar from "../../common/navbar/NavigationBar";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import "./courses.css";
import CustomBreadcrumb from "../../common/breadCrumb/CustomBreadCrumb";
import FooterPage from "../../common/footer/FooterPage";
import IconBar from "../../common/IconBar/IconBar";
import reveal from "../../common/ScrollAnimation/reveal";

function AllCourses() {
  const data = useContext(WebContext);
  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    reveal()
  })
  return (
    <div>
      <IconBar/>
      <BackToTop />
      <NavigationBar />
      <CustomBreadcrumb pageTitle='All Courses' />
<div className="allcourse-section">
      <Container>
      <Row>
          {data?.courses?.map((data, index) => (
            <Col key={index}  xs={12}
            sm={6} 
            md={6}
            lg={4}
            >
              <Card className="card-adjustment shadowapplying reveal fade-bottom">
                <Card.Body>
                  <div className="promo">
                    <Card.Img
                      src={data.cardimg}
                      fluid
                     
                    />

                    <br />
                    <h6 className="coursetextfontsize">
                      <MdLibraryBooks  />
                      {data.month}
                    </h6>
                   
                    <hr />
                    <div>
                      {data?.price?.discount && (
                        <div>
                          <span className="courseOfferPrice"><FaRupeeSign />{data?.price?.offerprice}</span> 
                          
                          <b className="coursePriceHeading" >Original Price</b>
                          <span className="courseOriginalPrice" > <FaRupeeSign />{data?.price?.originalprice}</span>
                        </div >
                      )}
                      {!data?.price?.discount && (
                        <span className="courseOfferPrice"><FaRupeeSign />{data?.price?.originalprice}</span>
                      )}
                    </div>
                  </div>
                </Card.Body>
                <div className="applyinghover" >
                 
                  <Card.Title className="text-alignment">
                    {" "}
                    {data.title}
                  </Card.Title>
                  <br />
                  <h6 className="coursetextfontsize">
                    {" "}
                    <MdLibraryBooks  /> {data.month}
                  </h6>
                  <br />
                  <div>
                      {data?.price?.discount && (
                        <div>
                          <span className="hovercourseOfferPrice"><FaRupeeSign />{data?.price?.offerprice}</span> 
                          
                          <b className="hovercoursePriceHeading">Original Price</b>
                          <span className="hovercourseOriginalPrice" > <FaRupeeSign />{data?.price?.originalprice}</span>
                        </div >
                      )}
                      {!data?.price?.discount && (
                        <span className="hovercourseOfferPrice"><FaRupeeSign />{data?.price?.originalprice}</span>
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
                    to={`/coursedetail/${data?.id}`}>
                    <Button type="button" variant="">
                      Know More <FaArrowRightLong />
                    </Button>
                  </Link>
                </div>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      <FooterPage/>
    </div>
  );
}

export default AllCourses;
