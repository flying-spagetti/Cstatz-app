import React from 'react';
import Link from 'next/link';

const colors = {
  primary: '#000000', // Black
  secondary: '#F2F2F2', // Light Gray
  accent: '#b05d51', // Vibrant Orange
  highlight: '#4ECDC4', // Turquoise
  brown: '#8B4513', // Brown
  teal: '#008080', // Teal
};

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <aside className="mb-10">
          <h2 className="text-3xl font-extrabold mb-2" style={{ color: colors.teal }}>CStatz</h2>
          <p className="text-lg mb-4">Premier cricket analysis platform</p>
          <p className="text-sm">
            Gnaneswar Lopinti, <span className="font-semibold">CEO & Founder</span>
          </p>
          <div className="flex items-center mt-6 space-x-6">
            <a
              href="https://twitter.com/ImGnAn_30"
              className="transition-colors duration-300 hover:text-accent"
              style={{ ':hover': { color: colors.accent } }}
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.58.59-2.44.69a4.48 4.48 0 0 0 1.95-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.67 4.08 12.7 12.7 0 0 1-9.2-4.65 4.49 4.49 0 0 0 1.39 5.97 4.48 4.48 0 0 1-2.03-.56c-.05 1.96 1.37 3.79 3.4 4.2a4.52 4.52 0 0 1-2.02.08 4.49 4.49 0 0 0 4.18 3.12A9 9 0 0 1 2 19.54a12.71 12.71 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.4-.02-.59A9.13 9.13 0 0 0 24 4.56a8.92 8.92 0 0 1-2.54.7z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gnaneswar-lopinti-5bb480109/"
              className="transition-colors duration-300 hover:text-accent"
              style={{ ':hover': { color: colors.accent } }}
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.1 3H4.9A1.9 1.9 0 0 0 3 4.9v14.2A1.9 1.9 0 0 0 4.9 21h14.2a1.9 1.9 0 0 0 1.9-1.9V4.9A1.9 1.9 0 0 0 19.1 3zM8.3 18.1H5.6v-8.7h2.7v8.7zM7 8.8a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.4 9.3h-2.7v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H9.7v-8.7h2.5v1.2h.04c.35-.67 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.8z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/flying-spagetti"
              className="transition-colors duration-300 hover:text-accent"
              style={{ ':hover': { color: colors.accent } }}
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.14-3.37-1.14-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.51 9.51 0 0 1 12 6.5a9.52 9.52 0 0 1 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.71 1.03 1.61 1.03 2.7 0 3.84-2.34 4.69-4.57 4.94.36.31.68.93.68 1.87 0 1.35-.01 2.43-.01 2.76 0 .27.18.59.68.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
          </div>
        </aside>

        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.teal }}>Features</h3>
          <ul className="space-y-2">
            <li><Link href="/analysis" className="hover:text-accent transition-colors duration-300">Analysis</Link></li>
            <li><Link href="/features" className="hover:text-accent transition-colors duration-300">All Features</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.teal }}>Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-accent transition-colors duration-300">About us</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link></li>
            <li><Link href="/stats" className="hover:text-accent transition-colors duration-300">Stats of CStatz</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.teal }}>Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:text-accent transition-colors duration-300">Terms of use</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors duration-300">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}