
import React from "react";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white pt-16 pb-8 shadow-[0_-8px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <img src="src/assets/image.png" className=" w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto" alt="Trosoft Logo" /> */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl object-cover">
              <img
                src={`${import.meta.env.BASE_URL}logos/trosoft1.jpeg`}
                alt="Trosoft Logo"
                className="w-20 h-20 "
              />
                 </div>
              <h2 className="text-2xl font-bold tracking-wide">Trosoft</h2>
            </div>
            <p className="text-white/90 text-sm leading-6">
              We help your business grow with powerful digital solutions and modern technology.
            </p>
          </div>

          {/* MOBILE ONLY: Quick Links + Services side-by-side */}
          <div className="flex justify-between gap-8 w-full md:hidden">

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white">Services</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li><NavLink to="/service/web" className="hover:text-white">Web Development</NavLink></li>
                <li><NavLink to="/service/marketing" className="hover:text-white">Digital Marketing</NavLink></li>
                <li><NavLink to="/service/design" className="hover:text-white">UI/UX Design</NavLink></li>
                <li><NavLink to="/service/seo" className="hover:text-white">SEO Optimization</NavLink></li>
              </ul>
            </div>

          </div>

          {/* DESKTOP/TABLET ORIGINAL LAYOUT */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-white/90 text-sm">
              <li><NavLink to="/service/web" className="hover:text-white">Web Development</NavLink></li>
              <li><NavLink to="/service/marketing" className="hover:text-white">Digital Marketing</NavLink></li>
              <li><NavLink to="/service/design" className="hover:text-white">UI/UX Design</NavLink></li>
              <li><NavLink to="/service/seo" className="hover:text-white">SEO Optimization</NavLink></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Subscribe</h3>
            <p className="text-sm text-white/90 mb-4">Get updates & offers.</p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 text-white px-3 py-2 rounded-md w-full placeholder-white/70 focus:outline-none"
              />
              <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-white/20 pt-5 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Trosoft. All rights reserved.
      </div>
    </footer>
  );
}
