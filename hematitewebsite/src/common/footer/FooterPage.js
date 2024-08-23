
import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import { WebContext } from "../../App";
import './footer.css'
import '../IconBar/IconBar.css'

function FooterPage() {
	const data = useContext(WebContext);
	const location = useLocation();
	const currentYear = new Date().getFullYear();
  const copyrightText = `© 2017-${currentYear} Hematite Infotech, All Rights Reserved.`;
	useEffect(() => {
		if (location.state && location.state.scrollToTop) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location]);


	return (
		<div>
			<footer className="footer-body  ">
				<Container>
					<Row>
						<Col md={4}  >

							<div className='about-heading'>
								<div> </div>
								<div>
									<span className="footer-title" >{data?.footer?.sloganheading?.title}</span>
								</div>
							</div>
							<div className="footer-content" >
								<p>{data?.footer?.slogan}</p>
							</div>


						</Col>
						<Col md={4} >
							<div className="site-map-body" >
								<div className='about-heading'>
									<div>
										<span className="footer-title" >{data?.footer?.siteMap?.title}</span>
									</div>
								</div>
								<div className="footer-site-map" >
									{data?.footer?.siteMap?.items?.map((item, index) => (
										<ul key={index}>
											<li>
												<Link
													className="site-map-links"
													to={item.link}
													state={{ scrollToTop: true }}
												>
													{/* Display the arrow icon and link text */}
													<MdOutlineKeyboardDoubleArrowRight /> {item.name}
												</Link>
											</li>
										</ul>
									))}
								</div>
							</div>
						</Col>
						<Col md={4} >
							<div >
								<div className='about-heading'>
									<div>
										<span className="footer-title" >{data?.footer?.headOffice?.title}</span>
									</div>
									<div className="address-body">
										<div className="footer-contact">
											<div>
												<FaLocationDot className="footer-icon" />
											</div>
											<span>{data?.footer?.headOffice?.address}</span>
										</div>

										<div className="footer-email">
											<div>
												<IoMdMail className="footer-icon" />
											</div>
											<a href={`mailto:${data?.footer?.headOffice?.email}`}>
												<span>{data?.footer?.headOffice?.email}</span>
											</a>
										</div>

										<div className="footer-phone">
											<div>
												<FaPhone className="footer-icon" />
											</div>
											<a href={`tel:${data?.footer?.headOffice?.phone}`}>
												<span>{data?.footer?.headOffice?.phone}</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>


				</Container>
			</footer>
			<div className="copyright-body" >
				<Container>
					<div className="footer-copyright" >
						<span>{copyrightText}</span>

						<span>{data?.footer?.subheading}</span>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default FooterPage