import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { GiTrousers } from "react-icons/gi";
import { MdOutlineCollections } from "react-icons/md";

import img1 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img2 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img3 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img4 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img5 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img6 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img7 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img8 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img9 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img10 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img11 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img12 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img13 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img14 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img15 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import img16 from "../../images/Gemini_Generated_Image_jd69gdjd69gdjd69 (1).png";
import ReviewSection from "./ReviewSection ";

const products = [
  { id: 1, name: "AC MILAN", price: 299, img: img1 },
  { id: 2, name: "Argentina Home", price: 350, img: img2 },
  { id: 3, name: "Arsenal Jersey", price: 299, img: img3 },
  { id: 4, name: "Argentina Player Edition", price: 999, img: img4 },
  { id: 5, name: "Barcelona Home", price: 299, img: img5 },
  { id: 6, name: "Real Madrid", price: 299, img: img6 },
  { id: 7, name: "Liverpool Kit", price: 299, img: img7 },
  { id: 8, name: "PSG Jersey", price: 299, img: img8 },
  { id: 9, name: "Chelsea Kit", price: 299, img: img9 },
  { id: 10, name: "Bayern Munich", price: 299, img: img10 },
  { id: 11, name: "Juventus", price: 299, img: img11 },
  { id: 12, name: "Brazil Home", price: 350, img: img12 },
  { id: 13, name: "Germany Kit", price: 350, img: img13 },
  { id: 14, name: "Portugal CR7", price: 999, img: img14 },
  { id: 15, name: "Netherlands", price: 299, img: img15 },
  { id: 16, name: "France Mbappe", price: 999, img: img16 },
];

const Home = () => {
  const [visible, setVisible] = useState(8);

  return (
    <div className="flex flex-col items-center px-4 py-10 ">

      {/* CATEGORY */}
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center text-gray-800">
        Shop by Categories
      </h1>

      <div className="w-full max-w-6xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Full Sleeve */}
    <Link
      to="/category/full-sleeve-jersey"
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black to-gray-800 p-8 text-white shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
          <FaTshirt className="text-5xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Full Sleeve</h2>
          <p className="text-sm text-gray-300 mt-1">
            Premium football jersey
          </p>
        </div>
      </div>
    </Link>

    {/* Half Sleeve */}
    <Link
      to="/category/half-sleeve-jersey"
      className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div className="w-20 h-20 rounded-2xl bg-black text-white flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
          <FaTshirt className="text-5xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Half Sleeve
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Stylish sports jersey
          </p>
        </div>
      </div>
    </Link>

    {/* Short Pants */}
    <Link
      to="/category/short-pants"
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 p-8 shadow-lg hover:scale-105 transition-all duration-300"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div className="w-20 h-20 rounded-2xl bg-black text-white flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
          <GiTrousers className="text-5xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Short Pants
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Comfortable match shorts
          </p>
        </div>
      </div>
    </Link>

    {/* Collections */}
    <Link
      to="/collections"
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-5">
        <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
          <MdOutlineCollections className="text-5xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Collections
          </h2>
          <p className="text-sm text-orange-100 mt-1">
            Explore all products
          </p>
        </div>
      </div>
    </Link>

  </div>
</div>

      {/* PRODUCTS */}
      <div className="w-full max-w-[1700px] mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Bestselling Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.slice(0, visible).map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="h-[500px] bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-90 w-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1 justify-between">

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.name}
                  </h3>

                  <p className="text-gray-700 font-bold">
                    {item.price}.00৳
                  </p>
                </div>

                <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
                  View Details
                </button>

              </div>

            </Link>
          ))}

        </div>

        {/* LOAD MORE */}
        {visible < products.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisible(16)}
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}

      </div>
   <ReviewSection/>
    </div>
  );
};

export default Home;