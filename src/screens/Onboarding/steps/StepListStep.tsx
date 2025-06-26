import React, { useState } from "react";

const steps = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
];

export const StepListStep = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState(2);

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif' }}>
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
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
        {/* Heading */}
        <h1 className="text-[53px] font-bold text-[#111827] mb-4" style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome to Transify</h1>
        {/* Subtitle */}
        <p className="text-[#4B5563] text-[22px] mb-10 max-w-[705px] mx-auto" style={{ fontWeight: 400, lineHeight: '36px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        {/* Steps List */}
        <div className="flex flex-col items-center w-full max-w-2xl mb-12">
          {steps.map((text, idx) => {
            const isActive = idx === selected;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelected(idx)}
                className="flex items-center w-full mb-6 last:mb-0 group focus:outline-none"
                tabIndex={0}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#32cd32] flex items-center justify-center text-white text-[32px] font-medium mr-6" style={{ fontWeight: 700 , fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif'}}>
                  {idx + 1}
                </div>
                {/* Arrow Bubble */}
                <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-2 mr-0">
                  <polygon points="0,20 18,10 18,30" stroke="#32cd3233" fill={isActive ? '#A6E9A6' : 'rgba(50, 205, 50, 0.05)'} />
                </svg>
                {/* Step Box */}
                <div
                  className={`flex-1 bg-[rgba(50, 205, 50, 0.05)] flex items-center justify-center py-5 px-[50px] transition-all duration-150 ${isActive ? 'bg-[#A6E9A6] text-[#000] font-bold' : 'bg-[rgba(50, 205, 50, 0.05)] text-[#1a2330] font-normal border border-[#32cd3233]'} text-[18px]`}
                  style={{fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',   fontWeight: isActive ? 500 : 400, boxShadow: isActive ? '0 2px 8px 0 rgba(50,205,50,0.08)' : 'none'}}
                >
                  {text}
                </div>
              </button>
            );
          })}
        </div>
        {/* Next Button */}
        <button
          onClick={onNext}
          className="h-[66px] px-14 bg-gradient-to-r from-[#32cd32] to-[#4ade80] hover:from-[#28b428] hover:to-[#22c55e] hover:shadow-lg font-bold text-[22px] text-white flex items-center justify-center mx-auto transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none"
          style={{ boxShadow: 'none', borderRadius: '20px' }}
        >
          <span className="mr-3 flex items-center">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Next
        </button>
      </div>
    </div>
  );
}; 