'use client';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy login validation (no real authentication)
    if (email === 'user@example.com' && password === 'password') {
      setLoginError('');
      alert('Login successful!');
      console.log('Login successful!');
    } else if (email !== 'user@example.com' && password === 'password') {
      setLoginError('Email does not exist');
      console.log('Email does not exist');
    } else {
      setLoginError('Incorrect Password');
      console.log('Incorrect Password attempted');
    }
  };

  return (
    <section>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
          <p className="text-center text-gray-600">Login to your account</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {loginError && (
              <p className="text-red-600 text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>

            <div className="flex justify-between items-center mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
              <button className="text-sm text-blue-600 hover:underline">
                Sign Up
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                className="flex-1 py-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300"
                aria-label="Sign in with Google"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <span className="text-gray-600">Google</span>
              </button>
              <a href="#" className="flex-1">
                <button
                  type="button"
                  className="w-full py-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300"
                  aria-label="Sign in with Microsoft"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                    <path fill="#F25022" d="M6 6H22V22H6z"></path>
                    <path fill="#7FBA00" d="M26 6H42V22H26z"></path>
                    <path fill="#00A4EF" d="M26 26H42V42H26z"></path>
                    <path fill="#FFB900" d="M6 26H22V42H6z"></path>
                  </svg>
                  <span className="text-gray-600">Microsoft</span>
                </button>
              </a>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </section>
  );
}