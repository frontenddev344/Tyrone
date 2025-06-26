import React from "react";
import { Button } from "../../../../components/ui/button";

interface WelcomeStepProps {
  onGetStarted: () => void;
}

export const WelcomeStep = ({ onGetStarted }: WelcomeStepProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Top Bar */}
      <div className="" style={{ boxShadow: '0 2px 8px 0 rgba(16,30,54,.03)' }}>
        <div className="w-full max-w-[939px] mx-auto px-8 flex items-center justify-between px-0 py-6 bg-white flex-wrap" >
          {/* Logo */}
          <div className="flex items-center">
            <img src="/assets/logi-dark.png" alt="Transify Logo" className="w-[161px] mr-3" />
          </div>
          
          {/* Step Text */}
          <div className="text-[#6B7280] text-[15px] font-normal">Step 1 of 5</div>
          {/* Progress Bar */}
          <div className="  w-full mt-3">
            <div className="w-full  h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1 bg-[#32cd32] rounded-full" style={{ width: '20%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Rocket Icon in Green Circle */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-28 h-28 rounded-full bg-[#32cd32] flex items-center justify-center">
            {/* Rocket SVG */}
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7593 40.736L13.5514 37.5281C12.669 36.6457 12.3575 35.3687 12.752 34.1852C13.0635 33.2613 13.4787 32.057 13.977 30.6763H2.99329C2.10048 30.6763 1.26995 30.1987 0.823537 29.4201C0.377127 28.6415 0.387509 27.6863 0.8443 26.9181L6.29465 17.7304C7.64426 15.4568 10.0839 14.0657 12.7209 14.0657H21.2649C21.5141 13.6504 21.7633 13.2663 22.0124 12.8925C30.515 0.351541 43.1805 -0.0637229 50.7384 1.32741C51.9426 1.54543 52.877 2.49016 53.1054 3.69442C54.4965 11.2626 54.0709 23.9178 41.5402 32.4204C41.1769 32.6695 40.7824 32.9187 40.3671 33.1678V41.7119C40.3671 44.3489 38.976 46.7989 36.7024 48.1381L27.5147 53.5885C26.7464 54.0453 25.7913 54.0557 25.0127 53.6093C24.2341 53.1628 23.7565 52.3427 23.7565 51.4395V40.3104C22.2927 40.8191 21.0158 41.2344 20.0503 41.5458C18.8876 41.9196 17.621 41.5977 16.7489 40.736H16.7593ZM40.3671 18.2183C41.4685 18.2183 42.5247 17.7808 43.3035 17.002C44.0823 16.2233 44.5198 15.167 44.5198 14.0657C44.5198 12.9643 44.0823 11.9081 43.3035 11.1293C42.5247 10.3505 41.4685 9.91301 40.3671 9.91301C39.2658 9.91301 38.2095 10.3505 37.4308 11.1293C36.652 11.9081 36.2145 12.9643 36.2145 14.0657C36.2145 15.167 36.652 16.2233 37.4308 17.002C38.2095 17.7808 39.2658 18.2183 40.3671 18.2183Z" fill="white"/>
            </svg>

          </div>
        </div>
        {/* Heading */}
        <h1 className="text-[53px] font-bold text-[#111827] mb-4" style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome to Transify</h1>
        {/* Subtitle */}
        <p className="text-[#4B5563] text-[22px] mb-10 max-w-[705px] mx-auto" style={{ fontWeight: 400, lineHeight: '36px' }}>
          Let's build your perfect business toolkit in just a few minutes. We'll recommend the best tools based on your specific needs.
        </p>
        {/* Get Started Button */}
        <button
          onClick={onGetStarted}
          className="h-[66px] px-14 bg-gradient-to-r from-[#32cd32] to-[#4ade80] hover:from-[#28b428] hover:to-[#22c55e] hover:shadow-lg font-bold text-[22px] text-white flex items-center justify-center mx-auto transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none"
          style={{ boxShadow: 'none', borderRadius: '20px' }}
        >
          <span className="mr-4 flex items-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Get Started
        </button>
      </div>
    </div>
  );
};