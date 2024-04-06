import React from "react";
import useWindowSize from "../../resources/react/hooks/useWindowSize";
import Confetti from "react-confetti";

const FireworksConfetti = () => {
  const { width, height } = useWindowSize(
    window.innerWidth,
    window.innerHeight
  );
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      tweenDuration={10000}
      numberOfPieces={500}
      initialVelocityY={5}
      
    />
  );
};

export default FireworksConfetti;
