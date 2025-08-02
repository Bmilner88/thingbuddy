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
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-base-300">
      <div className="px-6 flex justify-around items-center py-4">
        <button
          type="button"
          onClick={() => {
            console.log("init_feed");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="actions"
          >
            <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319" />
            <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
            <path d="M12 7c0 -1.2 .867 -4 3 -4" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("init_play");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="actions"
          >
            <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
            <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
            <path d="M12 7l0 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("init_change");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="actions"
          >
            <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("init_sleep");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="actions"
          >
            <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M10 11h4l-4 4h4" />
            <path d="M7 4l-2.75 2" />
            <path d="M17 4l2.75 2" />
          </svg>
        </button>
      </div>
      <div className="flex my-auto justify-center items-center">
        <img
          className="sprite h-auto w-[200px]"
          src={spriteState}
          alt="lilguy"
          onClick={onPet}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default App;
