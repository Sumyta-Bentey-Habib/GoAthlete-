import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../assets/suffle/imag1.jpg";
import img2 from "../assets/suffle/image2.jpeg";
import img3 from "../assets/suffle/image3.jpg";
import img4 from "../assets/suffle/image4.jpg";
import img5 from "../assets/suffle/image5.jpeg";
import img6 from "../assets/suffle/image6.webp";
import img7 from "../assets/suffle/image7.jpeg";
import img8 from "../assets/suffle/image8.jpeg";

const initialImagesOne = [img1, img2, img3, img4];
const initialImagesTwo =[img5,img6,img7,img8];

export default function ImageReordering() {
  const [order1, setOrder1] = useState(initialImagesOne);
  const [order2, setOrder2] = useState(initialImagesTwo
);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrder1(shuffle(order1));
      setOrder2(shuffle(order2));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [order1, order2]);

  return (
    <div style={outerContainer}>
    
      <ul style={container}>
        {order1.map((src, index) => (
          <motion.li key={`block1-${index}`} layout transition={spring} style={item}>
            <img
              src={src}
              alt="shuffled visual"
              style={imageStyle}
            />
          </motion.li>
        ))}
      </ul>


      <ul style={container}>
        {order2.map((src, index) => (
          <motion.li key={`block2-${index}`} layout transition={spring} style={item}>
            <img
              src={src}
              alt="shuffled visual"
              style={imageStyle}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};


const outerContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
  marginTop: "20px",
};

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 340,
  justifyContent: "center",
};

const item = {
  width: 150,
  height: 150,
  borderRadius: "10px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  objectFit: "cover",
};
