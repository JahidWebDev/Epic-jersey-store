import  { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full font-sans">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center py-4 text-[17px] font-medium tracking-wide px-4">
        অরিজিনাল প্রোডাক্ট, ফাস্ট ডেলিভারি, সহজ রিটার্ন - এটাই
        <span className="font-bold ml-1">Echostore</span>
      </div>

      {/* NAVBAR */}
      <nav className="bg-[#f5f5f5] border-b border-gray-200 sticky top-0 z-50">

        <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10">

          {/* ================= MOBILE NAVBAR ================= */}
          <div className="flex lg:hidden items-center justify-between py-3 relative">

            {/* MENU BUTTON */}
            <button
              onClick={() => setShowMenu(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-full font-semibold shadow-md"
            >
              <FiMenu className="text-[22px]" />
              <span className="text-sm">Menu</span>
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-4xl font-black tracking-tight text-black">
                ECH
              </h1>
            </Link>

            {/* CART */}
            <div className="relative cursor-pointer">
              <FiShoppingBag className="text-[26px] text-black" />

              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* ================= DESKTOP NAVBAR ================= */}
          <div className="hidden lg:flex items-center justify-between gap-8 py-4">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-14">

              {/* LOGO */}
              <Link to="/">
                <h1 className="text-5xl font-black tracking-tight text-black">
                  ECH
                </h1>
              </Link>

              {/* MENU */}
              <ul className="flex items-center gap-10 text-[17px] font-semibold text-gray-700">

                <li>
                  <Link
                    to="/about"
                    className="hover:text-black transition-all duration-300"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/reviews"
                    className="hover:text-black transition-all duration-300"
                  >
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link
                    to="/why-us"
                    className="hover:text-black transition-all duration-300"
                  >
                    Why Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-black transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6 flex-1 justify-end">

              {/* SEARCH */}
              <div className="flex items-center bg-[#f7f7f7] border border-gray-300 rounded-full px-6 py-3 w-full max-w-[650px]">

                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
                />

                <button className="text-gray-500 text-[24px]">
                  <FiSearch />
                </button>
              </div>

              {/* CART */}
              <div className="flex items-center gap-3 cursor-pointer">

                <div className="relative">
                  <FiShoppingBag className="text-[28px] text-black" />

                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>

                <span className="font-semibold text-gray-800 text-[17px]">
                  0.00৳
                </span>
              </div>

              {/* WISHLIST */}
              <div className="relative w-14 h-14 rounded-full bg-black flex items-center justify-center cursor-pointer">

                <FiHeart className="text-white text-[26px]" />

                <span className="absolute top-0 right-0 bg-white border border-gray-300 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE SIDEBAR ================= */}
       {/* ================= MOBILE SIDEBAR ================= */}
<div
  className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[999] shadow-2xl transition-all duration-300 overflow-y-auto ${
    showMenu ? "translate-x-0" : "-translate-x-full"
  }`}
>

  {/* HEADER */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white sticky top-0 z-10">

    {/* LOGO */}
    <h2 className="text-3xl font-black tracking-tight text-black">
      ECH
    </h2>

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setShowMenu(false)}
      className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:rotate-90 transition-all duration-300 shadow-lg"
    >
      <FiX className="text-[24px]" />
    </button>
  </div>

  {/* SEARCH */}
  <div className="p-5">

    <div className="flex items-center bg-[#f7f7f7] border border-gray-200 rounded-2xl px-4 py-3 shadow-sm focus-within:border-black transition-all">

      <input
        type="text"
        placeholder="Search for products"
        className="w-full bg-transparent outline-none text-[15px] text-gray-700 placeholder:text-gray-400"
      />

      <button className="text-gray-500 hover:text-black transition-all">
        <FiSearch className="text-[22px]" />
      </button>
    </div>
  </div>

  {/* MENU TITLE */}
  <div className="px-5 pb-3">
    <h3 className="text-[13px] uppercase tracking-[3px] text-gray-400 font-bold">
      Main Menu
    </h3>
  </div>

  {/* MENU ITEMS */}
  <ul className="flex flex-col px-4 gap-2">

    <li>
      <Link
        to="/about"
        onClick={() => setShowMenu(false)}
        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#f8f8f8] hover:bg-black hover:text-white transition-all duration-300 group"
      >
        <span className="font-semibold text-[16px]">
          About
        </span>

        <span className="text-xl opacity-50 group-hover:translate-x-1 transition-all">
          →
        </span>
      </Link>
    </li>

    <li>
      <Link
        to="/reviews"
        onClick={() => setShowMenu(false)}
        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#f8f8f8] hover:bg-black hover:text-white transition-all duration-300 group"
      >
        <span className="font-semibold text-[16px]">
          Reviews
        </span>

        <span className="text-xl opacity-50 group-hover:translate-x-1 transition-all">
          →
        </span>
      </Link>
    </li>

    <li>
      <Link
        to="/why-us"
        onClick={() => setShowMenu(false)}
        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#f8f8f8] hover:bg-black hover:text-white transition-all duration-300 group"
      >
        <span className="font-semibold text-[16px]">
          Why Us
        </span>

        <span className="text-xl opacity-50 group-hover:translate-x-1 transition-all">
          →
        </span>
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        onClick={() => setShowMenu(false)}
        className="flex items-center justify-between px-5 py-4 rounded-2xl bg-[#f8f8f8] hover:bg-black hover:text-white transition-all duration-300 group"
      >
        <span className="font-semibold text-[16px]">
          Contact
        </span>

        <span className="text-xl opacity-50 group-hover:translate-x-1 transition-all">
          →
        </span>
      </Link>
    </li>
  </ul>

  {/* CATEGORY SECTION */}
  <div className="px-5 pt-8 pb-3">
    <h3 className="text-[13px] uppercase tracking-[3px] text-gray-400 font-bold">
      Categories
    </h3>
  </div>

  {/* CATEGORY ITEMS */}
 
<div className="px-4 grid grid-cols-2 gap-3 pb-8">

  <Link
    to="/category/jersey"
    className="bg-black text-white rounded-2xl py-4 font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-900 active:scale-95"
  >
    Jersey
  </Link>

  <Link
    to="/category/shoes"
    className="bg-[#f3f3f3] text-black rounded-2xl py-4 font-semibold text-center transition-all duration-300 
    hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl active:scale-95"
  >
    Shoes
  </Link>

  <Link
    to="/category/football"
    className="bg-[#f3f3f3] text-black rounded-2xl py-4 font-semibold text-center transition-all duration-300 
    hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl active:scale-95"
  >
    Football
  </Link>

  <Link
    to="/category/accessories"
    className="bg-[#f3f3f3] text-black rounded-2xl py-4 font-semibold text-center transition-all duration-300 
    hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl active:scale-95"
  >
    Accessories
  </Link>

</div>
</div>

        {/* OVERLAY */}
        {showMenu && (
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black/40 z-[998] lg:hidden"
          ></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;