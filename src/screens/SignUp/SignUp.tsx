import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-[linear-gradient(123deg,rgba(50,205,50,1)_0%,rgba(74,222,128,1)_100%)] relative px-4 sm:px-8 lg:px-12 py-8 lg:py-0">
        <div className="flex flex-col items-center lg:items-start justify-center h-full max-w-xl w-full text-center lg:text-left" style={{ minHeight: '400px' }}>
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-10 w-full">
            <div className="flex items-center justify-center lg:justify-start mb-2 w-full">
              <img src="/assets/logo.png" alt="Transify Logo" className="w-[200px] sm:w-[250px] lg:w-[320px] mx-auto lg:mx-0" />
            </div>
          </div>
          {/* Heading */}
          <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold mb-6 lg:mb-[50px] leading-tight text-center lg:text-left">Start Your Journey</h1>
          {/* Subtitle */}
          <p className="text-white mb-8 lg:mb-10 max-w-[560px] opacity-90 font-light text-[18px] sm:text-[22px] lg:text-[26px] leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Join thousands of professionals using Transify to break language barriers and connect globally.
          </p>
          {/* Feature List */}
          <ul className="text-white text-[16px] sm:text-[20px] lg:text-[24px] space-y-3 lg:space-y-5 mb-0 pl-0 font-normal text-center lg:text-left w-full">
            <li className="flex items-center justify-center lg:justify-start"><svg className="mr-2 flex-shrink-0" width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#fff" fillOpacity="1"/><path d="M5.2 9l2.1 2.1L12.5 6.9" stroke="#32CD32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Free 14-day trial</li>
            <li className="flex items-center justify-center lg:justify-start"><svg className="mr-2 flex-shrink-0" width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#fff" fillOpacity="1"/><path d="M5.2 9l2.1 2.1L12.5 6.9" stroke="#32CD32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> No credit card required</li>
            <li className="flex items-center justify-center lg:justify-start"><svg className="mr-2 flex-shrink-0" width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="#fff" fillOpacity="1"/><path d="M5.2 9l2.1 2.1L12.5 6.9" stroke="#32CD32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Setup in under 5 minutes</li>
          </ul>
        </div>
        {/* Decorative Circles */}
        <div className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] top-[40px] sm:top-[60px] lg:top-[80px] right-[20px] sm:right-[50px] lg:right-[90px] bg-[#ffffff0d] rounded-full" />
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bottom-[40px] sm:bottom-[60px] lg:bottom-[80px] left-[20px] sm:left-[50px] lg:left-[80px] bg-[#ffffff0d] rounded-full" />
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-50 px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <form onSubmit={handleCreateAccount} className="w-full max-w-[597px] mx-auto">
          {/* Heading */}
          <h2 className="text-[#111827] text-[24px] sm:text-[28px] lg:text-[30px] font-bold mb-3 leading-tight">Create your account</h2>
          <p className="text-[#4B5563] text-[14px] sm:text-[15px] lg:text-[16px] mb-6 lg:mb-4 font-light">Get started with Transify today - it's free!</p>
          {/* Name fields */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2 text-[14px] sm:text-[15px] text-[#374151]">First name</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#9CA3AF"/></svg>
                </span>
                <Input className="pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] focus:border-green-400" placeholder="John" required />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-2 text-[14px] sm:text-[15px] text-[#374151]">Last name</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#9CA3AF"/></svg>
                </span>
                <Input className="pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] focus:border-green-400" placeholder="Doe" required />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-[14px] sm:text-[15px] text-[#374151]">Email address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.379l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5V9.121l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z" fill="#9CA3AF"/></svg>
              </span>
              <Input className="pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] focus:border-green-400" placeholder="john@company.com" type="email" required />
            </div>
          </div>
          {/* Company */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-[14px] sm:text-[15px] text-[#374151]">Company (optional)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h2v-2H7v2zm0 4h2v-2H7v2zm0-8h2V7H7v2zm4 4h2v-2h-2v2zm0 4h2v-2h-2v2zm0-8h2V7h-2v2zm4 4h2v-2h-2v2zm0 4h2v-2h-2v2zm0-8h2V7h-2v2z" fill="#9CA3AF"/></svg>
              </span>
              <Input className="pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] focus:border-green-400" placeholder="Your company" />
            </div>
          </div>
          {/* Password */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-[14px] sm:text-[15px] text-[#374151]">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17 10V7a5 5 0 0 0-10 0v3H5a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1h-1Zm-8-3a3 3 0 1 1 6 0v3H9V7Zm10 4v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8h14Zm-7 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#9CA3AF"/></svg>
              </span>
              <Input type="password" className="pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] focus:border-green-400" placeholder="Create a strong password" required />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 12c-4.418 0-7.364-3.134-8.484-5C4.636 8.134 7.582 5 12 5s7.364 3.134 8.484 5C19.364 13.866 16.418 17 12 17Zm0-10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#9CA3AF"/></svg>
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#6B7280] mt-2">Password must be at least 8 characters long</p>
          </div>
          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-1 mb-5">
            <Checkbox id="terms" className="rounded border-gray-300 mt-1 flex-shrink-0" />
            <label htmlFor="terms" className="text-[#4B5563] text-[13px] sm:text-[14px] lg:text-[15px] font-normal leading-relaxed">
              I agree to the <span className="text-[#32CD32] font-semibold cursor-pointer">Terms of Service</span> and <span className="text-[#32CD32] font-semibold cursor-pointer">Privacy Policy</span>
            </label>
          </div>
          {/* Create Account Button */}
          <Button type="submit" className="w-full px-6 h-[45px] bg-[#32CD32] hover:bg-[#2db82d] rounded-[10px] font-medium text-[15px] sm:text-[16px] lg:text-[17px] text-white flex items-center justify-center transition-colors shadow-none">
            Create Account <span className="ml-2 flex items-center"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </Button>
          {/* Divider */}
          <div className="flex items-center justify-center w-full my-6 lg:my-8">
            <div className="flex-grow h-px bg-[#D1D5DB]" />
            <span className="px-2 text-[#6B7280] text-[13px] sm:text-[14px] lg:text-[15px] font-normal">Or continue with</span>
            <div className="flex-grow h-px bg-[#D1D5DB]" />
          </div>
          {/* Google Button */}
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 pl-10 h-[45px] rounded-xl text-[15px] sm:text-[16px] lg:text-[17px] border border-[#D1D5DB] text-[#374151]">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </Button>
          {/* Sign in link */}
          <div className="flex justify-center mt-6 lg:mt-8 text-center">
            <p className="text-[#4B5563] text-[14px] sm:text-[15px] lg:text-[16px]">
              Already have an account?{' '}
              <button type="button" onClick={handleSignIn} className="text-[#32cd32] hover:underline font-semibold">
                Sign in here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};