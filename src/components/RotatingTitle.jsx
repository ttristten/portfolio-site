import { useEffect, useState } from "react";

export const RotatingTitle = () => {
  const titles = [
    "Software Developer",
    "UI Designer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      const updatedText = isDeleting
        ? currentTitle.substring(0, displayText.length - 1)
        : currentTitle.substring(0, displayText.length + 1);

      setDisplayText(updatedText);
    };

    const typingTimer = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className="mb-8">
      <h3 className="text-gray-400 text-xl text-center sm:text-right w-[300px] sm:w-[550px]">
        I am a{" "}
        <span className="text-blue-400 font-semibold">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>{" "}
        located in Southern California
      </h3>
    </div>
  );
};
