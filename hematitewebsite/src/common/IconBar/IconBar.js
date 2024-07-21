import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WebContext } from "../../App";
import './IconBar.css'
import {
	faFacebook,
	faLinkedin,
	faYoutube,
	faWhatsapp,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from 'react-bootstrap';

function IconBar() {
    const data = useContext(WebContext);
    const socialLinks = [
		{
			href: "https://www.facebook.com/hematiteinfotech/",
			icon: faFacebook,
			className: "facebook",
		},
		{
			href: "https://www.instagram.com/hematite_infotech?igsh=ZDE3OTNnNzdjNnl4",
			icon: faInstagram,
			className: "instagram",
		},
		{ href: "https://wa.link/he878r", icon: faWhatsapp, className: "whatsapp" },
		{
			href: "https://www.linkedin.com/company/hematite-infotech-pvt-ltd/mycompany/",
			icon: faLinkedin,
			className: "linkedin",
		},
		{
			href: "http://www.youtube.com/@hematiteinfotech1569",
			icon: faYoutube,
			className: "youtube",
		},
	];

  return (
    <div>
			<div className="icon-bar">
				{socialLinks.map((link) => (
					<a key={link.href} href={link.href} className={link.className}>
						<FontAwesomeIcon icon={link.icon} />
					</a>
				))}
			</div>
    </div>
  )
}

export default IconBar