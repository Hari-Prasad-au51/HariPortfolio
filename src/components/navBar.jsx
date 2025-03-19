import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";  // Add hamburger menu and close icons
import HoverMessage from "./hoverMessage";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

function NavBar({ navColor }) {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for menu toggle
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  const phoneNumber = "+919876543210";
  const email = "harilabala@gmail.com";

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.lg:hidden')) {
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
      <div className="text-tertiarycolor sticky top-0 shadow-lg" style={{ backgroundColor: navColor }}>
        <div>
          <div className="flex pt-10 pb-4">
            <div className="flex px-10 text-xl filter brightness-125">
              <div className="border-2 p-1 px-3 rounded-full border-tertiarycolor font-semibold cursor-pointer">
                Labala Hariprasad
              </div>
            </div>

            {/* Large screen navigation */}
            <div className="hidden lg:flex gap-16 text-xl justify-center items-center flex-grow filter brightness-125 font-semibold">
              <div className="hover:text-yellow-400 cursor-pointer">About</div>
              <div className="hover:text-yellow-400 cursor-pointer">Education</div>
              <div className="hover:text-yellow-400 cursor-pointer">Skills</div>
              <div className="hover:text-yellow-400 cursor-pointer">Experience</div>
              <div className="hover:text-yellow-400 cursor-pointer">Projects</div>
              <div className="hover:text-yellow-400 cursor-pointer">Articles</div>
              <div className="hover:text-yellow-400 cursor-pointer">Contact</div>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="lg:hidden flex items-center absolute top-12 right-4 z-50" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} {/* Toggle between hamburger and close icon */}
            </div>

          </div>

          {/* Mobile menu with Framer Motion for animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={dropdownRef} // Attach the ref to the dropdown menu
                className="lg:hidden flex flex-col items-center bg-primarycolor text-white py-4 space-y-4"
                initial={{ opacity: 0, y: -100 }} // Start position from top
                animate={{ opacity: 1, y: 0 }}    // Move to final position
                exit={{ opacity: 0, y: -100 }}    // Exit animation moving up
                transition={{ duration: 0.4 }}    // Smooth transition duration
              >
                {/* Animate each nav item with a staggered delay */}
                {["About", "Education", "Skills", "Experience", "Projects", "Articles", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }} // Start position for each item
                    animate={{ opacity: 1, y: 0 }}   // Move to final position
                    transition={{ delay: index * 0.1, duration: 0.3 }} // Staggered delay and duration
                    className="hover:text-yellow-400 cursor-pointer"
                    onClick={closeDropdown}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end gap-6 px-6 py-2">
            <a href="https://www.linkedin.com/in/labala-hariprasad-8a82a8213/" target="_blank" rel="noopener noreferrer">
              <div className="border rounded-full text-sm text-primarycolor bg-white px-1 py-1 flex justify-center items-center cursor-pointer hover:bg-tertiarycolor">
                <FaLinkedinIn />
              </div>
            </a>
            <a href={`https://wa.me/${8555003811}`} target="_blank" rel="noopener noreferrer">
              <div className="border rounded-full text-sm text-primarycolor bg-white px-1 py-1 flex justify-center items-center cursor-pointer hover:bg-tertiarycolor">
                <FaWhatsapp />
              </div>
            </a>
            <div className="relative" onMouseEnter={() => setIsEmailHovered(true)} onMouseLeave={() => setIsEmailHovered(false)}>
              <a href="mailto:harilabala@gmail.com">
                <div className="border rounded-full text-sm text-primarycolor bg-white px-1 py-1 flex justify-center items-center cursor-pointer hover:bg-tertiarycolor">
                  <SiGmail />
                </div>
              </a>
              {isEmailHovered && 
                <div className="absolute top-full right-0 mt-2">
                  <HoverMessage data={email}/>
                </div>
              }
            </div>

            <div className="relative" onMouseEnter={() => setIsPhoneHovered(true)} onMouseLeave={() => setIsPhoneHovered(false)}>
              <a href={`tel:${phoneNumber}`}>
                <div className="border rounded-full text-sm text-primarycolor bg-white px-1 py-1 flex justify-center items-center cursor-pointer hover:bg-tertiarycolor">
                  <IoCall />
                </div>
              </a>
              {isPhoneHovered && 
                <div className="absolute top-full right-0 mt-2">
                  <HoverMessage data={phoneNumber}/>
                </div>
              }
            </div>
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