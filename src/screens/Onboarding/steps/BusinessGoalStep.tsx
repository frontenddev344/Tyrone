import React, { useState } from "react";

const goals = [
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#E0E7FF] rounded-full flex items-center justify-center mr-4">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: "Launch",
    desc: "Getting your business off the ground with essential tools and processes",
    tags: [
      { label: "Basic CRM", color: "bg-[#DBEAFE] text-[#2563EB]" },
      { label: "Simple Analytics", color: "bg-[#DBEAFE] text-[#2563EB]" },
      { label: "Essential Marketing", color: "bg-[#DBEAFE] text-[#2563EB]" },
    ],
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center mr-4">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: "Scale",
    desc: "Growing your existing business with advanced tools and team collaboration",
    tags: [
      { label: "Advanced CRM", color: "bg-[#D1FAE5] text-[#16A34A]" },
      { label: "Team Management", color: "bg-[#D1FAE5] text-[#16A34A]" },
      { label: "Multi-channel Marketing", color: "bg-[#D1FAE5] text-[#16A34A]" },
    ],
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#F3E8FF] rounded-full flex items-center justify-center mr-4">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: "Automate",
    desc: "Streamlining operations with automation and integration tools for efficiency",
    tags: [
      { label: "Workflow Automation", color: "bg-[#F3E8FF] text-[#9333EA]" },
      { label: "Integration Tools", color: "bg-[#F3E8FF] text-[#9333EA]" },
      { label: "AI-powered Analytics", color: "bg-[#F3E8FF] text-[#9333EA]" },
    ],
  },
];

