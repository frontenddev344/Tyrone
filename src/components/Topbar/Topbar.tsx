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
  const [activeBadge, setActiveBadge] = useState('Recommended Only');
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
    <div className="flex flex-wrap items-center justify-between mb-8 p-6" style={{ boxShadow: '0 2px 8px 0 rgba(16,30,54,.03)' }}>
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden mr-4 text-2xl order-one"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#32CD32" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      
      {/* Search Bar */}
      <div className="flex-1 flex justify-center items-center order-two">
        <div className="relative w-full max-w-2xl mx-0 sm:mx-4">
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
          {/* Dropdown results - accordion-only UI */}
          {searchValue && (
            <SearchDropdownAccordion searchValue={searchValue} />
          )}
        </div>
      </div>
      
      {/* Icon Buttons */}
      <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-6 order-three">
        <button className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center transition-colors duration-150 focus:outline-none">
          <svg width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.64366 3.61951C9.83277 3.3938 9.92585 3.10294 9.90292 2.80938C9.87998 2.51581 9.74286 2.24293 9.52098 2.04933C9.29911 1.85574 9.01018 1.75684 8.71621 1.77389C8.42224 1.79094 8.14667 1.92257 7.94866 2.14051L6.01066 4.36051C4.91173 5.61986 4.29052 7.22547 4.25566 8.89651L4.17016 12.975C4.164 13.2734 4.27661 13.562 4.48323 13.7773C4.68985 13.9927 4.97354 14.1171 5.27191 14.1233C5.57028 14.1294 5.85888 14.0168 6.07422 13.8102C6.28956 13.6036 6.414 13.3199 6.42016 13.0215L6.50416 8.94451C6.52823 7.8011 6.95352 6.70255 7.70566 5.84101L9.64366 3.61951Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35591 11.55C9.45665 9.9452 10.1652 8.43912 11.3373 7.33835C12.5094 6.23759 14.057 5.62489 15.6649 5.625H16.5004V4.5C16.5004 4.10217 16.6585 3.72064 16.9398 3.43934C17.2211 3.15804 17.6026 3 18.0004 3C18.3982 3 18.7798 3.15804 19.0611 3.43934C19.3424 3.72064 19.5004 4.10217 19.5004 4.5V5.625H20.3359C21.9439 5.62489 23.4914 6.23759 24.6635 7.33835C25.8356 8.43912 26.5442 9.9452 26.6449 11.55L26.9764 16.851C27.1046 18.8718 27.783 20.8191 28.9384 22.482C29.1775 22.8256 29.3235 23.2252 29.3624 23.642C29.4013 24.0587 29.3316 24.4785 29.1602 24.8603C28.9889 25.2422 28.7216 25.5732 28.3844 25.8212C28.0472 26.0692 27.6515 26.2257 27.2359 26.2755L22.1254 26.8875V28.5C22.1254 29.594 21.6908 30.6432 20.9172 31.4168C20.1436 32.1904 19.0944 32.625 18.0004 32.625C16.9064 32.625 15.8572 32.1904 15.0836 31.4168C14.31 30.6432 13.8754 29.594 13.8754 28.5V26.8875L8.76491 26.274C8.34956 26.2241 7.95417 26.0675 7.61718 25.8197C7.28019 25.5718 7.01304 25.2409 6.84169 24.8593C6.67034 24.4776 6.60062 24.0581 6.63929 23.6416C6.67797 23.225 6.82373 22.8256 7.06241 22.482C8.21778 20.8191 8.89626 18.8718 9.02441 16.851L9.35591 11.55ZM16.1254 28.5C16.1254 28.9973 16.323 29.4742 16.6746 29.8258C17.0262 30.1774 17.5031 30.375 18.0004 30.375C18.4977 30.375 18.9746 30.1774 19.3262 29.8258C19.6779 29.4742 19.8754 28.9973 19.8754 28.5V27.375H16.1254V28.5Z" fill="white"/>
            <path d="M26.4653 2.03249C26.2405 2.22865 26.1029 2.50603 26.0827 2.80363C26.0624 3.10123 26.1612 3.3947 26.3573 3.61949L28.2953 5.83949C29.0472 6.70164 29.472 7.80075 29.4953 8.94449L29.5808 13.02C29.5838 13.1677 29.6159 13.3134 29.6753 13.4487C29.7347 13.5841 29.8201 13.7064 29.9267 13.8087C30.0333 13.911 30.1591 13.9913 30.2967 14.045C30.4344 14.0987 30.5813 14.1248 30.729 14.1217C30.8767 14.1187 31.0224 14.0866 31.1578 14.0272C31.2931 13.9679 31.4154 13.8824 31.5177 13.7758C31.62 13.6692 31.7003 13.5434 31.754 13.4058C31.8077 13.2681 31.8338 13.1212 31.8308 12.9735L31.7453 8.89649C31.7104 7.22545 31.0892 5.61984 29.9903 4.36049L28.0523 2.14049C27.8561 1.91578 27.5787 1.77816 27.2811 1.75791C26.9835 1.73766 26.6901 1.83642 26.4653 2.03249Z" fill="white"/>
          </svg>
        </button>
        <div className="relative" ref={dropdownRef} style={{zIndex: 0}}>
          <button
            className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]  flex items-center justify-center transition-colors duration-150 focus:outline-none"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <path d="M10.2786 7.74366C10.2786 8.22105 10.0927 8.67889 9.76173 9.01646C9.43078 9.35402 8.98192 9.54366 8.51389 9.54366C8.04586 9.54366 7.597 9.35402 7.26606 9.01646C6.93511 8.67889 6.74919 8.22105 6.74919 7.74366C6.74919 7.26627 6.93511 6.80844 7.26606 6.47087C7.597 6.13331 8.04586 5.94366 8.51389 5.94366C8.98192 5.94366 9.43078 6.13331 9.76173 6.47087C10.0927 6.80844 10.2786 7.26627 10.2786 7.74366ZM5.02419 14.2444C5.95771 12.7774 7.44095 12.2284 8.51389 12.2293C9.58683 12.2302 11.0268 12.7783 11.9604 14.2453C12.0204 14.3398 12.0371 14.4559 11.9824 14.5549C11.7645 14.95 11.086 15.7339 10.5971 15.787C10.0342 15.8473 8.56154 15.8563 8.51477 15.8563C8.46801 15.8563 6.95124 15.8563 6.3883 15.787C5.89772 15.733 5.22007 14.95 5.00124 14.554C4.94742 14.4559 4.96419 14.3398 5.02419 14.2444Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
          className="rounded-full bg-[#22C55E] hover:bg-[#16a34a] border border-[#22C55E] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]  flex items-center justify-center transition-colors duration-150 focus:outline-none"
          onClick={() => setFilterOpen((open) => !open)}
        >
          {/* Filter icon */}
          <svg width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="flex flex-wrap gap-2 px-4 pt-4 pb-3 border-b border-[#E5E7EB] ">
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
            <div className="p-4" >
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

