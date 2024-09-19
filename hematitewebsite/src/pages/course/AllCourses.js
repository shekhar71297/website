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
import CourseStyle from "../../common/course/CourseStyle";

function AllCourses() {
  const data = useContext(WebContext);
  const activeCourses = data?.courses?.filter((course) => course.isActive === true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <IconBar />
      <BackToTop />
      <NavigationBar />
      <CustomBreadcrumb pageTitle='All Courses' />
      <div className="allcourse-section">
        <Container>
          <Row className="">
            {activeCourses?.map((data, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4}>
            <CourseStyle
              course={data}
              show={false}

              // onRegisterClick={handleShow}
            />
            <br />
          </Col>
          ))}
          </Row>
        </Container>
      </div>
      <FooterPage />
    </div>
  );
}

export default AllCourses;