export const BusinessGoalStep = ({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) => {
  const [selected, setSelected] = useState<number | null>(null);

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
          <div className="text-[#6B7280] text-[15px] font-normal">Step 4 of 5</div>
          {/* Progress Bar */}
          <div className="w-full mt-3">
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1 bg-[#32cd32] rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 p-12">
        <div className="w-full max-w-[1133px] mx-auto bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center border border-[#F3F4F6]  " style={{ borderWidth: '7px', borderRadius: '24px', boxShadow: '0 8px 40px 0 rgba(16,30,54,.10)' }}>
          {/* Icon */}
          <div className="w-[70px] h-[70px] bg-[#32cd32] rounded-full flex items-center justify-center mb-6">
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.71365 23.4958L8.0596 25.0271C7.08892 24.5339 6.1961 23.9266 5.38634 23.2155L6.56465 22.0372C7.2135 22.603 7.93503 23.0961 8.71365 23.4958ZM2.6975 14.3755H1.03125C1.10392 15.476 1.31155 16.5401 1.63857 17.5471L3.18544 16.9294C2.93109 16.1145 2.75979 15.258 2.6975 14.3755ZM2.6975 12.7145C2.77017 11.7386 2.96742 10.7939 3.27368 9.90625L1.74239 9.25221C1.35308 10.3423 1.10911 11.505 1.03125 12.7145H2.6975ZM3.92772 8.38015C4.3326 7.60672 4.82054 6.8852 5.38634 6.22597L4.20802 5.04765C3.49688 5.85742 2.88437 6.75024 2.39643 7.72092L3.92772 8.38015ZM21.1975 22.0372C20.476 22.6601 19.6714 23.1947 18.8046 23.6152L19.4223 25.162C20.4968 24.6481 21.4882 23.9889 22.3759 23.2103L21.1975 22.0372ZM6.55946 5.05284C7.28098 4.42995 8.08556 3.89529 8.95242 3.47484L8.33472 1.92798C7.26022 2.44187 6.26878 3.1011 5.38634 3.87972L6.55946 5.05284ZM23.8293 18.7099C23.4244 19.4833 22.9365 20.2048 22.3707 20.864L23.549 22.0424C24.2601 21.2326 24.8726 20.3346 25.3606 19.3691L23.8293 18.7099ZM25.0595 14.3755C24.9868 15.3514 24.7896 16.2961 24.4833 17.1838L26.0146 17.8378C26.4039 16.7425 26.6479 15.5798 26.7206 14.3703H25.0595V14.3755ZM17.2629 24.2381C16.448 24.4976 15.5915 24.6637 14.709 24.726V26.3923C15.8095 26.3196 16.8736 26.112 17.8806 25.7849L17.2629 24.2381ZM13.048 24.726C12.0721 24.6533 11.1274 24.4561 10.2397 24.1498L9.5857 25.6811C10.681 26.0704 11.8437 26.3144 13.0532 26.3871V24.726H13.048ZM24.5716 10.1606C24.8311 10.9756 24.9972 11.832 25.0595 12.7145H26.7258C26.6531 11.614 26.4454 10.5499 26.1184 9.54289L24.5716 10.1606ZM5.38634 20.864C4.76344 20.1425 4.22879 19.3379 3.80833 18.4711L2.26147 19.0888C2.77536 20.1633 3.43459 21.1547 4.21322 22.0424L5.38634 20.864ZM14.709 2.364C15.6849 2.43667 16.6244 2.63393 17.5173 2.94018L18.1713 1.40889C17.0812 1.01958 15.9185 0.775616 14.709 0.697754V2.364ZM10.4941 2.85194C11.3091 2.5924 12.1655 2.42629 13.048 2.364V0.697754C11.9475 0.770425 10.8834 0.978058 9.87639 1.30508L10.4941 2.85194ZM23.549 5.04765L22.3707 6.22597C22.9936 6.94749 23.5282 7.75206 23.9539 8.61893L25.5007 8.00122C24.9868 6.92672 24.3276 5.93528 23.549 5.04765ZM21.1975 5.05284L22.3759 3.87453C21.5661 3.16339 20.6733 2.55087 19.7026 2.06294L19.0485 3.59423C19.8168 3.99911 20.5435 4.48704 21.1975 5.05284Z" fill="white"/>
            <path d="M13.8792 20.6064C14.6819 20.6064 15.3326 19.9557 15.3326 19.153C15.3326 18.3502 14.6819 17.6995 13.8792 17.6995C13.0765 17.6995 12.4258 18.3502 12.4258 19.153C12.4258 19.9557 13.0765 20.6064 13.8792 20.6064Z" fill="white"/>
            <path d="M12.6588 7.24095L13.0222 15.9615C13.0377 16.2937 13.3129 16.5585 13.6451 16.5585H14.1122C14.4444 16.5585 14.7196 16.2937 14.7351 15.9615L15.0985 7.24095C15.1141 6.88798 14.8286 6.5921 14.4756 6.5921H13.2817C12.9287 6.5921 12.6432 6.88798 12.6588 7.24095Z" fill="white"/>
            </svg>

          </div>
          {/* Heading */}
          <h2 className="text-[32px] font-bold text-[#111827] mb-2 text-center">What's your main business goal?</h2>
          {/* Subtitle */}
          <p className="text-[#4B5563] text-[18px] mb-8 text-center max-w-[600px] mx-auto" style={{ fontWeight: 400, lineHeight: '31px' }}>Choose the primary objective that best describes where your business is heading. This helps us recommend the most relevant tools for your journey.</p>
          {/* Goal Cards */}
          <div className="flex flex-col gap-6 w-full mb-6">
            {goals.map((goal, idx) => (
              <div
                key={goal.title}
                className={`relative flex items-start bg-white border rounded-[16px] p-8 cursor-pointer transition-all duration-150 ${selected === idx ? 'border-[#32cd32] shadow-lg' : 'border-[#E5E7EB]'} min-h-[120px]`}
                style={{ borderWidth: '3px' }}
                onClick={() => setSelected(idx)}
              >
                {goal.icon}
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-[#111827] text-[26px] mr-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{goal.title}</span>
                  </div>
                  <div className="text-[15px] text-[#6B7280] mb-3 text-left" style={{ lineHeight: '22px' }}>{goal.desc}</div>
                  <div className="flex flex-wrap gap-2">
                    {goal.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-[13px] font-medium ${tag.color}`}>{tag.label}</span>
                    ))}
                  </div>
                </div>
                {/* Custom Checkbox */}
                <div
                  className={`absolute top-8 right-8 w-5 h-5 rounded border-[2px] flex items-center justify-center transition-all duration-150 ${selected === idx ? 'border-[#32cd32] bg-[#32cd32]/10' : 'border-[#D1D5DB] bg-white'}`}
                  style={{ boxSizing: 'border-box' }}
                >
                  {selected === idx && (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M5 10.5l4 4 6-8" stroke="#32cd32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex w-full justify-between items-center mt-4 border-t border-[#F3F4F6] pt-6">
            <button onClick={onBack} className="text-[#4B5563] text-[17px] font-medium flex items-center hover:underline"><span className="mr-2">&#8592;</span>Back</button>
            <button onClick={onContinue} disabled={selected === null} className="h-14 px-10 bg-gradient-to-r from-[#32cd32] to-[#4ade80] font-bold text-[17px] text-white flex items-center justify-center ml-auto transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none rounded-[16px] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', boxShadow: 'none', letterSpacing: '-0.01em' }}>
              Continue <span className="ml-2 flex items-center"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </button>
          </div>
          
        </div>
        {/* Progress Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
          </div>
      </div>
    </div>
  );
}; 