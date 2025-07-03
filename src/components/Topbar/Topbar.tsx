import React, { useRef, useState, useEffect } from 'react';

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export const Topbar = ({ setSidebarOpen }: TopbarProps) => {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');

  // Filter state for demo
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["CRM"]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const categories = ["CRM", "Analytics", "Email Marketing"];
  const features = ["Automation", "Reports", "Integration"];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };
  const handleFeatureChange = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedFeatures([]);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    }
    if (filterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [filterOpen]);

  return (
    <div className="flex items-center justify-between mb-8 p-6" style={{ boxShadow: '0 2px 8px 0 rgba(16,30,54,.03)' }}>
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden mr-4 text-2xl"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#32CD32" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      
      {/* Search Bar */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-2xl mx-2 sm:mx-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A6]">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#8A94A6" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#8A94A6" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          <input
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', borderWidth: "2px" }}
            className="w-full pl-11 pr-4 h-12 sm:h-[60px] py-2 rounded-[20px] border border-[#E5E7EB] bg-white text-[14px] sm:text-[21px] placeholder-[#8A94A6] focus:outline-none text-[#6B7280]"
            placeholder="Search tools (e.g., CRM, Email, Analytics...)"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          {/* Dropdown results - placeholder data */}
          {searchValue && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-[16px] shadow-md z-40 border border-[#E5E7EB] p-4 flex flex-col gap-4" style={{ minWidth: '100%', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', borderWidth: "2px" }}>
              {[1,2,3].map((tool, idx) => (
                <div key={tool} className="flex items-start gap-4 bg-white rounded-[12px] p-4 hover:bg-gray-50 transition cursor-pointer border border-transparent">
                  {/* Icon */}
                  <span className={`w-[53px] h-[53px] flex items-center justify-center rounded-full mr-2 ${idx===0 ? 'bg-[#FFEDD5]' : idx===1 ? 'bg-[#FFEDD5]' : 'bg-[#FFEDD5]'}`}>
                    {idx===0 && (
                      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.65515 0.986328C3.12819 0.986328 1.88672 2.2278 1.88672 3.75476V20.3653C1.88672 21.8923 3.12819 23.1338 4.65515 23.1338H17.1131C18.6401 23.1338 19.8815 21.8923 19.8815 20.3653V3.75476C19.8815 2.2278 18.6401 0.986328 17.1131 0.986328H4.65515ZM9.49991 13.4443H12.2683C14.1803 13.4443 15.7289 14.9929 15.7289 16.9048C15.7289 17.2855 15.4174 17.5969 15.0368 17.5969H6.73147C6.35082 17.5969 6.03937 17.2855 6.03937 16.9048C6.03937 14.9929 7.58796 13.4443 9.49991 13.4443ZM8.11569 9.29162C8.11569 8.55739 8.40736 7.85323 8.92655 7.33405C9.44573 6.81486 10.1499 6.52319 10.8841 6.52319C11.6184 6.52319 12.3225 6.81486 12.8417 7.33405C13.3609 7.85323 13.6526 8.55739 13.6526 9.29162C13.6526 10.0259 13.3609 10.73 12.8417 11.2492C12.3225 11.7684 11.6184 12.0601 10.8841 12.0601C10.1499 12.0601 9.44573 11.7684 8.92655 11.2492C8.40736 10.73 8.11569 10.0259 8.11569 9.29162ZM22.65 4.44687C22.65 4.06621 22.3385 3.75476 21.9578 3.75476C21.5772 3.75476 21.2657 4.06621 21.2657 4.44687V7.2153C21.2657 7.59596 21.5772 7.90741 21.9578 7.90741C22.3385 7.90741 22.65 7.59596 22.65 7.2153V4.44687ZM21.9578 9.29162C21.5772 9.29162 21.2657 9.60307 21.2657 9.98373V12.7522C21.2657 13.1328 21.5772 13.4443 21.9578 13.4443C22.3385 13.4443 22.65 13.1328 22.65 12.7522V9.98373C22.65 9.60307 22.3385 9.29162 21.9578 9.29162ZM22.65 15.5206C22.65 15.1399 22.3385 14.8285 21.9578 14.8285C21.5772 14.8285 21.2657 15.1399 21.2657 15.5206V18.289C21.2657 18.6697 21.5772 18.9811 21.9578 18.9811C22.3385 18.9811 22.65 18.6697 22.65 18.289V15.5206Z" fill="#EA580C"/>
                      </svg>
                      
                   )}
                    {idx===1 && (
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.57761 3.65267C8.00585 4.03766 8.04045 4.69083 7.65547 5.11907L4.54098 8.57961C4.35065 8.79157 4.08246 8.91702 3.79697 8.92134C3.51147 8.92567 3.23896 8.81753 3.03565 8.61855L1.30105 6.88828C0.898766 6.48166 0.898766 5.82416 1.30105 5.41755C1.70334 5.01093 2.36517 5.01093 2.76746 5.41755L3.72343 6.37352L6.10688 3.72621C6.49186 3.29797 7.14504 3.26336 7.57328 3.64835L7.57761 3.65267ZM7.57761 10.5738C8.00585 10.9587 8.04045 11.6119 7.65547 12.0402L4.54098 15.5007C4.35065 15.7127 4.08246 15.8381 3.79697 15.8424C3.51147 15.8467 3.23896 15.7386 3.03565 15.5396L1.30105 13.8094C0.89444 13.4027 0.89444 12.7452 1.30105 12.343C1.70767 11.9407 2.36517 11.9363 2.76746 12.343L3.72343 13.2989L6.10688 10.6516C6.49186 10.2234 7.14504 10.1888 7.57328 10.5738H7.57761ZM10.6878 6.15291C10.6878 5.38727 11.3063 4.7687 12.072 4.7687H21.7615C22.5271 4.7687 23.1457 5.38727 23.1457 6.15291C23.1457 6.91856 22.5271 7.53713 21.7615 7.53713H12.072C11.3063 7.53713 10.6878 6.91856 10.6878 6.15291ZM10.6878 13.074C10.6878 12.3083 11.3063 11.6898 12.072 11.6898H21.7615C22.5271 11.6898 23.1457 12.3083 23.1457 13.074C23.1457 13.8396 22.5271 14.4582 21.7615 14.4582H12.072C11.3063 14.4582 10.6878 13.8396 10.6878 13.074ZM7.91934 19.9951C7.91934 19.2294 8.53791 18.6109 9.30355 18.6109H21.7615C22.5271 18.6109 23.1457 19.2294 23.1457 19.9951C23.1457 20.7607 22.5271 21.3793 21.7615 21.3793H9.30355C8.53791 21.3793 7.91934 20.7607 7.91934 19.9951ZM3.07458 17.9187C3.62526 17.9187 4.15338 18.1375 4.54276 18.5269C4.93215 18.9163 5.1509 19.4444 5.1509 19.9951C5.1509 20.5457 4.93215 21.0739 4.54276 21.4633C4.15338 21.8526 3.62526 22.0714 3.07458 22.0714C2.5239 22.0714 1.99578 21.8526 1.6064 21.4633C1.21701 21.0739 0.998257 20.5457 0.998257 19.9951C0.998257 19.4444 1.21701 18.9163 1.6064 18.5269C1.99578 18.1375 2.5239 17.9187 3.07458 17.9187Z" fill="#9333EA"/>
                      </svg>
                      
                   )}
                    {idx===2 && (
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.38422 1.38477C2.14986 1.38477 2.76843 2.00334 2.76843 2.76898V17.3032C2.76843 17.6839 3.07988 17.9954 3.46054 17.9954H20.7632C21.5289 17.9954 22.1475 18.6139 22.1475 19.3796C22.1475 20.1452 21.5289 20.7638 20.7632 20.7638H3.46054C1.54859 20.7638 0 19.2152 0 17.3032V2.76898C0 2.00334 0.618571 1.38477 1.38422 1.38477ZM5.53686 5.53741C5.53686 4.77177 6.15543 4.1532 6.92108 4.1532H15.2264C15.992 4.1532 16.6106 4.77177 16.6106 5.53741C16.6106 6.30306 15.992 6.92163 15.2264 6.92163H6.92108C6.15543 6.92163 5.53686 6.30306 5.53686 5.53741ZM6.92108 8.30584H12.4579C13.2236 8.30584 13.8422 8.92442 13.8422 9.69006C13.8422 10.4557 13.2236 11.0743 12.4579 11.0743H6.92108C6.15543 11.0743 5.53686 10.4557 5.53686 9.69006C5.53686 8.92442 6.15543 8.30584 6.92108 8.30584ZM6.92108 12.4585H17.9948C18.7605 12.4585 19.379 13.0771 19.379 13.8427C19.379 14.6084 18.7605 15.2269 17.9948 15.2269H6.92108C6.15543 15.2269 5.53686 14.6084 5.53686 13.8427C5.53686 13.0771 6.15543 12.4585 6.92108 12.4585Z" fill="#2563EB"/>
                      </svg>
                      
                  )}
                  </span>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#374151] text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool {tool}</span>
                      <span className="bg-[#EBFAEB] text-[#32CD32] rounded-full px-4 py-1 text-[13px] font-medium ml-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Popular</span>
                    </div>
                    <div className="text-[#787E8B] text-[14px] mt-1 mb-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                    <div className="flex gap-3 mt-1">
                      <span className="bg-[#EBFAEB] text-[#32CD32] rounded-full px-4 py-1 text-[15px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} >CRM</span>
                      <span className="bg-white text-[#4B5563] border border-[#B9B9B9] rounded-full px-4 py-1 text-[15px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email</span>
                      <span className="bg-white text-[#4B5563] border border-[#B9B9B9] rounded-full px-4 py-1 text-[15px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Analytics</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Icon Buttons */}
      <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-6">
        <button className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] flex items-center justify-center transition-colors duration-150 focus:outline-none">
          <svg width="20" height="20" className="sm:w-[26px] sm:h-[26px]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64366 3.61951C9.83277 3.3938 9.92585 3.10294 9.90292 2.80938C9.87998 2.51581 9.74286 2.24293 9.52098 2.04933C9.29911 1.85574 9.01018 1.75684 8.71621 1.77389C8.42224 1.79094 8.14667 1.92257 7.94866 2.14051L6.01066 4.36051C4.91173 5.61986 4.29052 7.22547 4.25566 8.89651L4.17016 12.975C4.164 13.2734 4.27661 13.562 4.48323 13.7773C4.68985 13.9927 4.97354 14.1171 5.27191 14.1233C5.57028 14.1294 5.85888 14.0168 6.07422 13.8102C6.28956 13.6036 6.414 13.3199 6.42016 13.0215L6.50416 8.94451C6.52823 7.8011 6.95352 6.70255 7.70566 5.84101L9.64366 3.61951Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35591 11.55C9.45665 9.9452 10.1652 8.43912 11.3373 7.33835C12.5094 6.23759 14.057 5.62489 15.6649 5.625H16.5004V4.5C16.5004 4.10217 16.6585 3.72064 16.9398 3.43934C17.2211 3.15804 17.6026 3 18.0004 3C18.3982 3 18.7798 3.15804 19.0611 3.43934C19.3424 3.72064 19.5004 4.10217 19.5004 4.5V5.625H20.3359C21.9439 5.62489 23.4914 6.23759 24.6635 7.33835C25.8356 8.43912 26.5442 9.9452 26.6449 11.55L26.9764 16.851C27.1046 18.8718 27.783 20.8191 28.9384 22.482C29.1775 22.8256 29.3235 23.2252 29.3624 23.642C29.4013 24.0587 29.3316 24.4785 29.1602 24.8603C28.9889 25.2422 28.7216 25.5732 28.3844 25.8212C28.0472 26.0692 27.6515 26.2257 27.2359 26.2755L22.1254 26.8875V28.5C22.1254 29.594 21.6908 30.6432 20.9172 31.4168C20.1436 32.1904 19.0944 32.625 18.0004 32.625C16.9064 32.625 15.8572 32.1904 15.0836 31.4168C14.31 30.6432 13.8754 29.594 13.8754 28.5V26.8875L8.76491 26.274C8.34956 26.2241 7.95417 26.0675 7.61718 25.8197C7.28019 25.5718 7.01304 25.2409 6.84169 24.8593C6.67034 24.4776 6.60062 24.0581 6.63929 23.6416C6.67797 23.225 6.82373 22.8256 7.06241 22.482C8.21778 20.8191 8.89626 18.8718 9.02441 16.851L9.35591 11.55ZM16.1254 28.5C16.1254 28.9973 16.323 29.4742 16.6746 29.8258C17.0262 30.1774 17.5031 30.375 18.0004 30.375C18.4977 30.375 18.9746 30.1774 19.3262 29.8258C19.6779 29.4742 19.8754 28.9973 19.8754 28.5V27.375H16.1254V28.5Z" fill="white"/>
            <path d="M26.4653 2.03249C26.2405 2.22865 26.1029 2.50603 26.0827 2.80363C26.0624 3.10123 26.1612 3.3947 26.3573 3.61949L28.2953 5.83949C29.0472 6.70164 29.472 7.80075 29.4953 8.94449L29.5808 13.02C29.5838 13.1677 29.6159 13.3134 29.6753 13.4487C29.7347 13.5841 29.8201 13.7064 29.9267 13.8087C30.0333 13.911 30.1591 13.9913 30.2967 14.045C30.4344 14.0987 30.5813 14.1248 30.729 14.1217C30.8767 14.1187 31.0224 14.0866 31.1578 14.0272C31.2931 13.9679 31.4154 13.8824 31.5177 13.7758C31.62 13.6692 31.7003 13.5434 31.754 13.4058C31.8077 13.2681 31.8338 13.1212 31.8308 12.9735L31.7453 8.89649C31.7104 7.22545 31.0892 5.61984 29.9903 4.36049L28.0523 2.14049C27.8561 1.91578 27.5787 1.77816 27.2811 1.75791C26.9835 1.73766 26.6901 1.83642 26.4653 2.03249Z" fill="white"/>
          </svg>
        </button>
        <div className="relative" ref={dropdownRef} style={{zIndex: 0}}>
          <button
            className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]  flex items-center justify-center transition-colors duration-150 focus:outline-none"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" className="sm:w-[50px] sm:h-[50px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15H32.5V20H7.5V15ZM7.5 40H32.5V45H7.5V40ZM7.5 27.5H37.5V32.5H7.5V27.5ZM40 17.5L36.45 20.975L45.35 30L36.45 39.025L40 42.5L52.5 30L40 17.5Z" fill="white"/>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-[257px] bg-white border-[#32cd3233] rounded-[12px] shadow-lg py-4 z-50" style={{minWidth:'180px', borderWidth: '3px'}}>
              <a href="#" className="flex items-center px-5 py-2 hover:bg-[#F3F4F6]">
                <span className="w-[31px] h-[31px] rounded-full bg-[#32CD32] flex items-center justify-center mr-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.07 8.624C16.1944 8.5972 16.3213 8.5944 16.4436 8.6144C16.4602 7.52146 16.4543 6.4283 16.426 5.3356C15.7956 5.5816 14.6322 6.0224 13.3381 6.4492C12.46 6.7388 11.5146 7.0244 10.6306 7.238C9.75656 7.4492 8.90422 7.6 8.22644 7.6C7.54867 7.6 6.69633 7.4492 5.82232 7.238C4.93828 7.0244 3.99284 6.7388 3.11482 6.4492C2.07604 6.10464 1.04639 5.73331 0.0269002 5.3356C0.00856121 6.02358 -0.000401759 6.71178 1.38107e-05 7.4C1.38107e-05 9.7744 0.098731 11.4496 0.19504 12.516C0.298172 13.6632 1.19907 14.5288 2.34114 14.6144C3.43746 14.6972 5.17745 14.7864 7.65581 14.7984C7.64031 14.7048 7.6304 14.6104 7.62611 14.5156C7.60083 13.9424 7.86127 13.51 8.07315 13.2412L8.10686 13.2L8.07074 13.1552C7.85926 12.8868 7.60123 12.4556 7.62652 11.8848C7.64738 11.4152 7.81713 10.8632 8.20116 10.2C8.5852 9.5368 8.98006 9.1144 9.37734 8.8616C9.84404 8.5652 10.3264 8.5616 10.6619 8.6056C10.6948 8.60987 10.7282 8.61493 10.7622 8.6208C10.7742 8.58747 10.7868 8.55533 10.7999 8.5244C10.9299 8.2132 11.1735 7.7996 11.6631 7.5464C12.0816 7.3296 12.6462 7.2 13.4143 7.2C14.1824 7.2 14.7466 7.3296 15.1651 7.5464C15.6547 7.7996 15.8983 8.2128 16.0283 8.524C16.042 8.55627 16.0551 8.58973 16.0676 8.6244L16.07 8.624ZM0.0746536 4.064C0.109566 3.346 0.152504 2.7556 0.19504 2.284C0.298172 1.1368 1.19907 0.2712 2.34114 0.1856C3.51932 0.0968 5.4423 0 8.22644 0C11.0106 0 12.9336 0.0968 14.1118 0.1856C15.2538 0.2712 16.1547 1.1368 16.2578 2.284C16.3004 2.7556 16.3433 3.346 16.3782 4.064C16.0159 4.2092 14.5925 4.7716 12.9601 5.31C12.0993 5.594 11.1876 5.8684 10.3469 6.0716C9.49693 6.2772 8.75735 6.4 8.22644 6.4C7.69554 6.4 6.95596 6.2772 6.10603 6.072C5.26533 5.8688 4.3536 5.594 3.49324 5.31C2.34175 4.92787 1.20174 4.51262 0.0746536 4.064Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2184 8.61079C12.4158 8.50839 12.7746 8.39999 13.4142 8.39999C14.0535 8.39999 14.4126 8.50839 14.6101 8.61079C14.7922 8.70519 14.8777 8.86719 14.9154 8.98519C14.9552 9.10839 15.0302 9.34719 15.1197 9.66079C15.2984 9.74773 15.4687 9.84733 15.6305 9.95959C15.9504 9.87959 16.1972 9.82439 16.3252 9.79679C16.4464 9.77039 16.6301 9.76319 16.8027 9.87319C16.9901 9.99279 17.2646 10.2484 17.5844 10.8C17.9038 11.352 17.9889 11.716 17.9989 11.938C18.0082 12.1428 17.9099 12.2972 17.8264 12.3888C17.7337 12.4908 17.5475 12.692 17.2983 12.9472C17.3066 13.1136 17.3044 13.2803 17.2919 13.4464C17.5447 13.7044 17.7333 13.9088 17.8268 14.0116C17.9103 14.1028 18.0082 14.2576 17.9993 14.4624C17.9893 14.684 17.9042 15.048 17.5844 15.6C17.2646 16.152 16.9905 16.4076 16.8031 16.5268C16.6301 16.6372 16.4468 16.63 16.3256 16.6036C16.0533 16.5441 15.7821 16.4796 15.5122 16.4104C15.3968 16.4839 15.2777 16.5514 15.1554 16.6128C15.0803 16.8815 15.0003 17.1489 14.9154 17.4148C14.8777 17.5328 14.7922 17.6948 14.6101 17.7892C14.4126 17.8912 14.0535 18 13.4142 18C12.775 18 12.4158 17.8912 12.2184 17.7892C12.0358 17.6948 11.9507 17.5328 11.9126 17.4148C11.8278 17.1488 11.7478 16.8813 11.6726 16.6124C11.5506 16.5511 11.4318 16.4837 11.3167 16.4104C10.9395 16.5068 10.6457 16.5728 10.5025 16.6036C10.3813 16.63 10.1979 16.6372 10.0249 16.5272C9.83712 16.4076 9.56344 16.152 9.24361 15.6C8.92379 15.048 8.83871 14.684 8.82868 14.4624C8.81985 14.2576 8.91777 14.1032 9.00124 14.0116C9.09514 13.9084 9.28415 13.704 9.53696 13.4452C9.52448 13.2798 9.52233 13.1137 9.53054 12.948C9.35096 12.7646 9.1745 12.5781 9.00124 12.3888C8.91817 12.2968 8.81985 12.1424 8.82868 11.938C8.83871 11.7164 8.92419 11.352 9.24361 10.8C9.56344 10.248 9.83752 9.99239 10.0249 9.87319C10.1983 9.76319 10.3817 9.77039 10.5025 9.79639C10.6309 9.82439 10.8781 9.87959 11.1983 9.95959C11.3599 9.84759 11.5299 9.74813 11.7083 9.66119C11.7982 9.34759 11.8729 9.10879 11.913 8.98519C11.9507 8.86719 12.0362 8.70519 12.2184 8.61079ZM11.9062 13.146C11.9015 12.9456 11.9371 12.7463 12.0108 12.5599C12.0846 12.3734 12.1949 12.2035 12.3355 12.0602C12.476 11.9168 12.6439 11.8029 12.8292 11.7251C13.0145 11.6474 13.2135 11.6073 13.4146 11.6073C13.6157 11.6073 13.8147 11.6474 14.0001 11.7251C14.1854 11.8029 14.3532 11.9168 14.4938 12.0602C14.6343 12.2035 14.7447 12.3734 14.8184 12.5599C14.8921 12.7463 14.9277 12.9456 14.9231 13.146C14.914 13.5388 14.7511 13.9124 14.4692 14.187C14.1873 14.4616 13.8088 14.6153 13.4146 14.6153C13.0205 14.6153 12.642 14.4616 12.3601 14.187C12.0782 13.9124 11.9153 13.5388 11.9062 13.146Z" fill="white"/>
                  </svg>
                </span>
                <span className="font-semibold text-[#000000] text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Settings</span>
              </a>
              <a href="#" className="flex items-center px-5 py-2 hover:bg-[#F3F4F6]">
                <span className="w-[31px] h-[31px] rounded-full bg-[#32CD32] flex items-center justify-center mr-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 0.75H11.5605L15.75 4.9395V17.25H2.25V0.75ZM3.75 2.25V15.75H14.25V5.5605L10.9395 2.25H3.75ZM9 6.75C8.70163 6.75 8.41548 6.86853 8.2045 7.0795C7.99353 7.29048 7.875 7.57663 7.875 7.875C7.875 8.17337 7.99353 8.45952 8.2045 8.6705C8.41548 8.88147 8.70163 9 9 9C9.29837 9 9.58452 8.88147 9.7955 8.6705C10.0065 8.45952 10.125 8.17337 10.125 7.875C10.125 7.57663 10.0065 7.29048 9.7955 7.0795C9.58452 6.86853 9.29837 6.75 9 6.75ZM6.375 7.875C6.375 7.53028 6.4429 7.18894 6.57482 6.87046C6.70673 6.55198 6.90009 6.2626 7.14384 6.01884C7.3876 5.77509 7.67698 5.58174 7.99546 5.44982C8.31394 5.3179 8.65528 5.25 9 5.25C9.34472 5.25 9.68606 5.3179 10.0045 5.44982C10.323 5.58174 10.6124 5.77509 10.8562 6.01884C11.0999 6.2626 11.2933 6.55198 11.4252 6.87046C11.5571 7.18894 11.625 7.53028 11.625 7.875C11.625 8.57119 11.3484 9.23887 10.8562 9.73116C10.3639 10.2234 9.69619 10.5 9 10.5C8.30381 10.5 7.63613 10.2234 7.14384 9.73116C6.65156 9.23887 6.375 8.57119 6.375 7.875ZM4.5 14.25C4.5 13.4544 4.81607 12.6913 5.37868 12.1287C5.94129 11.5661 6.70435 11.25 7.5 11.25H10.5C11.2956 11.25 12.0587 11.5661 12.6213 12.1287C13.1839 12.6913 13.5 13.4544 13.5 14.25V15H12V14.25C12 13.8522 11.842 13.4706 11.5607 13.1893C11.2794 12.908 10.8978 12.75 10.5 12.75H7.5C7.10218 12.75 6.72064 12.908 6.43934 13.1893C6.15804 13.4706 6 13.8522 6 14.25V15H4.5V14.25Z" fill="white"/>
                  </svg>
                </span>
                <span className="font-semibold text-[#000000] text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Information Page</span>
              </a>
              <a href="#" className="flex items-center px-5 py-2 hover:bg-[#F3F4F6]">
                <span className="w-[31px] h-[31px] rounded-full bg-[#32CD32] flex items-center justify-center mr-3">
                  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.97059 2.8V1M12.0294 2.8V1M8.5 19C4.96441 19 3.19706 19 2.09853 17.8138C1 16.6276 1 14.7178 1 10.9C1 7.0822 1 5.1724 2.09853 3.9862C3.19706 2.8 4.96441 2.8 8.5 2.8C12.0356 2.8 13.8029 2.8 14.9015 3.9862C16 5.1724 16 7.0822 16 10.9C16 14.7178 16 16.6276 14.9015 17.8138C13.8029 19 12.0356 19 8.5 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.2786 7.74366C10.2786 8.22105 10.0927 8.67889 9.76173 9.01646C9.43078 9.35402 8.98192 9.54366 8.51389 9.54366C8.04586 9.54366 7.597 9.35402 7.26606 9.01646C6.93511 8.67889 6.74919 8.22105 6.74919 7.74366C6.74919 7.26627 6.93511 6.80844 7.26606 6.47087C7.597 6.13331 8.04586 5.94366 8.51389 5.94366C8.98192 5.94366 9.43078 6.13331 9.76173 6.47087C10.0927 6.80844 10.2786 7.26627 10.2786 7.74366ZM5.02419 14.2444C5.95771 12.7774 7.44095 12.2284 8.51389 12.2293C9.58683 12.2302 11.0268 12.7783 11.9604 14.2453C12.0204 14.3398 12.0371 14.4559 11.9824 14.5549C11.7645 14.95 11.086 15.7339 10.5971 15.787C10.0342 15.8473 8.56154 15.8563 8.51477 15.8563C8.46801 15.8563 6.95124 15.8473 6.3883 15.787C5.89772 15.733 5.22007 14.95 5.00124 14.554C4.94742 14.4559 4.96419 14.3398 5.02419 14.2444Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span className="font-semibold text-[#000000] text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Contact Support</span>
              </a>
            </div>
          )}
        </div>
        {/* Filter Button */}
      <div className="relative" ref={filterRef}>
        <button
          className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]  flex items-center justify-center transition-colors duration-150 focus:outline-none"
          onClick={() => setFilterOpen((open) => !open)}
        >
          {/* Filter icon */}
          <svg width="20" height="20" className="sm:w-[26px] sm:h-[26px]" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5859 1.87566C10.4222 1.87505 9.28695 2.23539 8.3366 2.90701C7.38625 3.57864 6.66759 4.52849 6.27969 5.62566H0.335938V9.37566H6.27969C6.66707 10.4735 7.38545 11.4242 8.33581 12.0967C9.28618 12.7691 10.4217 13.1302 11.5859 13.1302C12.7501 13.1302 13.8857 12.7691 14.8361 12.0967C15.7864 11.4242 16.5048 10.4735 16.8922 9.37566H30.3359V5.62566H16.8922C16.5043 4.52849 15.7856 3.57864 14.8353 2.90701C13.8849 2.23539 12.7497 1.87505 11.5859 1.87566ZM9.71094 7.50066C9.71094 7.00337 9.90848 6.52646 10.2601 6.17483C10.6117 5.8232 11.0887 5.62566 11.5859 5.62566C12.0832 5.62566 12.5601 5.8232 12.9118 6.17483C13.2634 6.52646 13.4609 7.00337 13.4609 7.50066C13.4609 7.99794 13.2634 8.47485 12.9118 8.82648C12.5601 9.17811 12.0832 9.37566 11.5859 9.37566C11.0887 9.37566 10.6117 9.17811 10.2601 8.82648C9.90848 8.47485 9.71094 7.99794 9.71094 7.50066ZM19.0859 16.8757C17.9222 16.875 16.7869 17.2354 15.8366 17.907C14.8862 18.5786 14.1676 19.5285 13.7797 20.6257H0.335938V24.3757H13.7797C14.1671 25.4735 14.8854 26.4242 15.8358 27.0967C16.7862 27.7691 17.9217 28.1302 19.0859 28.1302C20.2502 28.1302 21.3857 27.7691 22.3361 27.0967C23.2864 26.4242 24.0048 25.4735 24.3922 24.3757H30.3359V20.6257H24.3922C24.0043 19.5285 23.2856 18.5786 22.3353 17.907C21.3849 17.2354 20.2497 16.875 19.0859 16.8757ZM17.2109 22.5007C17.2109 22.0034 17.4085 21.5265 17.7601 21.1748C18.1117 20.8232 18.5887 20.6257 19.0859 20.6257C19.5832 20.6257 20.0601 20.8232 20.4118 21.1748C20.7634 21.5265 20.9609 22.0034 20.9609 22.5007C20.9609 22.9979 20.7634 23.4748 20.4118 23.8265C20.0601 24.1781 19.5832 24.3757 19.0859 24.3757C18.5887 24.3757 18.1117 24.1781 17.7601 23.8265C17.4085 23.4748 17.2109 22.9979 17.2109 22.5007Z" fill="white"/>
          </svg>

        </button>
        {filterOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-[16px] border border-[#E5E7EB] z-50" style={{ minWidth: '260px', boxShadow: 'none', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Header row */}
            <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-[#E5E7EB]">
              <span className="font-semibold text-[#111827] text-[22px] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Filters</span>
              <button onClick={clearFilters} className="text-[#EA580C] font-semibold text-[16px] hover:underline focus:outline-none" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Clear Filters</button>
            </div>
            {/* Selected tags */}
            {(selectedCategories.length > 0 || selectedFeatures.length > 0) && (
              <div className="flex flex-wrap gap-2 px-4 pt-4 pb-3">
                {selectedCategories.map((cat) => (
                  <span key={cat} className="bg-[#EBFAEB] text-[#32CD32] rounded-[6px] px-3 py-1 text-[12px] font-semibold w-fit  text-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    {cat}
                  </span>
                ))}
                {selectedFeatures.map((feat) => (
                  <span key={feat} className="bg-[#EBFAEB] text-[#32CD32] rounded-[6px] px-3 py-1 text-[12px] font-semibold w-fit  text-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    {feat}
                  </span>
                ))}
              </div>
            )}
            {/* Separator */}
            <div className="border-b border-[#E5E7EB]"></div>
            <div className="px-4 pt-4 pb-6">
              {/* Category section */}
              <div className="mb-5">
                <div className="font-medium text-[#111827] text-[17px] mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Category:</div>
                <div className="flex flex-col gap-3 ml-1">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 text-[#374151] text-[16px] cursor-pointer select-none" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                        className="sr-only peer"
                      />
                      <span className="w-[15px] h-[15px] rounded-[3px] flex items-center justify-center border border-[#767676] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] bg-white transition-colors duration-150">
                        {selectedCategories.includes(cat) && (
                          <svg width="20" height="20" viewBox="0 0 20 20" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="4" fill="#22C55E"/>
                            <path d="M5 10.5L9 14L15 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Features section */}
              <div>
                <div className="font-medium text-[#111827] text-[17px] mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Features:</div>
                <div className="flex flex-col gap-3 ml-1">
                  {features.map((feat) => (
                    <label key={feat} className="flex items-center gap-3 text-[#374151] text-[16px] cursor-pointer select-none" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feat)}
                        onChange={() => handleFeatureChange(feat)}
                        className="sr-only peer"
                      />
                      <span className="w-[15px] h-[15px] rounded-[3px] flex items-center justify-center border border-[#767676] peer-checked:bg-[#22C55E] peer-checked:border-[#22C55E] bg-white transition-colors duration-150">
                        {selectedFeatures.includes(feat) && (
                          <svg width="20" height="20" viewBox="0 0 20 20" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" rx="4" fill="#22C55E"/>
                            <path d="M5 10.5L9 14L15 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      <span>{feat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
}; 