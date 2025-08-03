import { motion } from "framer-motion";

function Experience() {
  const experienceData = [
    {
      role: "MERN Stack Trainee",
      company: "AttainU Bootcamp",
      duration: "Aug 2022 - Jul 2023",
      description: [
        "Built real-world apps during MERN training: Barber Booking & Product Re-sell platforms.",
        "Learned clean code, authentication, deployment, and collaboration tools."
      ],
      icon: "🎓",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Git"]
    },
    {
      role: "Full Stack Developer",
      company: "Impact Weaver",
      duration: "Aug 2023 – Present",
      description: [
        "Developed NGO and GovTech platforms with Razorpay, Casbin, JWT, and analytics.",
        "Integrated AI bots using LangChain & Ollama; led end-to-end deployments."
      ],
      icon: "💼",
      skills: [
        "React", "Node.js", "PostgreSQL", "Sequelize", "LangChain", "Ollama", "MongoDB"
      ]
    },
    {
      role: "AI Interface Developer (Collaborator)",
      company: "Aligned AI (EdTech - US)",
      duration: "Mar 2025 – May 2025",
      description: [
        "Built dashboard with Keycloak auth, Bedrock chatbot, and calendar + PDF tools."
      ],
      icon: "🧪",
      skills: ["React", "TypeScript", "MongoDB", "Keycloak", "AWS"]
    }
  ];
  

  return (
    <section className="min-h-screen bg-secondarycolor py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primarycolor mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-tertiarycolor mx-auto mb-4" />
          <p className="text-lg text-primarycolor max-w-2xl mx-auto">
            Key roles and responsibilities throughout my career
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-primarycolor bg-opacity-20 transform md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-0 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-1 w-4 h-4 rounded-full bg-tertiarycolor border-4 border-secondarycolor transform md:-translate-x-1/2 z-10" />

              {/* Experience Card */}
              <div className="md:flex md:justify-between">
                {/* Date - Desktop */}
                <div className="hidden md:block md:w-5/12 md:pr-8 md:text-right">
                  <div className="text-primarycolor font-medium text-lg sticky top-4">
                    {exp.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-7/12">
                  <div className="bg-white bg-opacity-95 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{exp.icon}</div>
                      <div className="flex-1">
                        {/* Date - Mobile */}
                        <div className="md:hidden text-sm font-medium text-primarycolor bg-tertiarycolor bg-opacity-20 px-3 py-1 rounded-full inline-block mb-3">
                          {exp.duration}
                        </div>

                        <h3 className="text-xl font-bold text-primarycolor">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-medium text-primarycolor opacity-90 mb-3">
                          {exp.company}
                        </h4>

                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-tertiarycolor mr-2 mt-1">•</span>
                              <span className="text-primarycolor">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium bg-primarycolor bg-opacity-5 text-primarycolor px-3 py-1 rounded-full border border-primarycolor border-opacity-10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;