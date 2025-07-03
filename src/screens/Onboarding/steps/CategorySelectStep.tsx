import React, { useState, useRef, useLayoutEffect } from "react";

const steps = [
  {
    title: "Choose a Category",
    description: "Select the main category that best fits your business or use case. This helps us tailor your onboarding experience.",
    box: "1",
    boxDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...",
  },
  {
    title: "Select Features",
    description: "Pick the features you want to use. We'll customize your experience.",
    box: "2",
    boxDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...",
  },
  {
    title: "Connect Tools",
    description: "Connect your favorite tools to get started quickly.",
    box: "3",
    boxDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...",
  },
  {
    title: "Finish Setup",
    description: "You're all set! Review and finish your onboarding.",
    box: "4",
    boxDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...",
  },
];

export const CategorySelectStep = ({ onNext, onClose }: { onNext?: () => void; onClose?: () => void }) => {
  const [tourStarted, setTourStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupPos, setPopupPos] = useState<{ left: number; top: number } | null>(null);
  const [popupHeight, setPopupHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (tourStarted && stepRefs.current[current]) {
      const stepBox = stepRefs.current[current];
      const rect = stepBox!.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;
      // Measure popup height after render
      let popupH = 0;
      if (popupRef.current) {
        popupH = popupRef.current.offsetHeight;
        setPopupHeight(popupH);
      } else {
        popupH = 200; // fallback default
      }
      const arrowHeight = 24; // px
      // Center popup horizontally above the step box
      const popupWidth = window.innerWidth < 640 ? 320 : 340;
      let left = rect.left + scrollX + rect.width / 2 - popupWidth / 2;
      // Clamp left to viewport
      left = Math.max(8, Math.min(left, window.innerWidth - popupWidth - 8));
      // Place popup just above the step box, but not above the top bar
      let top = rect.top + scrollY - popupH - arrowHeight;
      const minTop = 80; // px, to avoid top bar
      if (top < minTop) top = minTop;
      setPopupPos({ left, top });
    }
  }, [tourStarted, current]);

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
      <div className="flex-1 flex flex-col items-center justify-center w-full px-2 sm:px-4 py-6 sm:py-12" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
        {/* Welcome screen */}
        {!tourStarted && (
          <div className="flex flex-col items-center w-full px-2">
           {/* Icon */}
          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-[linear-gradient(123deg,rgba(50,205,50,1)_0%,rgba(74,222,128,1)_100%)] rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="10" rx="2" fill="#fff"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#32cd32"/></svg>
          </div>
          {/* Heading */}
          <h2 className="text-[24px] sm:text-[32px] lg:text-[39px] font-bold text-[#111827] mb-3 sm:mb-4 text-center" style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome to Transify</h2>
          {/* Subtitle */}
          <p className="text-[#4B5563] text-[15px] sm:text-[18px] lg:text-[22px] mb-6 sm:mb-8 lg:mb-10 mx-auto text-center max-w-[700px]" style={{ fontWeight: 400, lineHeight: '1.5' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          <button
              onClick={() => setTourStarted(true)}
              className="h-12 mb-10 sm:h-14 mx-auto px-6 sm:px-10 bg-gradient-to-r from-[#32cd32] to-[#4ade80] font-bold text-[15px] sm:text-[16px] lg:text-[17px] text-white flex items-center justify-center sm:ml-auto transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', boxShadow: 'none', letterSpacing: '-0.01em', borderRadius: '12px' }}
            >
              Start Tour
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full max-w-3xl">
              {steps.map((step, idx) => (
                <div key={idx} className="rounded-xl border border-[#DEDEDE] bg-white px-4 py-6 sm:px-6 sm:py-8 shadow-sm flex flex-col items-center min-h-[140px] sm:min-h-[170px] w-full">
                  <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] flex items-center justify-center rounded-full bg-[#EBFAEB] text-[#32CD32] text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{step.box}</div>
                  <div className="text-[#606060] text-[14px] sm:text-[14px] text-center" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{step.boxDesc}</div>
                </div>
              ))}
            </div>
            
          </div>
        )}
        {/* Tour popup flow */}
        {tourStarted && (
          <>
            {/* Dimmed overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-60 z-40"></div>
            {/* Steps grid, dimmed except for popup */}
            <div className="relative z-50 w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-20 px-2">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  ref={el => stepRefs.current[idx] = el}
                  className={`rounded-xl border bg-white px-4 py-6 sm:px-6 sm:py-8 shadow-md flex flex-col items-center min-h-[140px] sm:min-h-[170px] w-full transition-all duration-200
                    ${current === idx ? 'border-[#32CD32] shadow-2xl z-50 relative' : 'border-[#E5E7EB] opacity-60'}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#EBFAEB] text-[#32CD32] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.box}</div>
                  <div className="text-[#22223B] text-[14px] sm:text-[15px] text-center">{step.boxDesc}</div>
                </div>
              ))}
            </div>
            {/* Popup above current step */}
            {popupPos && (
              <div
                ref={popupRef}
                className="fixed z-[100] w-full max-w-xs sm:max-w-[340px]"
                style={{
                  left: popupPos.left,
                  top: popupPos.top,
                }}
              >
                <div className="relative bg-white rounded-2xl shadow-xl px-4 sm:px-6 pt-5 pb-6 animate-fadeIn">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#6B7280] text-[15px]">{current + 1} of 4</span>
                    {onClose && (
                      <button onClick={onClose} className="text-[#6B7280] text-xl font-bold hover:text-black focus:outline-none">×</button>
                    )}
                  </div>
                  {/* Title */}
                  <div className="mb-2">
                    <span className="text-[16px] sm:text-[18px] font-bold text-[#111827] flex items-center">
                      <span className="mr-2">🎯</span> {steps[current].title}
                    </span>
                  </div>
                  {/* Description */}
                  <div className="text-[#4B5563] text-[14px] sm:text-[15px] mb-6">
                    {steps[current].description}
                  </div>
                  {/* Navigation */}
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                      disabled={current === 0}
                      className={`h-10 px-4 sm:px-5 rounded-lg font-bold text-[14px] sm:text-[15px] transition ${current === 0 ? 'bg-[#E5E7EB] text-[#A1A1AA] cursor-not-allowed' : 'bg-[#22223B] text-white hover:bg-[#111827]'}`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        if (current < steps.length - 1) setCurrent((c) => c + 1);
                        else if (onNext) onNext();
                      }}
                      className="h-10 px-4 sm:px-5 rounded-lg font-bold text-[14px] sm:text-[15px] bg-[linear-gradient(123deg,rgba(50,205,50,1)_0%,rgba(74,222,128,1)_100%)] text-white hover:bg-[#111827]"
                    >
                      {current === steps.length - 1 ? 'Finish' : 'Next'}
                    </button>
                  </div>
                  {/* Arrow Pointer */}
                  <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-6 h-6 overflow-hidden z-50">
                    <div className="w-6 h-6 bg-white rotate-45 shadow-xl mx-auto" style={{ marginTop: '-12px' }}></div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}; 