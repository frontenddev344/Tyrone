import React from "react";

const businessTypes = ["Startup", "SMB", "Enterprise", "Freelancer"];
const teamSizes = ["1-5", "6-20", "21-50", "51-200", "201+"];
const industries = ["Technology", "Finance", "Healthcare", "Education", "Retail", "Other"];

export const BusinessInfoStep = ({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      {/* Top Bar */}
      <div className="" style={{ boxShadow: '0 2px 8px 0 rgba(16,30,54,.03)' }}>
        <div className="w-full max-w-[939px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-6 bg-white" >
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="/assets/logi-dark.png" alt="Transify Logo" className="w-[120px] sm:w-[140px] lg:w-[161px] mr-3" />
          </div>
          
          {/* Step Text */}
          <div className="text-[#6B7280] text-[13px] sm:text-[14px] lg:text-[15px] font-normal mb-3 sm:mb-0">Step 2 of 5</div>
          {/* Progress Bar */}
          <div className="w-full sm:w-auto sm:flex-1 sm:ml-4">
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-1 bg-[#32cd32] rounded-full" style={{ width: '40%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-6 sm:py-12">
        <div className="w-full max-w-[850px] mx-auto bg-white p-4 sm:p-8 lg:p-10 flex flex-col items-center border border-[#F3F4F6]" style={{ borderRadius: '20px', boxShadow: '0 8px 40px 0 rgba(16,30,54,.10)' }}>
          {/* Icon */}
          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] bg-[linear-gradient(123deg,rgba(50,205,50,1)_0%,rgba(74,222,128,1)_100%)] rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="none" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="10" rx="2" fill="#fff"/><rect x="7" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="11" y="9" width="2" height="2" rx="1" fill="#32cd32"/><rect x="15" y="9" width="2" height="2" rx="1" fill="#32cd32"/></svg>
          </div>
          {/* Heading */}
          <h2 className="text-[24px] sm:text-[32px] lg:text-[39px] font-bold text-[#111827] mb-3 sm:mb-4 text-center" style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tell us about your business</h2>
          {/* Subtitle */}
          <p className="text-[#4B5563] text-[15px] sm:text-[18px] lg:text-[22px] mb-6 sm:mb-8 lg:mb-10 mx-auto text-center max-w-[600px]" style={{ fontWeight: 400, lineHeight: '1.5' }}>Help us understand your company so we can recommend the perfect tools for your needs.</p>
          {/* Form */}
          <form className="w-full flex flex-col gap-4 sm:gap-5">
            {/* Business Name */}
            <div>
              <label className="flex items-center text-[15px] font-bold text-[#1F2937] mb-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              <svg className="mr-2" width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.86038 0.769531C1.05542 0.769531 0.402344 1.42261 0.402344 2.22757V14.8639C0.402344 15.6689 1.05542 16.322 1.86038 16.322H4.77647V13.8919C4.77647 13.0869 5.42955 12.4339 6.23451 12.4339C7.03947 12.4339 7.69255 13.0869 7.69255 13.8919V16.322H10.6086C11.4136 16.322 12.0667 15.6689 12.0667 14.8639V2.22757C12.0667 1.42261 11.4136 0.769531 10.6086 0.769531H1.86038ZM2.3464 8.05973C2.3464 7.79243 2.5651 7.57372 2.83241 7.57372H3.80444C4.07175 7.57372 4.29045 7.79243 4.29045 8.05973V9.03176C4.29045 9.29907 4.07175 9.51778 3.80444 9.51778H2.83241C2.5651 9.51778 2.3464 9.29907 2.3464 9.03176V8.05973ZM5.74849 7.57372H6.72052C6.98783 7.57372 7.20653 7.79243 7.20653 8.05973V9.03176C7.20653 9.29907 6.98783 9.51778 6.72052 9.51778H5.74849C5.48119 9.51778 5.26248 9.29907 5.26248 9.03176V8.05973C5.26248 7.79243 5.48119 7.57372 5.74849 7.57372ZM8.17856 8.05973C8.17856 7.79243 8.39727 7.57372 8.66457 7.57372H9.6366C9.90391 7.57372 10.1226 7.79243 10.1226 8.05973V9.03176C10.1226 9.29907 9.90391 9.51778 9.6366 9.51778H8.66457C8.39727 9.51778 8.17856 9.29907 8.17856 9.03176V8.05973ZM2.83241 3.68561H3.80444C4.07175 3.68561 4.29045 3.90432 4.29045 4.17163V5.14365C4.29045 5.41096 4.07175 5.62967 3.80444 5.62967H2.83241C2.5651 5.62967 2.3464 5.41096 2.3464 5.14365V4.17163C2.3464 3.90432 2.5651 3.68561 2.83241 3.68561ZM5.26248 4.17163C5.26248 3.90432 5.48119 3.68561 5.74849 3.68561H6.72052C6.98783 3.68561 7.20653 3.90432 7.20653 4.17163V5.14365C7.20653 5.41096 6.98783 5.62967 6.72052 5.62967H5.74849C5.48119 5.62967 5.26248 5.41096 5.26248 5.14365V4.17163C5.26248 3.90432 5.48119 3.68561 5.74849 3.68561ZM8.66457 3.68561H9.6366C9.90391 3.68561 10.1226 3.90432 10.1226 4.17163V5.14365C10.1226 5.41096 9.90391 5.62967 9.6366 5.62967H8.66457C8.39727 5.62967 8.17856 5.41096 8.17856 5.14365V4.17163C8.17856 3.90432 8.39727 3.68561 8.66457 3.68561Z" fill="#32CD32"/>
              </svg>

                Business Name
              </label>
              <input type="text" placeholder="Enter your company name" className="w-full h-[48px] sm:h-[54px] lg:h-[60px] px-4 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] border border-[#E5E7EB] font-medium  bg-[#F9FAFB] text-[15px] sm:text-[16px] lg:text-[17px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#32cd32]" />
            </div>
            {/* Business Type & Team Size */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
              <label className="flex items-center text-[15px] font-bold text-[#1F2937] mb-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                <svg className="mr-2"   width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.97381 1.96905H10.3341C10.4673 1.96905 10.5763 2.07806 10.5763 2.21129V3.42248H5.73157V2.21129C5.73157 2.07806 5.84058 1.96905 5.97381 1.96905ZM4.27815 2.21129V3.42248H2.34025C1.27137 3.42248 0.402344 4.29151 0.402344 5.36038V8.26723H6.21605H10.0919H15.9056V5.36038C15.9056 4.29151 15.0365 3.42248 13.9677 3.42248H12.0298V2.21129C12.0298 1.27565 11.2697 0.515625 10.3341 0.515625H5.97381C5.03817 0.515625 4.27815 1.27565 4.27815 2.21129ZM15.9056 9.23618H10.0919V10.2051C10.0919 10.7411 9.65885 11.1741 9.1229 11.1741H7.185C6.64905 11.1741 6.21605 10.7411 6.21605 10.2051V9.23618H0.402344V13.112C0.402344 14.1809 1.27137 15.0499 2.34025 15.0499H13.9677C15.0365 15.0499 15.9056 14.1809 15.9056 13.112V9.23618Z" fill="#32CD32"/>
                </svg>

                  Business Type
                </label>
                <select className="w-full h-[48px] sm:h-[54px] lg:h-[60px] px-4 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] border border-[#E5E7EB] bg-[#F9FAFB] text-[15px] sm:text-[16px] lg:text-[17px] text-[#000] font-medium  focus:outline-none focus:ring-2 focus:ring-[#32cd32]">
                  <option value="">Select your business type</option>
                  {businessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div className="flex-1">
                <label className="flex items-center text-[15px] font-bold text-[#1F2937] mb-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                  <svg className="mr-2" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5.31683 0.515625C5.96051 0.515625 6.57782 0.771325 7.03297 1.22647C7.48812 1.68162 7.74382 2.29894 7.74382 2.94262C7.74382 3.58629 7.48812 4.20361 7.03297 4.65876C6.57782 5.11391 5.96051 5.36961 5.31683 5.36961C4.67315 5.36961 4.05583 5.11391 3.60069 4.65876C3.14554 4.20361 2.88984 3.58629 2.88984 2.94262C2.88984 2.29894 3.14554 1.68162 3.60069 1.22647C4.05583 0.771325 4.67315 0.515625 5.31683 0.515625ZM16.481 0.515625C17.1247 0.515625 17.742 0.771325 18.1971 1.22647C18.6523 1.68162 18.908 2.29894 18.908 2.94262C18.908 3.58629 18.6523 4.20361 18.1971 4.65876C17.742 5.11391 17.1247 5.36961 16.481 5.36961C15.8373 5.36961 15.22 5.11391 14.7648 4.65876C14.3097 4.20361 14.054 3.58629 14.054 2.94262C14.054 2.29894 14.3097 1.68162 14.7648 1.22647C15.22 0.771325 15.8373 0.515625 16.481 0.515625ZM0.948242 9.57741C0.948242 7.79053 2.39837 6.34041 4.18524 6.34041H5.48065C5.96301 6.34041 6.42111 6.44659 6.8337 6.63468C6.79426 6.85311 6.77606 7.08064 6.77606 7.3112C6.77606 8.47009 7.28572 9.51066 8.08967 10.2236C8.0836 10.2236 8.07753 10.2236 8.06843 10.2236H1.59443C1.23948 10.2236 0.948242 9.93235 0.948242 9.57741ZM13.244 10.2236C13.2379 10.2236 13.2319 10.2236 13.2228 10.2236C14.0297 9.51066 14.5364 8.47009 14.5364 7.3112C14.5364 7.08064 14.5151 6.85614 14.4787 6.63468C14.8913 6.44355 15.3494 6.34041 15.8318 6.34041H17.1272C18.914 6.34041 20.3642 7.79053 20.3642 9.57741C20.3642 9.93539 20.0729 10.2236 19.718 10.2236H13.244ZM7.74382 7.3112C7.74382 6.53879 8.05066 5.79801 8.59684 5.25183C9.14302 4.70565 9.8838 4.39881 10.6562 4.39881C11.4286 4.39881 12.1694 4.70565 12.7156 5.25183C13.2618 5.79801 13.5686 6.53879 13.5686 7.3112C13.5686 8.08362 13.2618 8.82439 12.7156 9.37057C12.1694 9.91675 11.4286 10.2236 10.6562 10.2236C9.8838 10.2236 9.14302 9.91675 8.59684 9.37057C8.05066 8.82439 7.74382 8.08362 7.74382 7.3112ZM4.83143 15.2384C4.83143 13.0055 6.64257 11.1944 8.8754 11.1944H12.437C14.6698 11.1944 16.481 13.0055 16.481 15.2384C16.481 15.6843 16.12 16.0484 15.671 16.0484H5.64144C5.19548 16.0484 4.83143 15.6874 4.83143 15.2384Z" fill="#32CD32"/>
                  </svg>

                  Team Size
                </label>
                <select className="w-full h-[48px] sm:h-[54px] lg:h-[60px] px-4 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] border border-[#E5E7EB] bg-[#F9FAFB] text-[15px] sm:text-[16px] lg:text-[17px] text-[#000] font-medium  focus:outline-none focus:ring-2 focus:ring-[#32cd32]">
                  <option value="">Select team size</option>
                  {teamSizes.map((size) => <option key={size} value={size}>{size}</option>)}
                </select>
              </div>
            </div>
            {/* Industry */}
            <div>
             <label className="flex items-center text-[15px] font-bold text-[#1F2937] mb-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
             <svg className="mr-2" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.34 1.22461C1.80461 1.22461 1.37207 1.65715 1.37207 2.19254V9.45198V10.9039V13.3237C1.37207 14.1252 2.0224 14.7756 2.82396 14.7756H15.407C16.2086 14.7756 16.8589 14.1252 16.8589 13.3237V9.45198V4.86038C16.8589 4.30987 16.2721 3.96202 15.7881 4.22215L11.0513 6.77203V4.86038C11.0513 4.30987 10.4645 3.96202 9.98056 4.22215L5.24377 6.77203V2.19254C5.24377 1.65715 4.81123 1.22461 4.27585 1.22461H2.34Z" fill="#32CD32"/>
              </svg>

                Industry
              </label>
              <select className="w-full h-[48px] sm:h-[54px] lg:h-[60px] px-4 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] border border-[#E5E7EB] bg-[#F9FAFB] text-[15px] sm:text-[16px] lg:text-[17px] text-[#000] font-medium focus:outline-none focus:ring-2 focus:ring-[#32cd32]">
                <option value="">Select your industry</option>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
            {/* Brief Description */}
            <div>
              <label className="flex items-center text-[15px] font-bold text-[#1F2937] mb-2" style={{  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              <svg className="mr-2" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.3464 0.00195312C1.27413 0.00195312 0.402344 0.87374 0.402344 1.94601V13.6103C0.402344 14.6826 1.27413 15.5544 2.3464 15.5544H10.1226C11.1949 15.5544 12.0667 14.6826 12.0667 13.6103V4.86209H8.17856C7.64091 4.86209 7.20653 4.42771 7.20653 3.89006V0.00195312H2.3464ZM8.17856 0.00195312V3.89006H12.0667L8.17856 0.00195312ZM3.80444 7.77817H8.66457C8.93188 7.77817 9.15059 7.99688 9.15059 8.26418C9.15059 8.53149 8.93188 8.7502 8.66457 8.7502H3.80444C3.53713 8.7502 3.31843 8.53149 3.31843 8.26418C3.31843 7.99688 3.53713 7.77817 3.80444 7.77817ZM3.80444 9.72222H8.66457C8.93188 9.72222 9.15059 9.94093 9.15059 10.2082C9.15059 10.4755 8.93188 10.6943 8.66457 10.6943H3.80444C3.53713 10.6943 3.31843 10.4755 3.31843 10.2082C3.31843 9.94093 3.53713 9.72222 3.80444 9.72222ZM3.80444 11.6663H8.66457C8.93188 11.6663 9.15059 11.885 9.15059 12.1523C9.15059 12.4196 8.93188 12.6383 8.66457 12.6383H3.80444C3.53713 12.6383 3.31843 12.4196 3.31843 12.1523C3.31843 11.885 3.53713 11.6663 3.80444 11.6663Z" fill="#32CD32"/>
              </svg>

                Brief Description<span className="ml-1 text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea placeholder="Tell us a bit more about what your business does..." className="w-full h-[90px] sm:h-[110px] lg:h-[139px] p-3 sm:p-4 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] border border-[#E5E7EB] font-medium  bg-[#F9FAFB] text-[15px] sm:text-[16px] lg:text-[17px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#32cd32] resize-none" />
            </div>
          </form>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full justify-between items-center mt-8 sm:mt-12 border-t border-[#F3F4F6] pt-4 sm:pt-6 border-t-[7px] gap-3 sm:gap-0">
            <button onClick={onBack} className="text-[#4B5563] text-[15px] sm:text-[16px] lg:text-[17px] font-medium flex items-center hover:underline mb-2 sm:mb-0"><span className="mr-2">&#8592;</span>Back</button>
            <button onClick={onContinue} className="h-12 sm:h-14 px-6 sm:px-10 bg-gradient-to-r from-[#32cd32] to-[#4ade80] font-bold text-[15px] sm:text-[16px] lg:text-[17px] text-white flex items-center justify-center sm:ml-auto transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#32cd32] shadow-none"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', boxShadow: 'none', letterSpacing: '-0.01em', borderRadius: '12px' }}>
              Continue <span className="ml-2 flex items-center"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </button>
          </div>
          
        </div>
        {/* Progress Dots */}
        <div className="flex justify-center items-center mt-8 space-x-2">
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#32cd32] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#D1D5DB] rounded-full inline-block"></span>
        </div>
      </div>
    </div>
  );
}; 