import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Labala HariPrasad</h2>
            <p className="text-gray-400 mt-2">Full Stack Developer | Ai Engineer | Creative Thinker</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Hari-Prasad-au51" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/labala-hariprasad-8a82a8213/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            {/* <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a> */}
            <a 
              href="mailto:harilabala@gmail.com" 
              target="_blank" 
  rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;