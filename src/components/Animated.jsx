import React from "react";
import ImageReordering from "./ImageReordering";

const Animated = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 p-5">
   
      <div className="text-2xl md:text-4xl font-bold md:[writing-mode:vertical-rl] md:rotate-180 text-center md:text-left">
        DRIVEN BY MOTION
      </div>

      <ImageReordering />
    </div>
  );
};

export default Animated;
