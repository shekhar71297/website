import React, { useEffect, useState } from "react";
import "./backtotop.css";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const backToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrolTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };
  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={backToBtn}>
          <FaAngleDoubleUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

export default BackToTop;
