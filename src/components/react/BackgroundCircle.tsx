// BackgroundCircle.tsx
import React from "react";

interface Props {
  color: string;
}

const BackgroundCircle: React.FC<Props> = ({ color }) => {
  const classesBg = `absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full ${`bg-${color}`} opacity-20 blur-[100px]`;
  return <div className={classesBg}></div>;
};

export default BackgroundCircle;
