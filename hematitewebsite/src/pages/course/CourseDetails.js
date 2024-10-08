import React, { useContext, useEffect } from "react";
import "./coursedetail.css";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { LuClock } from "react-icons/lu";
import { TbMessageLanguage } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import BackToTop from "../../common/backTotop/BackToTop";
import { WebContext } from "../../App";
import { FaIndianRupeeSign } from "react-icons/fa6";
import NavigationBar from "../../common/navbar/NavigationBar";
import FooterPage from "../../common/footer/FooterPage";
import IconBar from "../../common/IconBar/IconBar";

function CourseDetails() {
  const data = useContext(WebContext);
  const { title } = useParams();
  const formattedTitle = title.replace(/-/g, " "); // Convert URL title to match data
  const filterBatch = data?.courses?.filter((course) =>
    course.title.toLowerCase() === formattedTitle.toLowerCase()
  )[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div>
      <NavigationBar />
      <BackToTop />
      <IconBar />
      {/* <CustomBreadcrumb pageTitle={filterBatch?.title} /> */}
      {/* Banner Image code */}

      <div className="main-image">
        <img
          className="w-100 "
          src={`${process.env.PUBLIC_URL}/${filterBatch?.bannerImgurl}`}
          alt="programming"
        />
      </div>


      <Container>
        <Row g={5}>
          <Col lg={8} xs={12}>
            <div className="course-detail-content">
              <div className="tab-content" id="myTabContent">
                <Card className="course-content-space">
                  <div className="course-content-space">
                    {/* <div>
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
                              {syllabus?.contents?.map((content, i) => (
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
                    </Card.Text> */}

                    <Card.Text>
                      <div className="detail-content-heading">
                        What You'll Learn
                      </div>
                      <ul>
                        {filterBatch?.courseDetail?.objective[0]?.contents.map(
                          (content, i) => (
                            <li
                              className="detail-content-subheading course_bullet_point"
                              key={i}
                            >
                              {content}
                            </li>
                          )
                        )}
                      </ul>
                    </Card.Text>

                    <Card.Text>
                      <div className="detail-content-heading">Requirements</div>
                      <ul>
                        {filterBatch?.courseDetail?.requirements[0]?.contents.map(
                          (content, i) => (
                            <li
                              key={i}
                              className="detail-content-subheading course_bullet_point"
                            >
                              {content}
                            </li>
                          )
                        )}
                      </ul>
                    </Card.Text>

                    {filterBatch?.courseDetail?.courseDescription && (
                      <Card.Text>
                        <div className="detail-content-heading">
                          Course Description
                        </div>
                        <ul>
                          {filterBatch.courseDetail.courseDescription.description.map(
                            (desc, i) => (
                              <li key={i} className="detail-content-subheading">
                                {desc}
                              </li>
                            )
                          )}
                        </ul>
                      </Card.Text>
                    )}

                    <Card.Text>
                      <div className="detail-content-heading">
                        Course Content
                      </div>
                      {filterBatch?.courseDetail?.syllabus.map(
                        (syllabus, index) => (
                          <div key={index}>
                            <div className="detail-content-title">
                              <strong>{syllabus.title}</strong>
                            </div>
                            <ul>
                              {syllabus.contents.map((content, i) => (
                                <li
                                  className="detail-content-subheading course_bullet_point"
                                  key={i}
                                >
                                  <strong>{content.title}</strong>:{" "}
                                 <p style={{textAlign:'justify'}} > {content.description}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </Card.Text>

                    <Card.Text>
                      <div className="detail-content-heading">
                        Who This Course is For
                      </div>
                      <ul>
                        {filterBatch?.courseDetail?.whoThisCourseIsFor[0]?.contents.map(
                          (content, i) => (
                            <li
                              className="detail-content-subheading course_bullet_point"
                              key={i}
                            >
                              {content}
                            </li>
                          )
                        )}
                      </ul>
                    </Card.Text>

                    <div className="detail-content-heading">Certificate</div>
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
                          <div className="info-icon">
                          <span>
                            <LuClock />
                          </span>
                          <span className="course-duration" >Duration</span>
                          </div>

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
                            <LuClock /> Project Assistance
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
                    <Button className="buttonlayout" type="button">
                      {filterBatch?.price?.discount && (
                        <div className="offer-price">
                          {/* <div> */}
                          <span className="price" >
                            <FaIndianRupeeSign />
                            {filterBatch?.price?.offerprice}
                          </span>
                          {/* </div> */}
                          {/* <div> */}
                          <span className="price-title">Original Price: <FaIndianRupeeSign /><del>{filterBatch?.price?.originalprice}</del></span>
                          {/* </div>              */}
                        </div>
                      )}
                      {!filterBatch?.price?.discount && (
                        <span className="hovercourseOfferPrice">
                          <FaIndianRupeeSign />
                          {filterBatch?.price?.originalprice}
                        </span>
                      )}
                    </Button>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterPage />
    </div>
  );
}

export default CourseDetails;
