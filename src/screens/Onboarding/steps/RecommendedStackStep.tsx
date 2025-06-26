import React from "react";

const tools = [
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#ffb86b"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 1", desc: "Manage contacts, deals, and customer relationships effectively", badge: true, price: "$45/mo" },
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#ffe066"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 2", desc: "Create and send professional email campaigns", badge: true, price: "$299/mo" },
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#7b8cff"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 3", desc: "Track website performance and user behavior", badge: true, price: "Free" },
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#c7bfff"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 4", desc: "Organize tasks and collaborate with your team", badge: true, price: "$24.99/mo" },
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#ff7b8c"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 5", desc: "Schedule and manage social media posts", badge: true, price: "$5 - $100/mo" },
  { icon: <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="24" height="24" rx="8" fill="#7be495"/><path d="M8 16h8M8 12h8M8 8h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, name: "Tool 6", desc: "Streamline team communication and collaboration", badge: true, price: "$12.50/mo" },
];

export const RecommendedStackStep = ({ onBack }: { onBack: () => void }) => {
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
          <div className="text-[#6B7280] text-[15px] font-normal">Step 5 of 5</div>
          {/* Progress Bar */}
          <div className="  w-full mt-3">
            <div className="w-full  h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1 bg-[#32cd32] rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center" style={{ borderRadius: '20px', boxShadow: '0 8px 40px 0 rgba(16,30,54,.10)' }}>
          {/* Icon */}
          <div className="w-12 h-12 bg-[#32cd32] rounded-full flex items-center justify-center mb-6">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M12 7v5l3 3" stroke="#32cd32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* Heading */}
          <h2 className="text-2xl font-extrabold text-[#1a2330] mb-2 text-center">Your Recommended Tool Stack</h2>
          {/* Subtitle */}
          <p className="text-gray-400 text-base mb-8 text-center">Based on your business profile and goals, we've curated the perfect set of tools to help you succeed. Review and customize your selection below.</p>
          {/* Profile Summary */}
          <div className="w-full bg-[#e6f9ea] rounded-lg flex items-center justify-between px-6 py-4 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-[#32cd32] font-medium flex items-center"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><rect x="5" y="7" width="14" height="10" rx="2" fill="#32cd32"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#fff"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#fff"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#fff"/></svg>Marketing Agency</span>
              <span className="text-[#32cd32] font-medium flex items-center"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><circle cx="12" cy="12" r="10" fill="#32cd32"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">11-50</text></svg>11-50 employees</span>
              <span className="text-[#32cd32] font-medium flex items-center"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><path d="M12 7v5l3 3" stroke="#32cd32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Scale goal</span>
            </div>
            <button className="text-[#32cd32] font-medium flex items-center hover:underline"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><path d="M4 13v3a2 2 0 0 0 2 2h3m4-16h6a2 2 0 0 1 2 2v6m-2 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10z" stroke="#32cd32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Edit</button>
          </div>
          {/* Section Title and Add More */}
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-[#1a2330]">Recommended Tools</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">8 tools selected</span>
              <button className="h-9 px-4 bg-gradient-to-r from-[#32cd32] to-[#4ade80] text-white font-semibold rounded-[12px] flex items-center text-sm"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><path d="M12 5v14m7-7H5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Add More</button>
            </div>
          </div>
          {/* Recommended Tools Grid */}
          <div className="grid grid-cols-3 gap-6 w-full mb-8">
            {tools.map((tool, idx) => (
              <div key={tool.name} className="relative bg-white border border-gray-200 rounded-xl flex flex-col items-start p-5 min-h-[120px] transition-all hover:shadow-md hover:border-[#32cd32]">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{tool.icon}</span>
                  <span className="font-semibold text-[#1a2330] text-base">{tool.name}</span>
                </div>
                <div className="text-xs text-gray-400 mb-2 text-left">{tool.desc}</div>
                {tool.badge && <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#e6f9ea] text-[#32cd32] mb-2">Recommended</span>}
                <span className="text-sm font-bold text-[#1a2330]">{tool.price === "Free" ? <span className="text-[#32cd32]">Free</span> : tool.price}</span>
              </div>
            ))}
          </div>
          {/* Estimated Monthly Cost */}
          <div className="w-full bg-[#f6fcf8] rounded-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 mb-8">
            <div className="flex flex-wrap gap-6 text-sm text-[#1a2330] mb-2 md:mb-0">
              <span>3 Free Tools<br /><span className="text-gray-400">$0/mo</span></span>
              <span>5 Paid Tools<br /><span className="text-gray-400">$127/mo</span></span>
              <span>Setup Time<br /><span className="text-gray-400">2-3 days</span></span>
              <span>ROI Timeline<br /><span className="text-gray-400">3-6 months</span></span>
            </div>
            <div className="text-2xl font-bold text-[#32cd32]">$127 <span className="text-base font-medium text-gray-400">per month</span></div>
          </div>
          {/* Buttons */}
          <div className="flex w-full justify-between items-center mt-4">
            <button onClick={onBack} className="text-gray-400 text-base font-medium flex items-center hover:underline"><span className="mr-2">&#8592;</span>Back</button>
            <div className="flex gap-4">
              <button className="h-12 px-8 bg-white border border-gray-200 font-bold text-lg text-[#1a2330] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none rounded-[20px]">Save Draft</button>
              <button className="h-12 px-8 bg-gradient-to-r from-[#32cd32] to-[#4ade80] font-bold text-lg text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none rounded-[20px]">Create My Stack <span className="ml-2 flex items-center"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span></button>
            </div>
          </div>
          {/* Progress Dots */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
}; 