import {  useRef, useEffect } from "react";
import PropTypes from "prop-types"; // Import prop-types
import Banner from "../components/homeBanner";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Experience from "../components/experience";

function Home({ setNavColor }) {
  // Create refs for each section
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // The viewport
      rootMargin: "0px 0px -90% 0px", // Trigger near the bottom of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            entry.target === bannerRef.current ||
            entry.target === educationRef.current ||
            entry.target === experienceRef.current
          ) {
            setNavColor("#a0a2d0"); // Odd sections
          } else if (entry.target === aboutRef.current || entry.target === skillsRef.current) {
            setNavColor("#434263"); // Even sections
          }
        }
      });
    }, options);

    // Observe each section
    [bannerRef, aboutRef, educationRef, skillsRef, experienceRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Unobserve on cleanup
      [bannerRef, aboutRef, educationRef, skillsRef, experienceRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setNavColor]);

  return (
    <div className="w-full">
      {/* Render each section explicitly */}
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </div>
  );
}

export default Home;
Home.propTypes = {
  setNavColor: PropTypes.func.isRequired, // setNavColor must be a function and is required
};

