import { forwardRef, useRef, useEffect, useImperativeHandle } from "react"; // Added useImperativeHandle
import PropTypes from "prop-types";
import Banner from "../components/homeBanner";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Experience from "../components/experience";

const Home = forwardRef(({ setNavColor }, ref) => {
  // Always call hooks unconditionally
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  // Expose refs to parent component
  useImperativeHandle(ref, () => ({
    bannerRef,
    aboutRef,
    educationRef,
    skillsRef,
    experienceRef,
  }));

  // Rest of your component...
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -90% 0px",
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
            setNavColor("#a0a2d0");
          } else if (entry.target === aboutRef.current || entry.target === skillsRef.current) {
            setNavColor("#434263");
          }
        }
      });
    }, options);

    [bannerRef, aboutRef, educationRef, skillsRef, experienceRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [bannerRef, aboutRef, educationRef, skillsRef, experienceRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [setNavColor]);

  return (
    <div className="w-full">
      <div ref={bannerRef} id="banner">
        <Banner />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={educationRef} id="education">
        <Education />
      </div>
      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
    </div>
  );
});

// Set the display name for the component
Home.displayName = "Home";

Home.propTypes = {
  setNavColor: PropTypes.func.isRequired,
};

export default Home;
export { Home as HomeWithRefs };