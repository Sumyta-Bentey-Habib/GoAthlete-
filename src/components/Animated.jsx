import React from "react";
import ImageReordering from "./ImageReordering";

const Animated = () => {
  return (
    <div className="flex items-center justify-center gap-10 p-5">
  
      <div className="text-4xl font-bold [writing-mode:vertical-rl] rotate-180">
        BECAUSE YOU MOVE
      </div>

      <ImageReordering />
    </div>
  );
};

export default Animated;