// Accordion-only dropdown component (no tabs, just badges and accordions)
const SearchDropdownAccordion = ({ searchValue }: { searchValue: string }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [activeBadge, setActiveBadge] = useState('Recommended Only');
  const badgeList = [
    { key: 'CRM', label: 'CRM' },
    { key: 'Email Marketing', label: 'Email Marketing' },
    { key: 'Analytics', label: 'Analytics' },
    { key: 'Recommended Only', label: 'Recommended Only' },
    { key: 'Free Tools', label: 'Free Tools' },
  ];
  // Screenshot-accurate accordion data
  const accordions = [
    {
      badge: 'Email Marketing',
      badgeColor: 'bg-[#EBFAEB] text-[#22C55E]',
      icon: (
        <span className="w-10 h-10 flex items-center justify-center ">
          <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.302429" width="50" height="50" rx="16" fill="url(#paint0_linear_100_179)"/>
          <path d="M17.8134 16.3024C18.67 16.3024 19.4915 16.6427 20.0972 17.2484C20.7029 17.8541 21.0431 18.6756 21.0431 19.5321C21.0431 20.3887 20.7029 21.2102 20.0972 21.8159C19.4915 22.4215 18.67 22.7618 17.8134 22.7618C16.9569 22.7618 16.1354 22.4215 15.5297 21.8159C14.924 21.2102 14.5838 20.3887 14.5838 19.5321C14.5838 18.6756 14.924 17.8541 15.5297 17.2484C16.1354 16.6427 16.9569 16.3024 17.8134 16.3024ZM32.67 16.3024C33.5266 16.3024 34.3481 16.6427 34.9537 17.2484C35.5594 17.8541 35.8997 18.6756 35.8997 19.5321C35.8997 20.3887 35.5594 21.2102 34.9537 21.8159C34.3481 22.4215 33.5266 22.7618 32.67 22.7618C31.8134 22.7618 30.992 22.4215 30.3863 21.8159C29.7806 21.2102 29.4403 20.3887 29.4403 19.5321C29.4403 18.6756 29.7806 17.8541 30.3863 17.2484C30.992 16.6427 31.8134 16.3024 32.67 16.3024ZM12 28.3613C12 25.9834 13.9297 24.0537 16.3076 24.0537H18.0314C18.6733 24.0537 19.2829 24.195 19.832 24.4453C19.7795 24.736 19.7553 25.0387 19.7553 25.3456C19.7553 26.8877 20.4335 28.2725 21.5034 29.2212C21.4953 29.2212 21.4872 29.2212 21.4751 29.2212H12.8599C12.3876 29.2212 12 28.8336 12 28.3613ZM28.3624 29.2212C28.3543 29.2212 28.3463 29.2212 28.3341 29.2212C29.408 28.2725 30.0822 26.8877 30.0822 25.3456C30.0822 25.0387 30.054 24.74 30.0055 24.4453C30.5546 24.1909 31.1642 24.0537 31.8061 24.0537H33.5299C35.9078 24.0537 37.8375 25.9834 37.8375 28.3613C37.8375 28.8377 37.4499 29.2212 36.9776 29.2212H28.3624ZM21.0431 25.3456C21.0431 24.3177 21.4514 23.3319 22.1783 22.6051C22.9051 21.8783 23.8909 21.4699 24.9188 21.4699C25.9466 21.4699 26.9324 21.8783 27.6592 22.6051C28.3861 23.3319 28.7944 24.3177 28.7944 25.3456C28.7944 26.3734 28.3861 27.3592 27.6592 28.086C26.9324 28.8129 25.9466 29.2212 24.9188 29.2212C23.8909 29.2212 22.9051 28.8129 22.1783 28.086C21.4514 27.3592 21.0431 26.3734 21.0431 25.3456ZM17.1675 35.8945C17.1675 32.9232 19.5777 30.5131 22.549 30.5131H27.2885C30.2598 30.5131 32.67 32.9232 32.67 35.8945C32.67 36.488 32.1896 36.9724 31.5921 36.9724H18.2454C17.652 36.9724 17.1675 36.492 17.1675 35.8945Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_100_179" x1="0" y1="0.302429" x2="50" y2="50.3024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3B82F6"/>
          <stop offset="1" stop-color="#2563EB"/>
          </linearGradient>
          </defs>
          </svg>

        </span>
      ),
      name: 'Email Marketing',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.....",
      tooltip: null,
      recommended: false,
      image: '/assets/srch-img.png',
    },
    {
      badge: 'CRM',
      badgeColor: 'bg-[#EBFAEB] text-[#22C55E]',
      icon: (
        <span className="w-10 h-10 flex items-center justify-center ">
          <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.302429" width="50" height="50" rx="16" fill="url(#paint0_linear_100_198)"/>
          <path d="M15.3333 15.6357C15.3333 14.7138 14.5885 13.969 13.6667 13.969C12.7448 13.969 12 14.7138 12 15.6357V33.1357C12 35.4377 13.8646 37.3023 16.1667 37.3023H37C37.9219 37.3023 38.6667 36.5575 38.6667 35.6357C38.6667 34.7138 37.9219 33.969 37 33.969H16.1667C15.7083 33.969 15.3333 33.594 15.3333 33.1357V15.6357ZM36.5104 20.1461C37.1615 19.495 37.1615 18.4377 36.5104 17.7867C35.8594 17.1357 34.8021 17.1357 34.151 17.7867L28.6667 23.2763L25.6771 20.2867C25.026 19.6357 23.9688 19.6357 23.3177 20.2867L17.4844 26.12C16.8333 26.7711 16.8333 27.8284 17.4844 28.4794C18.1354 29.1305 19.1927 29.1305 19.8438 28.4794L24.5 23.8284L27.4896 26.818C28.1406 27.469 29.1979 27.469 29.849 26.818L36.5156 20.1513L36.5104 20.1461Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_100_198" x1="0" y1="0.302429" x2="50" y2="50.3024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A855F7"/>
          <stop offset="1" stop-color="#9333EA"/>
          </linearGradient>
          </defs>
          </svg>

        </span>
      ),
      name: 'CRM',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.....",
      tooltip: null,
      recommended: false,
      image: '/assets/srch-img.png',
    },
    {
      badge: 'Analytics',
      badgeColor: 'bg-[#22C55E] text-white',
      icon: (
        <span className="w-10 h-10 flex items-center justify-center">
          <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.302429" width="50" height="50" rx="16" fill="url(#paint0_linear_100_201)"/>
          <path d="M14.5 15.6359C13.1198 15.6359 12 16.7557 12 18.1359C12 18.9223 12.3698 19.6619 13 20.1359L24.3333 28.6359C24.9271 29.0786 25.7396 29.0786 26.3333 28.6359L37.6667 20.1359C38.2969 19.6619 38.6667 18.9223 38.6667 18.1359C38.6667 16.7557 37.5469 15.6359 36.1667 15.6359H14.5ZM12 21.4692V32.3025C12 34.1411 13.4948 35.6359 15.3333 35.6359H35.3333C37.1719 35.6359 38.6667 34.1411 38.6667 32.3025V21.4692L27.3333 29.9692C26.1458 30.8598 24.5208 30.8598 23.3333 29.9692L12 21.4692Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_100_201" x1="0" y1="0.302429" x2="50" y2="50.3024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F97316"/>
          <stop offset="1" stop-color="#EA580C"/>
          </linearGradient>
          </defs>
          </svg>

        </span>
      ),
      name: 'Analytics',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.....",
      tooltip: 'Transify AI recommends this.',
      recommended: true,
      image: '/assets/srch-img.png',
    },
  ];
  return (
    <div className="absolute left-0 right-0 mt-2 bg-white rounded-[16px] shadow-lg z-40 border " style={{ minWidth: '100%', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', borderWidth: "2px" }}>
      {/* Badges row */}
      <div className="flex flex-wrap gap-3 px-6 pt-5 pb-3">
        {badgeList.map(badge => (
          <button
            key={badge.key}
            className={`px-4 py-2 rounded-[6px] font-semibold text-[13px] transition-all duration-150 ${activeBadge === badge.key ? 'bg-[#22C55E] text-white' : 'bg-[#EBFAEB] text-[#22C55E]'}`}
            onClick={() => {
              setActiveBadge(badge.key);
              // When switching to 'Recommended Only', open Analytics by default
              if (badge.key === 'Recommended Only') {
                setOpenIndices([2]);
              } else {
                setOpenIndices([]);
              }
            }}
          >
            {badge.label}
          </button>
        ))}
      </div>
      <div className="border-t border-[#E5E7EB]" >
        {accordions.map((tool, idx) => {
          // Only use openIndices to determine open/close state for all cards
          const isOpen = openIndices.includes(idx);
          return (
            <div key={tool.name + idx} className={`mb-3 border-b border-[#E5E7EB]   relative`}> 
              <button
                className="w-full flex items-center justify-between px-0 py-4 focus:outline-none"
                onClick={() => {
                  if (isOpen) {
                    setOpenIndices(openIndices.filter(i => i !== idx));
                  } else {
                    setOpenIndices([...openIndices, idx]);
                  }
                }}
              >
                <div className="flex items-center gap-3 relative pl-4">
                  {tool.icon}
                  <span className={`ml-2 px-3 py-1 rounded-[6px] font-bold ml-2 text-[15px] relative ${isOpen ? 'bg-[#EBFAEB] text-[#22c55e]' : 'bg-[#fff] text-[#23272E]'}`}>{tool.badge}</span>
                </div>
                <div className="flex items-center gap-2 pr-6">
                  {tool.recommended && (
                    <span className="relative group">
                      <span className="px-3 py-1 rounded-full text-[15px] font-medium bg-[#DCFCE7] text-[#23272E] border border-[#EBFAEB] cursor-pointer">
                        Recommended
                      </span>
                      <span className="absolute left-1/2 -translate-x-1/2 -top-9 z-50 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 flex flex-col items-center">
                        <span className="bg-[#111827] text-white text-xs px-4 py-1 rounded-full font-medium mb-1 whitespace-nowrap">
                          Transify AI recommends this.
                        </span>
                        <span className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-[#111827]"></span>
                      </span>
                    </span>
                  )}
                  <span className="text-[#22C55E] text-2xl font-bold">{isOpen ? '-' : '+'}</span>
                </div>
              </button>
              {isOpen && tool.desc && (
                <div className="px-6 pb-6 pt-1">
                  <div className="text-[#6B7280] text-[14px] mb-2">{tool.desc}</div>
                  <div className="bg-[#F8FAFB] rounded-xl p-5 mt-4 flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-[#23272E] text-[16px] mb-2">Key features</div>
                      <ul className="list-disc pl-5 text-[#23272E] text-[14px] space-y-1">
                        <li>Lorem Ipsum is simply dummy text</li>
                        <li>Lorem Ipsum is simply dummy text</li>
                        <li>Lorem Ipsum is simply dummy text</li>
                        <li>Lorem Ipsum is simply dummy text</li>
                      </ul>
                    </div>
                    {tool.image && (
                      <img src={tool.image} alt="tool thumb" className="w-32 h-20 object-cover rounded-lg border border-[#E5E7EB]" />
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 gap-3 sm:gap-0">
                    <span className="flex items-center text-[#22C55E] text-[15px] font-medium">
                      <svg className="mr-1" width="14" height="24" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 0.684448C11.0214 0.684448 10.5 1.2058 10.5 1.85111C10.5 2.49643 11.0214 3.01778 11.6667 3.01778H14.6818L7.34271 10.3605C6.88698 10.8162 6.88698 11.5563 7.34271 12.0121C7.79844 12.4678 8.53854 12.4678 8.99427 12.0121L16.3333 4.66934V7.68445C16.3333 8.32976 16.8547 8.85111 17.5 8.85111C18.1453 8.85111 18.6667 8.32976 18.6667 7.68445V1.85111C18.6667 1.2058 18.1453 0.684448 17.5 0.684448H11.6667ZM2.91667 1.85111C1.30521 1.85111 0 3.15632 0 4.76778V16.4344C0 18.0459 1.30521 19.3511 2.91667 19.3511H14.5833C16.1948 19.3511 17.5 18.0459 17.5 16.4344V12.3511C17.5 11.7058 16.9786 11.1844 16.3333 11.1844C15.688 11.1844 15.1667 11.7058 15.1667 12.3511V16.4344C15.1667 16.7553 14.9042 17.0178 14.5833 17.0178H2.91667C2.59583 17.0178 2.33333 16.7553 2.33333 16.4344V4.76778C2.33333 4.44695 2.59583 4.18445 2.91667 4.18445H7C7.64531 4.18445 8.16667 3.66309 8.16667 3.01778C8.16667 2.37247 7.64531 1.85111 7 1.85111H2.91667Z" fill="#32CD32"/>
                      </svg>
                      Open
                    </span>
                    <button className="flex items-center bg-[#22C55E] text-white font-semibold px-8 py-2 rounded-lg text-[16px] shadow hover:bg-[#16a34a] transition-all w-full sm:w-auto justify-center"><svg className="mr-2" width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M9 3.75V14.25M3.75 9H14.25" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> Add Tool</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}; 