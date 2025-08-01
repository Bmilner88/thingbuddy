import React from "react";
import { useState } from "react";

import IMAGES from "./images/Images";

const App: React.FC = () => {
  const [spriteState, useSpriteState] = useState(IMAGES.lilguy.idle);

  const onPet = () => {
    useSpriteState(IMAGES.lilguy.happy);
    setTimeout(() => {
      useSpriteState(IMAGES.lilguy.idle);
    }, 1380);
  };

  return (
    <div className="bg-base-300 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4">
        <img
          className="sprite h-auto w-[200px] col-span-4"
          src={spriteState}
          alt="lilguy"
          onClick={onPet}
          draggable={false}
        />
        <button
          type="button"
          className=""
          onClick={() => {
            console.log(1);
          }}
        >
          Test
        </button>
        <button
          type="button"
          className=""
          onClick={() => {
            console.log(2);
          }}
        >
          Test
        </button>
        <button
          type="button"
          className=""
          onClick={() => {
            console.log(3);
          }}
        >
          Test
        </button>
        <button
          type="button"
          className=""
          onClick={() => {
            console.log(4);
          }}
        >
          Test
        </button>
      </div>
    </div>
  );
};

export default App;
