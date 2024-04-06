// BackgroundCircle.tsx
import React from "react";

interface Props {
  color: string;
}

const BackgroundCircle: React.FC<Props> = ({ color }) => {
 
  return <div className={`absolute left-0 right-0 top-0 -z-10 m-auto  w-1/2 aspect-square rounded-full ${`${color}`} opacity-20 blur-[100px]`} ></div>;
};

export default BackgroundCircle;
