import React from "react";
import archer from "../assets/newsimages/archer.jpg";
import begainer from "../assets/newsimages/begainer.jpeg";
import commite from "../assets/newsimages/commite.jpg";
import recurverivalry from "../assets/newsimages/recurverivalry.jpg";
import teenarcher from "../assets/newsimages/teenarcher.jpg";
import carlosYulo from "../assets/newsimages/Carlos-Yulo.jpg";
import olympiceco from "../assets/newsimages/olympiceco.jpg";
import parisolympic from "../assets/newsimages/parisolympic.jpg";
import { Typewriter } from "react-simple-typewriter";

const NewsGrid = () => {
  const articles = [
    {
      id: 1,
      category: "Archery",
      date: { day: "10", month: "Jun" },
      title: "Team USA Archers Dominate World Cup Qualifiers",
      imageUrl: archer,
      big: true,
    },
    {
      id: 2,
      category: "Olympics",
      date: { day: "09", month: "Jun" },
      title: "Paris 2024: New Venues and Security Concerns",
      imageUrl: parisolympic,
    },
    {
      id: 3,
      category: "Archery",
      date: { day: "08", month: "Jun" },
      title: "Teen Archer Breaks World Record in Compound Bow Event",
      imageUrl: teenarcher,
    },
    {
      id: 4,
      category: "Olympics",
      date: { day: "07", month: "Jun" },
      title: "Olympic Committee Announces New Sport for 2032 Games",
      imageUrl: commite,
    },
    {
      id: 5,
      category: "Archery",
      date: { day: "06", month: "Jun" },
      title: "Recurve Rivalry Heats Up Ahead of National Championships",
      imageUrl: recurverivalry,
    },
    {
      id: 6,
      category: "Olympics",
      date: { day: "05", month: "Jun" },
      title: "Athlete Spotlight: From Local Hero to Olympic Hopeful",
      imageUrl: carlosYulo,
    },
    {
      id: 7,
      category: "Archery",
      date: { day: "04", month: "Jun" },
      title: "Beginner's Guide to Archery: Tips for Aspiring Archers",
      imageUrl: begainer,
    },
    {
      id: 8,
      category: "Olympics",
      date: { day: "03", month: "Jun" },
      title: "The Economic Impact of Hosting the Olympic Games",
      imageUrl: olympiceco,
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          <Typewriter
            words={["Explore News!", "Know More"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>

      <div className="max-w-screen-xl p-5 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          {articles.map(({ id, category, date, title, imageUrl, big }) => (
            <div
              key={id}
              className={`relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group ${
                big ? "md:col-span-2 lg:row-span-2 lg:h-full" : ""
              }`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-white bg-violet-600 bg-opacity-80 rounded"
                >
                  {category}
                </a>
                <div className="flex flex-col justify-start text-center text-white">
                  <span className="text-3xl font-semibold leading-none tracking-wide">
                    {date.day}
                  </span>
                  <span className="leading-none uppercase">{date.month}</span>
                </div>
              </div>

              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className={`font-medium text-md group-hover:underline text-white ${
                    big ? "lg:text-2xl lg:font-semibold" : ""
                  }`}
                >
                  {title}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
