import React, { useState } from "react";

const categories = [
  { icon: <span className="inline-block w-8 h-8 bg-[#4F8CFF] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#4F8CFF"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">S</text></svg></span>, name: "CRM & Sales", desc: "Customer relationship management, sales tracking, lead generation" },
  { icon: <span className="inline-block w-8 h-8 bg-[#FF5A78] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#FF5A78"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">M</text></svg></span>, name: "Marketing", desc: "Email marketing, social media, advertising, analytics" },
  { icon: <span className="inline-block w-8 h-8 bg-[#B36AFF] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#B36AFF"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">P</text></svg></span>, name: "Project Management", desc: "Task tracking, team collaboration, workflow automation" },
  { icon: <span className="inline-block w-8 h-8 bg-[#4ADE80] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#4ADE80"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">C</text></svg></span>, name: "Communication", desc: "Team chat, video calls, file sharing, messaging" },
  { icon: <span className="inline-block w-8 h-8 bg-[#FFD600] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#FFD600"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">F</text></svg></span>, name: "Finance & Accounting", desc: "Invoicing, expense tracking, payment processing" },
  { icon: <span className="inline-block w-8 h-8 bg-[#FF6A6A] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#FF6A6A"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">D</text></svg></span>, name: "Design & Creative", desc: "Graphic design, video editing, content creation" },
  { icon: <span className="inline-block w-8 h-8 bg-[#A78BFA] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#A78BFA"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">A</text></svg></span>, name: "Analytics & Reporting", desc: "Data analysis, business intelligence, performance tracking" },
  { icon: <span className="inline-block w-8 h-8 bg-[#FDBA74] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#FDBA74"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">E</text></svg></span>, name: "E-commerce", desc: "Online store, inventory management, shipping tools" },
  { icon: <span className="inline-block w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#34D399"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" dy=".3em">H</text></svg></span>, name: "HR & Productivity", desc: "Employee management, time tracking, payroll" },
];

export const ToolCategoryStep = ({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleCategory = (idx: number) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

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
          <div className="text-[#6B7280] text-[15px] font-normal">Step 3 of 5</div>
          {/* Progress Bar */}
          <div className="  w-full mt-3">
            <div className="w-full  h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1 bg-[#32cd32] rounded-full" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 p-12">
        <div className="w-full max-w-[900px] mx-auto bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center border border-[#F3F4F6]  " style={{ borderWidth: '7px', borderRadius: '24px', boxShadow: '0 8px 40px 0 rgba(16,30,54,.10)' }}>
          {/* Icon */}
          <div className="w-12 h-12 bg-[#32cd32] rounded-full flex items-center justify-center mb-6">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="10" rx="2" fill="#fff"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#32cd32"/></svg>
          </div>
          {/* Heading */}
          <h2 className="text-[32px] font-bold text-[#111827] mb-2 text-center">What tools do you need?</h2>
          {/* Subtitle */}
          <p className="text-[#4B5563] text-[18px] mb-8 text-center max-w-[600px] mx-auto" style={{ fontWeight: 400, lineHeight: '32px' }}>Select all the types of tools that would help your business. Don't worry - you can always add more later!</p>
          {/* Category Grid */}
          <div className="grid grid-cols-3 gap-6 w-full mb-6">
            {categories.map((cat, idx) => (
              <div key={cat.name} className={`relative bg-white border border-[#E6E6E6] rounded-[16px] flex flex-col items-start p-6 min-h-[120px] cursor-pointer transition-all duration-150 shadow-sm ${selected.includes(idx) ? 'border-[#32cd32] shadow-lg' : ''}`}
                onClick={() => toggleCategory(idx)}
              >
                <div className="flex items-center mb-2">
                  {cat.icon}
                  <span className="font-semibold text-[#1a2330] text-[17px] ml-3">{cat.name}</span>
                </div>
                <div className="text-[15px] text-[#6B7280] mb-2 text-left" style={{ lineHeight: '22px' }}>{cat.desc}</div>
                <input type="checkbox" checked={selected.includes(idx)} readOnly className="absolute top-6 right-6 w-5 h-5 accent-[#32cd32] rounded cursor-pointer border-2 border-[#E6E6E6]" />
              </div>
            ))}
          </div>
          {/* Selection text */}
          <div className="flex items-center justify-center text-[16px] font-medium mb-2">
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block mr-2"></span>
            {selected.length} categories selected
          </div>
          {/* Buttons */}
          <div className="flex w-full justify-between items-center mt-4">
            <button onClick={onBack} className="text-gray-400 text-[18px] font-medium flex items-center hover:underline"><span className="mr-2">&#8592;</span>Back</button>
            <button onClick={onContinue} className="h-[56px] px-12 bg-gradient-to-r from-[#32cd32] to-[#4ade80] hover:from-[#28b428] hover:to-[#22c55e] hover:shadow-lg font-bold text-[20px] text-white flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none rounded-[16px]">
              Continue <span className="ml-2 flex items-center"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </button>
          </div>
          
        </div>
        {/* Progress Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
        </div>
      </div>
    </div>
  );
}; 