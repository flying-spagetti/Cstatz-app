"use client";
import Link from 'next/link';
import { useState } from 'react';

const colors = {
  primary: '#000000', // Black
  secondary: '#F2F2F2', // Light Gray
  accent: '#bb4644', // Vibrant Orange
  highlight: '#4ECDC4', // Turquoise
  brown: '#8B4513', // Brown
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-xl fixed top-0 left-0 w-full z-50" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className="text-4xl font-extrabold cursor-pointer" style={{ color: colors.accent }}>
        <Link href="/">CStatz</Link>
      </div>
      <div className="flex justify-end">
        <div className="hidden md:flex items-center">
          <Link legacyBehavior href="/features">
            <a className="mr-6 transition duration-300 ease-in-out transform hover:scale-105" style={{ color: colors.secondary, ':hover': { color: colors.accent } }}>Features</a>
          </Link>
          <Link legacyBehavior href="/analysis">
            <a className="mr-6 transition duration-300 ease-in-out transform hover:scale-105" style={{ color: colors.secondary, ':hover': { color: colors.accent } }}>Analysis</a>
          </Link>
          <Link legacyBehavior href="/voting">
            <a className="mr-6 transition duration-300 ease-in-out transform hover:scale-105" style={{ color: colors.secondary, ':hover': { color: colors.accent } }}>Voting</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="mr-6 transition duration-300 ease-in-out transform hover:scale-105" style={{ color: colors.secondary, ':hover': { color: colors.accent } }}>About</a>
          </Link>
        </div>
        <Link legacyBehavior href="/login">
          <a className="font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" style={{ backgroundColor: colors.accent, color: colors.primary }}>Login</a>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
        title='Menu'
          className="outline-none mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8 transition duration-300 ease-in-out transform hover:scale-110"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke={colors.secondary}
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
  <div className="md:hidden absolute top-0 left-0 w-full z-20" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
    <ul className="flex flex-col items-center space-y-6 py-8">
      <li className="text-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-md" style={{ ':hover': { backgroundColor: colors.accent } }}>
        <Link legacyBehavior href="/features">
          <a className="block">Features</a>
        </Link>
      </li>
      <li className="text-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-md" style={{ ':hover': { backgroundColor: colors.accent } }}>
        <Link legacyBehavior href="/analysis">
          <a className="block">Analysis</a>
        </Link>
      </li>
      <li className="text-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-md" style={{ ':hover': { backgroundColor: colors.accent } }}>
        <Link legacyBehavior href="/voting">
          <a className="block">Voting</a>
        </Link>
      </li>
      <li className="text-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-md" style={{ ':hover': { backgroundColor: colors.accent } }}>
        <Link legacyBehavior href="/about">
          <a className="block">About</a>
        </Link>
      </li>
      <li className="text-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-md" style={{ backgroundColor: colors.accent }}>
        <Link legacyBehavior href="/login">
          <a className="block font-bold py-2 px-4 rounded" style={{ color: colors.primary }}>Login</a>
        </Link>
      </li>
    </ul>
  </div>
      )}
    </nav>
  );
};

export default Navbar;