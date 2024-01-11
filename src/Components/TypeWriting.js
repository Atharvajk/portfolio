import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings, speed }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isReversing) {
        // Typing forward
        if (currentPosition < strings[currentStringIndex].length) {
          setCurrentPosition((prevPosition) => prevPosition + 1);
        } else {
          // Finished typing current string, start reversing
          setTimeout(()=>{
            setIsReversing(true);

          },1000)
        }
      } else {
        // Reversing
        if (currentPosition > 0) {
          setCurrentPosition((prevPosition) => prevPosition - 1);
        } else {
          // Finished reversing, move to the next string
          setIsReversing(false);
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentPosition, currentStringIndex, strings, speed, isReversing]);
  
  return (
    <div>
      
      <span style={{ fontSize:"25px" }}>{strings[currentStringIndex].substring(0, currentPosition)}</span>
      <span style={{ display: 'inline-block', width: "10px" }}>&nbsp;</span>
    </div>
  );
};

export default function Mytypewritter() {
  const strings=[
    'A MERN-Stack Developer',
    'A Web Developer',
    'A Flutter Developer',
    'A Data Science Enthusiat',
    'A Software Developer',
   
  ]
  const typeSpeed = 80; // Adjust the speed as needed (milliseconds per character)
  const eraseSpeed = 50; // Adjust the erase speed as needed (milliseconds per character)

  return <Typewriter  strings={strings} speed={typeSpeed} eraseSpeed={eraseSpeed} />;

}
