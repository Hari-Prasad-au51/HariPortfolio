import { useNavigate } from "react-router-dom";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

const Wishes = () => {
  const navigate = useNavigate();

  const handlePuzzleSolved = () => {
    navigate("/letter");
  };

  return (
    <div className="container min:w-5xl m-auto min-h-screen bg-pink-100">
    <div className="  flex flex-col items-center justify-center bg-pink-100 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">
        Solve the Puzzle to Reveal My Surprise!
      </h1>
      <div className="w-full max-w-5xl px-2">
        <JigsawPuzzle
          imageSrc="https://res.cloudinary.com/derexrykx/image/upload/v1745949196/hariti_qspn4l.jpg"
          rows={4}
          columns={4}
          onSolved={handlePuzzleSolved}
          className="w-full"
        />
      </div>
    </div>
    </div>
  );
};

export default Wishes;
