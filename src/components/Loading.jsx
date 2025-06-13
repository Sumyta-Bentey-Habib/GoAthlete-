import React from 'react';
import loadingAnimation from "../assets/lottie/loading.json";
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
         <Lottie animationData={loadingAnimation}
         loop={true}   
         className="w-full h-80"
         ></Lottie> 
        </div>
    );
};

export default Loading;