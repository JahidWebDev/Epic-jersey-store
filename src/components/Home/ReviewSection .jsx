import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jahid Hasan",
    role: "Football Lover",
    image: "https://i.pravatar.cc/300?img=12",
    review:
      "Quality onek valo chilo. Jersey fitting and print completely premium lagse!",
  },
  {
    id: 2,
    name: "Rakib Ahmed",
    role: "Barcelona Fan",
    image: "https://i.pravatar.cc/300?img=15",
    review:
      "Delivery fast chilo and fabric quality honestly awesome.",
  },
  {
    id: 3,
    name: "Siam Khan",
    role: "Real Madrid Fan",
    image: "https://i.pravatar.cc/300?img=18",
    review:
      "Player version jersey ta exactly original vibe dise.",
  },
];

const ReviewSection = () => {
  return (
    <div id="/reviews" className="  w-full  py-24 px-4 overflow-hidden">

      {/* Container */}
      <div className="max-w-full">

    <div className="text-center mb-16">

  <p className="uppercase tracking-[5px] text-sm text-gray-600 font-semibold">
    Customer Reviews
  </p>

  <h2 className="text-4xl md:text-6xl font-black text-black mt-4 leading-tight">
    What People Say
  </h2>

  <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-[16px] leading-8">
    Thousands of football lovers trust our premium jersey quality
    and customer support across Bangladesh.
  </p>

</div>

        {/* Slider */}
        <div className="relative overflow-hidden">

       

          {/* Slide */}
          <div className="flex gap-8 animate-slide w-max">

            {reviews.concat(reviews).map((item, index) => (
              <div
                key={index}
                className="
                  w-[340px] md:w-[420px]
                  bg-gradient-to-br from-[#111] to-[#1d1d1d]
                  rounded-[35px]
                  p-8
                  border border-white/10
                  
                  relative
                  overflow-hidden
                  group
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                {/* Quote */}
                <div className="absolute -top-5 right-6 text-[140px] text-white/5 font-bold">
                  ”
                </div>

                {/* User */}
                <div className="flex items-center gap-4 relative z-10">

                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-16 h-16
                      rounded-full
                      object-cover
                      border-4 border-white/10
                      group-hover:scale-110
                      transition-all
                      duration-500
                    "
                  />

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.role}
                    </p>
                  </div>

                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-7 text-yellow-400 relative z-10">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-9 mt-6 text-[15px] relative z-10">
                  “{item.review}”
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          .animate-slide {
            animation: slide 20s linear infinite;
          }

          .animate-slide:hover {
            animation-play-state: paused;
          }

          @keyframes slide {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default ReviewSection;