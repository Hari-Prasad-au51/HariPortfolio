import homeBanner from "../assets/homeBanner.png";

function Banner() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-screen bg-cover bg-center bg-fixed text-white"
        style={{
          backgroundImage: `url(${homeBanner})`, // Replace with your banner image URL
        }}
      >
        <div className="flex flex-col justify-between h-full gap-8 py-16 px-4 sm:px-8 md:py-24 md:px-12 lg:px-20 bg-cover bg-center">
          {/* Top Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Labala Hariprasad
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              React & Node.js Developer
            </h2>
          </div>

          {/* Bottom Section */}
          <div className="pb-32">
            <p className="font-mono text-base sm:text-lg md:text-xl lg:text-xl w-full sm:w-2/3 md:w-1/2">
              I am a self-motivated MERN stack developer with a passion for building scalable
              and efficient web applications. My leadership skills allow me to guide teams
              in developing innovative solutions and maintaining best practices in coding.
              I take accountability for every aspect of my work, ensuring timely delivery
              and high-quality results. Driven by a commitment to continuous learning,
              I stay updated with the latest technologies to enhance my development expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
