import { useEffect, useRef } from "react";

function Letter() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current
        .play()
        .catch((error) => console.log("Audio autoplay blocked:", error));
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-red-100 to-pink-200 p-6">
      {/* Animated falling hearts */}
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          className="absolute text-pink-500 animate-heart-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: 0,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 12}px`,
          }}
        >
          ❤️
        </span>
      ))}

      <h1 className="text-5xl font-bold text-red-600 mb-6 text-center z-10">
        My Love Letter to You, Tithi ❤️
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl text-center leading-8 mb-8 z-10">
        My dearest Tithi,
        <br />
        <br />
        Happy First Anniversary! 💖
        <br />
        This year with you has been the most beautiful chapter of my life.
        <br />
        Your smile brightens my darkest days, and your love fills my heart with
        joy.
        <br />
        <br />
        Thank you for coming into my life and giving it meaning. <br />
        You've made me feel truly alive, truly loved. I’ll never forget the
        magic of the days that brought us closer:
        <br />
        <strong>December 1</strong>, <strong>December 6</strong>, and{" "}
        <strong>March 29</strong> — they will always be etched in my heart
        forever. 🕊️
        <br />
        <br />
        You are not just a part of my life, you are my life. I love you more
        with every passing moment.
        <br />
        <br />
        Forever yours,
        <br />
        Your loving husband Hari 💖.
      </p>

      {/* Background music */}
      <audio ref={audioRef} loop autoPlay hidden>
        <source
          src="https://www.bensound.com/bensound-music/bensound-love.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      {/* Custom animation styles */}
      <style>{`
        @keyframes heartFall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-heart-fall {
          animation: heartFall 7s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Letter;
