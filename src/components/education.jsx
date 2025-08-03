import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "Professional MERN Stack Training",
      institution: "AttainU (Remote)",
      year: "2022 - 2023",
      description: "Completed intensive full-stack development training, building real-world projects with React, Node, and MongoDB.",
      icon: "💻"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Maharaja (A) College, Vizianagaram",
      year: "2015 - 2018",
      description: "Graduated with a CGPA of 7.9, focusing on programming fundamentals and computer theory.",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Education (MPC Stream)",
      institution: "AP Model College",
      year: "2013 - 2015",
      description: "Completed Intermediate (+2) in Mathematics, Physics, and Chemistry with strong logical foundation.",
      icon: "📚"
    },
    
  ];
  
  

  return (
    <section className="min-h-screen bg-secondarycolor py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primarycolor mb-4">Education</h2>
          <div className="w-24 h-1 bg-tertiarycolor mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primarycolor bg-opacity-30"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-tertiarycolor border-4 border-primarycolor z-10"></div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'mr-auto md:mr-0 md:pr-8' : 'ml-auto md:ml-0 md:pl-8'}`}>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg border border-primarycolor border-opacity-20">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{edu.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-primarycolor">{edu.degree}</h3>
                      <h4 className="text-lg font-semibold text-primarycolor opacity-90 mb-2">{edu.institution}</h4>
                      <div className="text-sm font-medium text-primarycolor bg-tertiarycolor bg-opacity-30 px-3 py-1 rounded-full inline-block mb-2">
                        {edu.year}
                      </div>
                      <p className="text-primarycolor">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-primarycolor bg-opacity-10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-primarycolor mb-6 text-center">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {[
    {
      icon: "🤝",
      title: "NSS Volunteer",
      description: "Actively participated in National Service Scheme (NSS) camps, engaging in community service and rural development."
    },
    {
      icon: "🎤",
      title: "Cultural Event Organizer",
      description: "Organized and led multiple cultural programs and college events, showcasing leadership and event management skills."
    },
    {
      icon: "🏅",
      title: "Team Collaboration",
      description: "Worked with cross-functional teams in both academics and tech projects, strengthening my team-building and coordination skills."
    }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md border border-primarycolor border-opacity-20"
    >
      <div className="text-4xl mb-4 text-primarycolor">{item.icon}</div>
      <h4 className="text-xl font-semibold text-primarycolor mb-2">{item.title}</h4>
      <p className="text-primarycolor">{item.description}</p>
    </div>
  ))}
</div>


        </motion.div>
      </div>
    </section>
  );
}

export default Education;