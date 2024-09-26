'use client';
import { useState } from 'react';

const colors = {
    primary: '#1E5C37', // Forest Green
    secondary: '#F2F2F2', // Light Gray
    accent: '#FF6B35', // Vibrant Orange
    highlight: '#4ECDC4', // Turquoise
    brown: '#8B4513', // Brown
};

export default function Preregister() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setEmail('');
    setEmailError('');
    alert('Thank you for pre-registering!');
  };

  const validateEmail = (email: string): boolean => {
    // Basic email validation regex
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <section className="py-16 text-center" style={{ backgroundColor: colors.brown, marginTop: '12rem' }}>
      <h2 className="text-3xl font-bold mb-6" style={{ color: colors.secondary }}>Don&apos;t Miss Out!</h2>
      <p className="text-lg mb-8" style={{ color: colors.secondary }}>Get ready to elevate your cricket experience. Pre-register now:</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md w-full sm:w-auto"
          style={{ color: colors.primary, backgroundColor: colors.secondary }}
        />
        {emailError && <p className="text-sm" style={{ color: colors.accent }}>{emailError}</p>}
        <button type="submit" className="font-bold py-2 px-4 rounded-md" style={{ backgroundColor: colors.accent, color: colors.primary, transition: 'background-color 0.3s' }}>
          Pre-Register Now
        </button>
      </form>
    </section>
  );
}