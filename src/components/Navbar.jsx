import { useState, useEffect } from "react";
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

  // ✅ Prevent background scroll when menu open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

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

          {/* MOBILE */}
          <div className="flex lg:hidden items-center justify-between py-3 relative">

            <button
              onClick={() => setShowMenu(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-full font-semibold shadow-md"
            >
              <FiMenu className="text-[22px]" />
              <span className="text-sm">Menu</span>
            </button>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-4xl font-black tracking-tight text-black">
                JAHID
              </h1>
            </Link>

            <div className="relative cursor-pointer">
              <FiShoppingBag className="text-[26px] text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center justify-between gap-8 py-4">

            <div className="flex items-center gap-14">

              <Link to="/">
                <h1 className="text-5xl font-black tracking-tight text-black">
                  JAHID
                </h1>
              </Link>

              <ul className="flex items-center gap-10 text-[17px] font-semibold text-gray-700">

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>

                <li>
                  <Link to="/why-us">Why Us</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

              </ul>
            </div>

            <div className="flex items-center gap-6 flex-1 justify-end">

              <div className="flex items-center bg-[#f7f7f7] border border-gray-300 rounded-full px-6 py-3 w-full max-w-[650px]">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
                <FiSearch className="text-gray-500 text-[24px]" />
              </div>

              <FiShoppingBag className="text-[28px]" />

              <div className="relative w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FiHeart className="text-white text-[26px]" />
              </div>

            </div>

          </div>
        </div>

        {/* SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[999] shadow-2xl transition-transform duration-300 overflow-y-auto ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b sticky top-0 bg-white z-10">

            <h2 className="text-3xl font-black">ECH</h2>

            <button
              onClick={() => setShowMenu(false)}
              className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
            >
              <FiX className="text-[24px]" />
            </button>

          </div>

          {/* MENU */}
          <ul className="flex flex-col px-4 gap-2 py-4">

            <li>
              <Link onClick={() => setShowMenu(false)} to="/about">
                About
              </Link>
            </li>

            <li>
              <Link onClick={() => setShowMenu(false)} to="/reviews">
                Reviews
              </Link>
            </li>

            <li>
              <Link onClick={() => setShowMenu(false)} to="/why-us">
                Why Us
              </Link>
            </li>

            <li>
              <Link onClick={() => setShowMenu(false)} to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* OVERLAY FIX */}
        {showMenu && (
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 bg-black/40 z-[998]"
          />
        )}

      </nav>
    </div>
  );
};

export default Navbar;