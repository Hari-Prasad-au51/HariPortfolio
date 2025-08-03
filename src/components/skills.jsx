import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "TypeScript", level: 50, icon: "🔡" },
        { name: "Redux Toolkit", level: 80, icon: "🔄" },
        { name: "Razorpay", level: 75, icon: "💳" }, // ✅ Razorpay added here
      ],
    },
    {
      category: "Backend & Auth",
      skills: [
        { name: "Node.js", level: 85, icon: "🖥️" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Casbin", level: 80, icon: "🔐" },
        { name: "Keycloak", level: 70, icon: "🛡️" },
      ],
    },
    {
      category: "AI & DevOps",
      skills: [
        { name: "LangChain", level: 80, icon: "🧠" },
        { name: "Ollama", level: 70, icon: "🗣️" },
        { name: "Git/GitHub", level: 85, icon: "🐙" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "AWS Deployment", level: 65, icon: "☁️" },
        // { name: "AWS Bedrock", level: 65, icon: "☁️" },
        { name: "Docker", level: 50, icon: "🐳" },
        // { name: "CI/CD", level: 70, icon: "⚙️" }
      ],
    },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-tertiarycolor mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-secondarycolor mx-auto"></div>
          <p className="text-white mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
            I'm always learning and expanding my skill set.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondarycolor bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-secondarycolor border-opacity-30"
            >
              <h3 className="text-2xl font-bold text-tertiarycolor mb-6 flex items-center">
                <span className="mr-3">{category.icon || "🛠️"}</span>
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-tertiarycolor text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-primarycolor bg-opacity-50 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + catIndex * 0.05 + skillIndex * 0.03,
                        }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-tertiarycolor"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-tertiarycolor mb-6 text-center">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "VS Code", icon: "💻" },
              { name: "Postman", icon: "📡" },
              { name: "MongoDB Compass", icon: "🍃" },
              { name: "Razorpay Dashboard", icon: "💳" },
              { name: "Keycloak Admin Console", icon: "🔐" },
              { name: "AWS EC2 / S3", icon: "☁️" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondarycolor bg-opacity-20 text-white px-5 py-3 rounded-lg flex items-center cursor-default border border-secondarycolor border-opacity-30"
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
