import React from 'react';

function reveal() {


    let prevScrollPos = window.scrollY;

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible && window.scrollY > prevScrollPos) {
          reveals[i].classList.add("active");
        }
      }

      prevScrollPos = window.scrollY;
    }

    window.addEventListener("scroll", reveal);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", reveal);
    };

}

export default reveal