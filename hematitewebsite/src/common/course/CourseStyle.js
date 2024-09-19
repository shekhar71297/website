import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MdLibraryBooks } from 'react-icons/md';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CourseStyle = ({ course, onRegisterClick, show }) => {
  const { title, registrationStart, cardimg, month, price, upcomingbatch, } = course;
  const navigate = useNavigate();
  
  const handleKnowMoreClick = () => {
    navigate(`/course/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };
  return (
    <Card className="card-adjustment shadowapplying">
      <Card.Body>
        {upcomingbatch && show && (
          <div className="registration-text">
            Registration start from {registrationStart}
          </div>
        )}
        <hr />
        <div className="promo">
          <Card.Img src={cardimg} fluid />
          <span className="course-duration-wrapper">
            <MdLibraryBooks /> {month}
          </span>
          <hr />
          <div className="course-price">
            {price.discount ? (
              <div className="course-discounted-price">
                <span className="courseOfferPrice"><FaRupeeSign />{price.offerprice}</span>
                <span>Original Price: <FaRupeeSign /><del>{price.originalprice}</del></span>
              </div>
            ) : (
              <span className="courseOfferPrice"><FaRupeeSign />{price.originalprice}</span>
            )}
          </div>
        </div>
      </Card.Body>
      <div className="applyinghover">
        <Card.Title className="text-alignment">{title}</Card.Title>
        <h6 className="coursetextfontsize"><MdLibraryBooks /> {month}</h6>
        <br />
        <div>
          {price.discount ? (
            <div>
              <span className="hovercourseOfferPrice"><FaRupeeSign />{price.offerprice}</span>
              <b className="hovercoursePriceHeading">Original Price</b>
              <span className="hovercourseOriginalPrice"><FaRupeeSign />{price.originalprice}</span>
            </div>
          ) : (
            <span className="hovercourseOfferPrice"><FaRupeeSign />{price.originalprice}</span>
          )}
        </div>
        <br />
        <div className="registration-btn">
          <Button type="button"onClick={handleKnowMoreClick}>
            Know More <FaArrowRightLong />
          </Button>
          {upcomingbatch && show && (
            <Button className='register-btn' type="button" onClick={onRegisterClick}>
              Register
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default CourseStyle