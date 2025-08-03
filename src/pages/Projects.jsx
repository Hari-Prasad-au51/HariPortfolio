import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Impact Console",
      link: "https://login.impactweaver.com",
      description: "Backend portal for managing donations, volunteers, and dynamic NGO websites with live Razorpay integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Razorpay"],
      animationDelay: 0.1
    },
    {
      title: "Dynamic Theme Managed Sites",
      description: "Managed multiple NGO websites through a centralized console including:",
      sites: [
        "Nivedita Nari Sangstha (nnssilchar.org)",
        "EthicoEat (ethicoeat.com)",
        "Sharbabharatiya Sylehti Forum Trust (sbsftrust.com)",
        "Lucky Travel (luckytravel.in)"
      ],
      tech: ["React", "Express", "MongoDB"],
      animationDelay: 0.2
    },
    {
      title: "Impact Social Development Network",
      link: "https://network.impactweaver.com/feed",
      description: "NGO–CSR–User connection platform with transparency features, grant scraper, analytics.",
      tech: ["React", "Express", "SQLite3", "MongoDB", "Google Analytics"],
      animationDelay: 0.3
    },
    {
      title: "e-CFRC (District Disaster Mgmt., Assam)",
      link: "https://e-cfrc.in",
      description: "Admin dashboard for DDMA with role-based control (Casbin), scheme/event management.",
      tech: ["React", "PostgreSQL", "Node.js", "Casbin", "Sequelize"],
      animationDelay: 0.4
    },
    {
      title: "DDMA Sahayata",
      link: "https://ddma-sahayata.in",
      description: "Disaster fund verification system with multi-admin roles and filtered fund requests.",
      tech: ["React", "PostgreSQL", "Node.js", "Casbin", "JWT"],
      animationDelay: 0.5
    },
    {
      title: "Consulting Solutions AI Bot",
      link: "https://chro.slmspotlight.com",
      description: "Business chatbot using LangChain and custom LLMs trained on uploaded PDFs.",
      tech: ["React", "MongoDB", "Express", "LangChain", "Markdown"],
      animationDelay: 0.6
    },
    {
      title: "Livi AI Chatbot",
      description: "WhatsApp-based science bot for students using WhatsApp Web API + SQLite3.",
      tech: ["Node.js", "Express", "SQLite3", "WhatsApp Web API"],
      animationDelay: 0.7
    },
    {
      title: "Aligned AI (US EdTech - In Dev)",
      link: "https://myalignedai.com/",
      description: "AI-based lesson builder with PDF sharing, calendar integration, strict Keycloak auth.",
      tech: ["React", "TypeScript", "AWS Bedrock", "Keycloak", "MongoDB"],
      animationDelay: 0.8
    },
    {
      title: "Ollama LangChain Chatbot",
      description: "Self-hosted chatbot using own documents and Ollama LLM with LangChain.",
      tech: ["LangChain", "Ollama", "TypeScript", "Express", "React"],
      animationDelay: 0.9
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            A collection of my professional and personal development work
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={project.animationDelay}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {project.title} ↗
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {project.sites && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">MANAGED SITES:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {project.sites.map((site, i) => (
                          <li key={i}>{site}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 * i + project.animationDelay }}
                        className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;