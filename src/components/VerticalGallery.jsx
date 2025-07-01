import { useState } from "react";

export default function UserReviewsGallery() {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = ({ currentIdx }) =>
    setIsOpen((prevIdx) => (prevIdx === currentIdx ? null : currentIdx));

  const reviews = [
    {
      img: "https://i.ibb.co/fYVRMvKh/istockphoto-1496615445-612x612.jpg",
      name: "Jane Doe",
      date: "June 5, 2025",
      text: "GoAthlete helped me find the perfect events to grow my skills. Highly recommended!",
    },
    {
      img: "https://i.ibb.co/XZVdtN8h/pexels-photo-2379005.jpg",
      name: "John Smith",
      date: "May 20, 2025",
      text: "A fantastic platform with great community support. Booking events is super easy.",
    },
    {
      img: "https://i.ibb.co/gMsdCqbJ/istockphoto-1496613385-612x612.jpg",
      name: "Sarah Lee",
      date: "April 15, 2025",
      text: "The best place to stay updated on upcoming sports events. I love it!",
    },
    {
      img: "https://i.ibb.co/jP2hQb77/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      name: "Michael Brown",
      date: "March 30, 2025",
      text: "Connecting with athletes and organizers has never been easier. Great job, GoAthlete!",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">Voices of Our Community</h1>
      <p className="font-bold text-center mb-6" >Real stories from athletes and organizers who’ve experienced GoAthlete firsthand.</p>
      <div className="flex justify-center gap-1 md:gap-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            onClick={() => toggle({ currentIdx: idx })}
            className={`relative cursor-pointer overflow-hidden rounded-3xl bg-gray-300 duration-500 ease-in-out ${
              isOpen === idx ? "w-[300px] md:w-[400px]" : "w-[100px]"
            } h-[400px]`}
          >
            {/* User Image */}
            <img
              className="h-full w-full object-cover rounded-3xl"
              src={review.img}
              alt={review.name}
            />

            {/* Circle thumbnail */}
            <img
              className={`absolute bottom-5 border border-white transition-all duration-500 md:border-2 ${
                isOpen === idx
                  ? "left-4"
                  : "left-1/2 -translate-x-1/2 duration-700"
              } h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]`}
              src={review.img}
              alt={review.name}
            />

            {/* Review info */}
            <div
              className={`absolute bottom-5 text-gray-900 bg-white bg-opacity-90 rounded-lg shadow-md transition-all duration-300 px-4 py-3 ${
                isOpen === idx
                  ? "left-4 md:left-6 opacity-100 max-w-[260px]"
                  : "left-1/2 -translate-x-1/2 opacity-0"
              }`}
              style={{ fontSize: "1rem", lineHeight: "1.4", fontWeight: "500" }}
            >
              <h3 className="text-lg font-semibold md:text-2xl">{review.name}</h3>
              <p className="text-xs md:text-sm italic mb-2">{review.date}</p>
              <p className="text-sm md:text-base">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
