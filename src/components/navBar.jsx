import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; // Add hamburger menu and close icons
import HoverMessage from "./hoverMessage";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion
import { Link , useNavigate} from "react-router-dom";

function NavBar({ navColor }) {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const dropdownRef = useRef(null); // Ref for the dropdown menu
  const navigate = useNavigate();

  const phoneNumber = "9492260934";
  const email = "harilabala@gmail.com";

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/labala-hariprasad-8a82a8213/",
      label: "LinkedIn"
    },
    {
      icon: <FaWhatsapp />,
      href: `https://wa.me/${phoneNumber.replace('+', '')}`,
      label: "WhatsApp"
    },
    {
      icon: <SiGmail />,
      href: `mailto:${email}`,
      label: "Email",
      hover: isEmailHovered,
      setHover: setIsEmailHovered,
      hoverMessage: email
    },
    {
      icon: <IoCall />,
      href: `tel:${phoneNumber}`,
      label: "Call",
      hover: isPhoneHovered,
      setHover: setIsPhoneHovered,
      hoverMessage: phoneNumber
    }
  ];

  const handleSectionClick = (sectionId) => {
    if (window.location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicking outside to close the dropdown
  const closeDropdown = () => {
    setIsMenuOpen(false);
  };

  // Close dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".lg:hidden")
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="text-tertiarycolor sticky top-0 shadow-lg z-50"
        style={{ backgroundColor: navColor }}
      >
        <div>
          <div className="flex pt-10 pb-4">
            <div className="flex px-10 text-xl filter brightness-125">
            <Link
                to="/"
                className="border-2 p-1 px-3 rounded-full border-tertiarycolor font-semibold cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Labala Hariprasad
              </Link>
            </div>

            {/* Large screen navigation */}
            <div className="hidden lg:flex gap-16 text-xl justify-center items-center flex-grow filter brightness-125 font-semibold">
            <div 
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => handleSectionClick("about")}
              >
                About
              </div>
              <div 
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => handleSectionClick("education")}
              >
                Education
              </div>
              <div 
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => handleSectionClick("skills")}
              >
                Skills
              </div>
              <div 
                className="hover:text-yellow-400 cursor-pointer"
                onClick={() => handleSectionClick("experience")}
              >
                Experience
              </div>
              <Link
                to="/projects"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="/articles"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Articles
              </Link>
              <Link
                to="/contact"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Contact
              </Link>
             
              {/* <Link
                to="/hariti"
                className="hover:text-yellow-400 cursor-pointer"
              >
                Hariti
              </Link> */}
            </div>

            {/* Hamburger menu for small screens */}
            <div
              className="lg:hidden flex items-center absolute top-12 right-4 z-50"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}{" "}
              {/* Toggle between hamburger and close icon */}
            </div>
          </div>

          {/* Mobile menu with Framer Motion for animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={dropdownRef} // Attach the ref to the dropdown menu
                className="lg:hidden flex flex-col items-center bg-primarycolor text-white py-4 space-y-4"
                initial={{ opacity: 0, y: -100 }} // Start position from top
                animate={{ opacity: 1, y: 0 }} // Move to final position
                exit={{ opacity: 0, y: -100 }} // Exit animation moving up
                transition={{ duration: 0.4 }} // Smooth transition duration
              >
                {/* Animate each nav item with a staggered delay */}
                {[
                  { label: "About", id: "about" },
                  { label: "Education", id: "education" },
                  { label: "Skills", id: "skills" },
                  { label: "Experience", id: "experience" },
                  { label: "Projects", path: "/projects" },
                  { label: "Articles", path: "/articles" },
                  { label: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => item.id ? handleSectionClick(item.id) : closeDropdown()}
                  >
                   {item.path ? (
                      <Link
                        to={item.path}
                        className="hover:text-yellow-400 cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="hover:text-yellow-400 cursor-pointer">
                        {item.label}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end gap-6 px-6 py-2">
  {socialLinks.map((link) => (
    <div key={link.label} className="relative">
      <a
        href={link.href}
        target={link.label !== 'Email' && link.label !== 'Call' ? "_blank" : undefined}
        rel="noopener noreferrer"
        onMouseEnter={() => link.setHover && link.setHover(true)}
        onMouseLeave={() => link.setHover && link.setHover(false)}
        aria-label={link.label}
      >
        <div className="border rounded-full text-sm text-primarycolor bg-white px-1 py-1 flex justify-center items-center cursor-pointer hover:bg-tertiarycolor">
          {link.icon}
        </div>
      </a>
      {link.hoverMessage && link.hover && (
        <div className="absolute top-full right-0 mt-2">
          <HoverMessage data={link.hoverMessage} />
        </div>
      )}
    </div>
  ))}
</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  navColor: PropTypes.string.isRequired, // navColor must be a string and is required
};
