import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookMessenger
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">

      {/* WRAPPER */}
      <div className="max-w-[1800px] mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">রিটার্ন পলিসি</li>
              <li className="hover:text-white cursor-pointer">রিফান্ড পলিসি</li>
              <li className="hover:text-white cursor-pointer">কোম্পানি সম্পর্কে</li>
              <li className="hover:text-white cursor-pointer">পাইকার/রিসেলার হন</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>

            <div className="space-y-3 text-gray-300">

            <p className="flex items-center gap-2">
  <FaMapMarkerAlt /> টাঙ্গাইল, ভুয়াপুর, বাংলাদেশ
</p>

              <p className="flex items-center gap-2">
                <FaFacebookMessenger /> মেসেঞ্জারে যোগাযোগ করুন
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt /> কল করুন: 01877767182
              </p>

            </div>
          </div>

          {/* ABOUT + SOCIAL */}
          <div>
            <h2 className="text-lg font-bold mb-4">Echo Store</h2>

            <p className="text-gray-400 text-sm leading-6">
              Echo Store is your trusted destination for original football jerseys and kits.
              We deliver premium quality products at affordable prices, with fast delivery
              and an easy return process—so you can shop with confidence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">

              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-red-600 transition">
                <FaYoutube />
              </a>

              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-pink-600 transition">
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-white/10 pt-5">
          © {new Date().getFullYear()} Echo Store. All rights reserved.
        </div>

      </div>
    </footer>
  );
}