import React from "react";

export const CategorySelectStep = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
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
      <div className="flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-4 py-6 sm:py-12">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[38px] lg:text-[53px] font-bold text-[#111827] mb-3 sm:mb-4" style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome to Transify</h1>
        {/* Subtitle */}
        <p className="text-[#4B5563] text-[15px] sm:text-[18px] lg:text-[22px] mb-6 sm:mb-8 lg:mb-10 max-w-[705px] mx-auto" style={{ fontWeight: 400, lineHeight: '1.5' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        {/* Card with YouTube video only */}
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center mb-6 sm:mb-10" style={{ boxShadow: '0 4px 32px 0 rgba(16,30,54,.08)', borderRadius: '20px' }}>
          {/* YouTube Video */}
          <div className="relative flex justify-center items-center w-full border border-[#E6E6E6] rounded-[16px] sm:rounded-[20px]">
            <div className="w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                className="rounded-2xl w-full h-full object-cover shadow min-h-[180px] sm:min-h-[260px] lg:min-h-[340px]"
                style={{ boxShadow: '0 2px 16px 0 rgba(16,30,54,.08)' }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Next Button */}
        <button
          onClick={onNext}
          className="h-12 sm:h-[58px] lg:h-[66px] px-8 sm:px-12 lg:px-14 bg-gradient-to-r from-[#32cd32] to-[#4ade80] hover:from-[#28b428] hover:to-[#22c55e] hover:shadow-lg font-bold text-[16px] sm:text-[19px] lg:text-[22px] text-white flex items-center justify-center mx-auto transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none rounded-[14px] sm:rounded-[18px] lg:rounded-[20px]"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', boxShadow: 'none', letterSpacing: '-0.01em' }}
        >
          <span className="mr-2 sm:mr-3 lg:mr-4 flex items-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Next
        </button>
      </div>
    </div>
  );
}; 