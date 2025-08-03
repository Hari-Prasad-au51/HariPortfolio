import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-primarycolor py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-tertiarycolor mb-4">About Me</h2>
          <div className="w-24 h-1 bg-secondarycolor mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-secondarycolor shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
                alt="Labala Hariprasad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-tertiarycolor opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-tertiarycolor">
              Full Stack Developer & Tech Enthusiast
            </h3>
            
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm <span className="font-semibold text-secondarycolor">Labala Hariprasad</span>, 
                a passionate MERN stack developer with expertise in building scalable and efficient web applications.
              </p>
              
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in creating 
                seamless user experiences while ensuring robust server-side functionality.
              </p>
              
              <p>
                My approach combines technical proficiency with creative problem-solving, allowing me to 
                deliver innovative solutions that meet both user needs and business objectives.
              </p>
              
              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3 text-secondarycolor">Personal Qualities:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Self-motivated
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Detail-oriented
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Continuous learner
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Team player
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Problem solver
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondarycolor rounded-full mr-2"></span>
                    Accountable
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-secondarycolor bg-opacity-20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-tertiarycolor mb-6 text-center">
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: "💻",
      title: "Full Stack Craft",
      description:
        "I build scalable web apps using the MERN stack and integrate AI tools like LangChain and Ollama to create intelligent experiences."
    },
    {
      icon: "🌟",
      title: "Technology for Social Good",
      description:
        "I've contributed to impactful projects like DDMA Sahayata and NGO platforms, using technology to support disaster relief and promote transparency in underserved communities."
    },
    {
      icon: "🌿",
      title: "Climate Program Co-Leader",
      description:
        "As co-leader of the Change Looms Climate Program at Impact Weaver, I worked on empowering communities through social entrepreneurship — a funded initiative focused on climate innovation and grassroots impact."
    }
    
  ].map((fact, index) => (
    <div
      key={index}
      className="bg-primarycolor bg-opacity-70 p-6 rounded-lg shadow-md border border-secondarycolor"
    >
      <div className="text-4xl mb-4 text-tertiarycolor">{fact.icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{fact.title}</h4>
      <p className="text-gray-200">{fact.description}</p>
    </div>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;