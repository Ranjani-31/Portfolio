import { useState } from "react";
import "./index.css"
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-screen text-white p-4 navbar">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-3">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></  li>
        </ul>
      )}
    </nav>
  );
}
