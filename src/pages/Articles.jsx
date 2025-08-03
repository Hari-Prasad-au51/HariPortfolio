import { motion } from "framer-motion";

const Articles = () => {
  // Placeholder data for when you have articles
  const featuredArticle = {
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is transforming modern web development practices and what developers need to know to stay ahead.",
    category: "Technology",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  };

  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large-scale React applications that remain maintainable as they grow.",
      category: "Web Development",
      date: "April 28, 2023",
      readTime: "6 min read"
    },
    {
      title: "The Power of Serverless Architecture",
      excerpt: "How serverless computing can reduce costs while improving scalability for modern applications.",
      category: "Cloud Computing",
      date: "March 12, 2023",
      readTime: "5 min read"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "A practical guide to choosing the right CSS layout method for different design requirements.",
      category: "Frontend",
      date: "February 5, 2023",
      readTime: "4 min read"
    },
    {
      title: "Optimizing Node.js Performance",
      excerpt: "Key techniques to improve the performance of your Node.js backend services.",
      category: "Backend",
      date: "January 22, 2023",
      readTime: "7 min read"
    },
    {
      title: "The State of JavaScript in 2023",
      excerpt: "An overview of the most important trends and developments in the JavaScript ecosystem this year.",
      category: "JavaScript",
      date: "December 15, 2022",
      readTime: "9 min read"
    },
    {
      title: "Accessibility in Modern Web Apps",
      excerpt: "Why accessibility matters and how to implement it effectively in your projects.",
      category: "Web Development",
      date: "November 8, 2022",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-24 text-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-300 mix-blend-screen"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-300 mix-blend-screen"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Insights</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sharing knowledge and perspectives on technology, development, and design
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Article */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Article</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img 
                  className="h-64 w-full object-cover md:h-full" 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-1">
                  {featuredArticle.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {featuredArticle.title}
                </h3>
                <p className="mt-2 text-gray-600 mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center mt-6">
                  <div className="text-sm text-gray-500">
                    <span>{featuredArticle.date}</span> · <span>{featuredArticle.readTime}</span>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                      {article.category}
                    </span>
                    <span className="ml-auto text-xs text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors">
                      Read →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-xl p-8 text-center border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to get notified when I publish new articles and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;