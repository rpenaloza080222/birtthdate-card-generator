// BackgroundCircleNotInset.tsx
import React from "react";
import "./BackgroundCircleNotInset.css"

interface Props {
  color: string;
  className?: string
}

const BackgroundCircleNotInset: React.FC<Props> = ({ color, className }) => {
  console.log("Clases ", className)
  return <div className={`absolute right-[-167px] md:group-hover:top-0 md:group-hover:right-0 transtion-all duration-300 top-[-183px]  h-full w-full rounded-full ${`${color}`} opacity-65 md:opacity-35 blur-[100px] ${className}`} ></div>;
};

export default BackgroundCircleNotInset;
