import React from 'react'

// --- Paste this at the very bottom of your Hero.jsx file ---

const TypingEffect = () => {
  const words = ["Full Stack Developer", "MERN Stack Developer", "React Specialist"];
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150; // Faster when deleting
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Word is complete, wait a bit then start deleting
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && currentText === "") {
        // Word is fully deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Typing or Deleting characters
        setCurrentText(prev => 
          isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="font-semibold text-white">
      {currentText}
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  );
};

export default TypingEffect
