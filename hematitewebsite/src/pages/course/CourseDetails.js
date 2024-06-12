import React, { useContext, useEffect } from "react";
import "./coursedetail.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import { IoMdTime } from "react-icons/io";
import { TbMessageLanguage } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import { FaRupeeSign } from "react-icons/fa6";
import NavigationBar from "../../common/navbar/NavigationBar";
import CustomBreadcrumb from "../../common/breadCrumb/CustomBreadCrumb";

function CourseDetails() {
  const data = useContext(WebContext);
  const { id } = useParams();
  const filterBatch = data?.courses?.filter((course) => course.id === id)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("anmol", filterBatch, id);

  return (
    <div>
      <NavigationBar />
      <BackToTop />
      <CustomBreadcrumb pageTitle= {filterBatch?.title} />
      {/* Banner Image code */}
      {/* <Container>
            <Row>
                <Col lg={12}>
                <div className="main-image">
                <img
                  className="w-100 "
                  src={`${process.env.PUBLIC_URL}/${filterBatch?.bannerImgurl}`}
                  alt="programming"
                />
              </div>
                </Col>
            </Row>
        </Container> */}

      <Container>
        <Row g={5}>
          <Col lg={8} xs={12}>
            <div className="course-detail-content">
              <div className="tab-content" id="myTabContent">
                <Card className="course-content-space">
                  <div className="course-content-space">
                    <div className="course-intro-heading">Introduction</div>
                    <div>
                      {filterBatch?.courseDetail?.introduction.map(
                        (intro, index) => (
                          <div key={index}>
                            <div className="detail-content-heading">
                              {intro?.title}
                            </div>
                            <div className="detail-content-subheading">
                              {intro?.description}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <Card.Text>
                      <div className="detail-content-heading">Objectives</div>
                      {filterBatch?.courseDetail?.objective.map(
                        (obj, index) => (
                          <ul key={index}>
                            {obj.contents.map((content, i) => (
                              <li className="detail-content-subheading" key={i}>
                                {content}
                              </li>
                            ))}
                          </ul>
                        )
                      )}
                    </Card.Text>

                    <Card.Text>
                      <div className="course-intro-heading">Syllabus</div>
                      {filterBatch?.courseDetail?.syllabus.map(
                        (syllabus, index) => (
                          <div key={index}>
                            <div className="detail-content-heading">
                              {syllabus.title}
                            </div>
                            <ul>
                              {syllabus.contents.map((content, i) => (
                                <li
                                  className="detail-content-subheading"
                                  key={i}
                                >
                                  {content}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </Card.Text>

                    <div className="detail-content-heading">
                      Certificate
                    </div>
                    <p className="detail-content-subheading">Yes.</p>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <div
              className="eduvibe-sidebar.course-details-sidebar"
              id="sticky-position"
            >
              <div className="inner">
                <div className="eduvibe-widget">
                  <img
                    className="w-100"
                    src={`${process.env.PUBLIC_URL}/${filterBatch?.offerImgurl}`}
                    alt="programming"
                  />

                  <div className="eduvibe-widget-details coursetopmargin">
                    <div className="widget-content">
                      <ul>
                        <li>
                          <span>
                            <IoMdTime />
                            Duration
                          </span>
                          <span>{filterBatch?.month}</span>
                        </li>
                        <hr />
                        <li>
                          <span>
                            <TbMessageLanguage /> Language
                          </span>
                          <span>English / Hindi</span>
                        </li>
                        <hr />
                        <li>
                          <span>
                            <HiComputerDesktop /> Lab Assistance
                          </span>
                          <span> Yes</span>
                        </li>
                        <hr />
                        <li>
                          <span>
                            <IoMdTime /> Project Assistance
                          </span>
                          <span>Yes</span>
                        </li>
                        <hr />
                        <li>
                          <span>
                            <LiaCertificateSolid /> Certificate
                          </span>
                          <span>Yes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <center>
                    <button className="buttonlayout" type="button">
                      {filterBatch?.price?.discount && (
                        <div>
                          <span className="hovercourseOfferPrice">
                            <FaRupeeSign />
                            {filterBatch?.price?.offerprice}
                          </span>

                          <b className="hovercoursePriceHeading">
                            Original Price
                          </b>
                          <span className="hovercourseOriginalPrice">
                            {" "}
                            {filterBatch?.price?.originalprice}
                          </span>
                        </div>
                      )}
                      {!filterBatch?.price?.discount && (
                        <span className="hovercourseOfferPrice">
                          {filterBatch?.price?.originalprice}
                        </span>
                      )}
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CourseDetails;
