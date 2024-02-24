// TextChangeColor.tsx
import React from 'react';

interface Props {
  message: string;
}

const TextChangeColor: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default TextChangeColor;
