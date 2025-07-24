import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Topbar } from '../components/Topbar/Topbar';

export const AccountOverview = () => {
  const [toolList, setToolList] = useState([
    { name: 'Tool 1', icon: <span className=" flex items-center justify-center"><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="-0.000671387" width="42.6667" height="42.6667" rx="10.6667" fill="#FFEDD5"/>
        <path d="M15.4993 11.6653C14.2124 11.6653 13.166 12.7117 13.166 13.9987V27.9987C13.166 29.2857 14.2124 30.332 15.4993 30.332H25.9993C27.2863 30.332 28.3327 29.2857 28.3327 27.9987V13.9987C28.3327 12.7117 27.2863 11.6653 25.9993 11.6653H15.4993ZM19.5827 22.1653H21.916C23.5275 22.1653 24.8327 23.4706 24.8327 25.082C24.8327 25.4028 24.5702 25.6653 24.2493 25.6653H17.2493C16.9285 25.6653 16.666 25.4028 16.666 25.082C16.666 23.4706 17.9712 22.1653 19.5827 22.1653ZM18.416 18.6653C18.416 18.0465 18.6618 17.453 19.0994 17.0154C19.537 16.5778 20.1305 16.332 20.7493 16.332C21.3682 16.332 21.9617 16.5778 22.3993 17.0154C22.8368 17.453 23.0827 18.0465 23.0827 18.6653C23.0827 19.2842 22.8368 19.8777 22.3993 20.3153C21.9617 20.7528 21.3682 20.9987 20.7493 20.9987C20.1305 20.9987 19.537 20.7528 19.0994 20.3153C18.6618 19.8777 18.416 19.2842 18.416 18.6653ZM30.666 14.582C30.666 14.2612 30.4035 13.9987 30.0827 13.9987C29.7618 13.9987 29.4993 14.2612 29.4993 14.582V16.9153C29.4993 17.2362 29.7618 17.4987 30.0827 17.4987C30.4035 17.4987 30.666 17.2362 30.666 16.9153V14.582ZM30.0827 18.6653C29.7618 18.6653 29.4993 18.9278 29.4993 19.2487V21.582C29.4993 21.9028 29.7618 22.1653 30.0827 22.1653C30.4035 22.1653 30.666 21.9028 30.666 21.582V19.2487C30.666 18.9278 30.4035 18.6653 30.0827 18.6653ZM30.666 23.9153C30.666 23.5945 30.4035 23.332 30.0827 23.332C29.7618 23.332 29.4993 23.5945 29.4993 23.9153V26.2487C29.4993 26.5695 29.7618 26.832 30.0827 26.832C30.4035 26.832 30.666 26.5695 30.666 26.2487V23.9153Z" fill="#EA580C"/>
        </svg>
        </span> },
    { name: 'Tool 2', icon: <span className="rounded flex items-center justify-center"><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.334045" width="42.6667" height="42.6667" rx="10.6667" fill="#FEF9C3"/>
        <path d="M13.75 14.334C12.7839 14.334 12 15.1179 12 16.084C12 16.6346 12.2589 17.1523 12.7 17.484L20.6333 23.434C21.049 23.7439 21.6177 23.7439 22.0333 23.434L29.9667 17.484C30.4078 17.1523 30.6667 16.6346 30.6667 16.084C30.6667 15.1179 29.8828 14.334 28.9167 14.334H13.75ZM12 18.4174V26.0007C12 27.2877 13.0464 28.334 14.3333 28.334H28.3333C29.6203 28.334 30.6667 27.2877 30.6667 26.0007V18.4174L22.7333 24.3674C21.9021 24.9908 20.7646 24.9908 19.9333 24.3674L12 18.4174Z" fill="#CA8A04"/>
        </svg>
        </span> },
  ]);
  const hasTools = toolList.length > 0;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        toolList={toolList} 
        setToolList={setToolList} 
        hasTools={hasTools} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Custom Topbar for Account Overview */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Mobile menu button and Account Settings text */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                className="lg:hidden mr-3 p-2 rounded-md text-[#32cd32] hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#32cd32]"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Account Settings</h1>
            </div>
            
            {/* Right side - Notification bell and profile picture */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Notification bell */}
              <button className="relative w-9 h-9 sm:w-10 sm:h-10 bg-[#32cd32] rounded-full flex items-center justify-center hover:bg-[#28a745] transition-colors">
                <svg width="20" height="20" className="w-5 h-5 text-white" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.64366 3.61951C9.83277 3.3938 9.92585 3.10294 9.90292 2.80938C9.87998 2.51581 9.74286 2.24293 9.52098 2.04933C9.29911 1.85574 9.01018 1.75684 8.71621 1.77389C8.42224 1.79094 8.14667 1.92257 7.94866 2.14051L6.01066 4.36051C4.91173 5.61986 4.29052 7.22547 4.25566 8.89651L4.17016 12.975C4.164 13.2734 4.27661 13.562 4.48323 13.7773C4.68985 13.9927 4.97354 14.1171 5.27191 14.1233C5.57028 14.1294 5.85888 14.0168 6.07422 13.8102C6.28956 13.6036 6.414 13.3199 6.42016 13.0215L6.50416 8.94451C6.52823 7.8011 6.95352 6.70255 7.70566 5.84101L9.64366 3.61951Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35591 11.55C9.45665 9.9452 10.1652 8.43912 11.3373 7.33835C12.5094 6.23759 14.057 5.62489 15.6649 5.625H16.5004V4.5C16.5004 4.10217 16.6585 3.72064 16.9398 3.43934C17.2211 3.15804 17.6026 3 18.0004 3C18.3982 3 18.7798 3.15804 19.0611 3.43934C19.3424 3.72064 19.5004 4.10217 19.5004 4.5V5.625H20.3359C21.9439 5.62489 23.4914 6.23759 24.6635 7.33835C25.8356 8.43912 26.5442 9.9452 26.6449 11.55L26.9764 16.851C27.1046 18.8718 27.783 20.8191 28.9384 22.482C29.1775 22.8256 29.3235 23.2252 29.3624 23.642C29.4013 24.0587 29.3316 24.4785 29.1602 24.8603C28.9889 25.2422 28.7216 25.5732 28.3844 25.8212C28.0472 26.0692 27.6515 26.2257 27.2359 26.2755L22.1254 26.8875V28.5C22.1254 29.594 21.6908 30.6432 20.9172 31.4168C20.1436 32.1904 19.0944 32.625 18.0004 32.625C16.9064 32.625 15.8572 32.1904 15.0836 31.4168C14.31 30.6432 13.8754 29.594 13.8754 28.5V26.8875L8.76491 26.274C8.34956 26.2241 7.95417 26.0675 7.61718 25.8197C7.28019 25.5718 7.01304 25.2409 6.84169 24.8593C6.67034 24.4776 6.60062 24.0581 6.63929 23.6416C6.67797 23.225 6.82373 22.8256 7.06241 22.482C8.21778 20.8191 8.89626 18.8718 9.02441 16.851L9.35591 11.55ZM16.1254 28.5C16.1254 28.9973 16.323 29.4742 16.6746 29.8258C17.0262 30.1774 17.5031 30.375 18.0004 30.375C18.4977 30.375 18.9746 30.1774 19.3262 29.8258C19.6779 29.4742 19.8754 28.9973 19.8754 28.5V27.375H16.1254V28.5Z" fill="white"/>
                  <path d="M26.4653 2.03249C26.2405 2.22865 26.1029 2.50603 26.0827 2.80363C26.0624 3.10123 26.1612 3.3947 26.3573 3.61949L28.2953 5.83949C29.0472 6.70164 29.472 7.80075 29.4953 8.94449L29.5808 13.02C29.5838 13.1677 29.6159 13.3134 29.6753 13.4487C29.7347 13.5841 29.8201 13.7064 29.9267 13.8087C30.0333 13.911 30.1591 13.9913 30.2967 14.045C30.4344 14.0987 30.5813 14.1248 30.729 14.1217C30.8767 14.1187 31.0224 14.0866 31.1578 14.0272C31.2931 13.9679 31.4154 13.8824 31.5177 13.7758C31.62 13.6692 31.7003 13.5434 31.754 13.4058C31.8077 13.2681 31.8338 13.1212 31.8308 12.9735L31.7453 8.89649C31.7104 7.22545 31.0892 5.61984 29.9903 4.36049L28.0523 2.14049C27.8561 1.91578 27.5787 1.77816 27.2811 1.75791C26.9835 1.73766 26.6901 1.83642 26.4653 2.03249Z" fill="white"/>
                </svg>
              </button>
              
              {/* Profile picture */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[16px] overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 px-2 sm:px-4 md:px-6 lg:px-10">
          <div className="mx-auto py-6 sm:py-8">
            <div className="bg-white rounded-[21px] shadow-sm border border-[#F3F4F6]">
            {/* Header */}
            <div className="border-b border-[#F3F4F6] px-4 sm:px-8 py-4 sm:py-6">
              <h1 className="text-lg sm:text-[26px] font-bold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Account Overview</h1>
            </div>

            {/* Profile and Account Details */}
            <div className="p-4 sm:p-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Profile Picture */}
                <div className="flex-shrink-0 flex justify-center lg:block mb-4 lg:mb-0">
                  <div className="w-20 h-20 sm:w-[106px] sm:h-[106px] rounded-[21px] overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Account Details Form */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[15px] sm:text-[16px] font-semibold text-[#374151] mb-2 " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="Sarah Johnson" 
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#E5E7EB] rounded-[12px] text-[15px] sm:text-[16px] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[15px] sm:text-[16px] font-semibold text-[#374151] mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="sarah@marketingpro.com" 
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#E5E7EB] rounded-[12px] text-[15px] sm:text-[16px] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-[15px] sm:text-[16px] font-semibold text-[#374151] mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Company</label>
                      <input 
                        type="text" 
                        defaultValue="Marketing Pro Agency" 
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#E5E7EB] rounded-[12px] text-[15px] sm:text-[16px] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-[15px] sm:text-[16px] font-semibold text-[#374151] mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Role</label>
                      <input 
                        type="text" 
                        defaultValue="Owner" 
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#E5E7EB] rounded-[12px] text-[15px] sm:text-[16px] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button className="bg-[#32cd32] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-[12px] font-semibold hover:bg-[#28a745] transition-colors" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                      Save Changes
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-[12px] font-semibold hover:bg-gray-300 transition-colors" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Team Management Section */}
            <div className="bg-white rounded-[21px] shadow-sm border border-[#F3F4F6] mt-8">
              {/* Header */}
              <div className="border-b border-[#F3F4F6] px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <h2 className="text-lg sm:text-[26px] font-bold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Team Management</h2>
                  <button className="bg-[#32cd32] text-white px-5 sm:px-6 py-2 rounded-[12px] font-semibold hover:bg-[#28a745] transition-colors flex items-center gap-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Invite Member
                  </button>
                </div>
              </div>

              {/* Team Members List */}
              <div className="p-4 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  {/* Sarah Johnson - Owner */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-3 sm:px-5 bg-[#F9FAFB] rounded-[16px] ">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                      <div className="w-14 h-14 sm:w-[64px] sm:h-[64px] rounded-[16px] overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/women/44.jpg" 
                          alt="Sarah Johnson" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Sarah Johnson</h3>
                        <p className="text-[13px] sm:text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>sarah@marketingpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                       <span className="bg-[#DBEAFE] text-[#1E40AF] px-2 sm:px-3 py-1 rounded-[6px] text-[13px] sm:text-[14px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Owner</span>
                       <button className="py-2 text-[#6B7280] hover:text-[#374151] transition-colors">
                       <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.318 1.23638C19.4055 0.323877 17.9305 0.323877 17.018 1.23638L15.7638 2.48638L19.843 6.56554L21.0971 5.31138C22.0096 4.39888 22.0096 2.92388 21.0971 2.01138L20.318 1.23638ZM7.8513 10.403C7.59714 10.6572 7.4013 10.9697 7.2888 11.3155L6.05547 15.0155C5.93464 15.3739 6.03047 15.7697 6.29714 16.0405C6.5638 16.3114 6.95964 16.403 7.32214 16.2822L11.0221 15.0489C11.3638 14.9364 11.6763 14.7405 11.9346 14.4864L18.9055 7.51138L14.8221 3.42804L7.8513 10.403ZM4.66797 2.99888C2.45964 2.99888 0.667969 4.79054 0.667969 6.99888V17.6655C0.667969 19.8739 2.45964 21.6655 4.66797 21.6655H15.3346C17.543 21.6655 19.3346 19.8739 19.3346 17.6655V13.6655C19.3346 12.928 18.7388 12.3322 18.0013 12.3322C17.2638 12.3322 16.668 12.928 16.668 13.6655V17.6655C16.668 18.403 16.0721 18.9989 15.3346 18.9989H4.66797C3.93047 18.9989 3.33464 18.403 3.33464 17.6655V6.99888C3.33464 6.26138 3.93047 5.66554 4.66797 5.66554H8.66797C9.40547 5.66554 10.0013 5.06971 10.0013 4.33221C10.0013 3.59471 9.40547 2.99888 8.66797 2.99888H4.66797Z" fill="#9CA3AF"/>
                        </svg>
                       </button>
                    </div>
                  </div>

                  {/* Mike Chen - Admin */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-3 sm:px-5 bg-[#F9FAFB] rounded-[16px]">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                      <div className="w-14 h-14 sm:w-[64px] sm:h-[64px] rounded-[16px] overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/men/32.jpg" 
                          alt="Mike Chen" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Mike Chen</h3>
                        <p className="text-[13px] sm:text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>mike@marketingpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="bg-[#DCFCE7] text-[#166534] px-2 sm:px-3 py-1 rounded-[6px] text-[13px] sm:text-[14px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Admin</span>
                      <button className="py-2 text-[#6B7280] hover:text-[#374151] transition-colors">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.318 1.23638C19.4055 0.323877 17.9305 0.323877 17.018 1.23638L15.7638 2.48638L19.843 6.56554L21.0971 5.31138C22.0096 4.39888 22.0096 2.92388 21.0971 2.01138L20.318 1.23638ZM7.8513 10.403C7.59714 10.6572 7.4013 10.9697 7.2888 11.3155L6.05547 15.0155C5.93464 15.3739 6.03047 15.7697 6.29714 16.0405C6.5638 16.3114 6.95964 16.403 7.32214 16.2822L11.0221 15.0489C11.3638 14.9364 11.6763 14.7405 11.9346 14.4864L18.9055 7.51138L14.8221 3.42804L7.8513 10.403ZM4.66797 2.99888C2.45964 2.99888 0.667969 4.79054 0.667969 6.99888V17.6655C0.667969 19.8739 2.45964 21.6655 4.66797 21.6655H15.3346C17.543 21.6655 19.3346 19.8739 19.3346 17.6655V13.6655C19.3346 12.928 18.7388 12.3322 18.0013 12.3322C17.2638 12.3322 16.668 12.928 16.668 13.6655V17.6655C16.668 18.403 16.0721 18.9989 15.3346 18.9989H4.66797C3.93047 18.9989 3.33464 18.403 3.33464 17.6655V6.99888C3.33464 6.26138 3.93047 5.66554 4.66797 5.66554H8.66797C9.40547 5.66554 10.0013 5.06971 10.0013 4.33221C10.0013 3.59471 9.40547 2.99888 8.66797 2.99888H4.66797Z" fill="#9CA3AF"/>
                        </svg>
                      </button>
                      <button className="py-2 text-[#6B7280] hover:text-red-500 transition-colors">
                      <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.96536 1.07075L5.66536 1.66659H1.66536C0.927864 1.66659 0.332031 2.26242 0.332031 2.99992C0.332031 3.73742 0.927864 4.33325 1.66536 4.33325H17.6654C18.4029 4.33325 18.9987 3.73742 18.9987 2.99992C18.9987 2.26242 18.4029 1.66659 17.6654 1.66659H13.6654L13.3654 1.07075C13.1404 0.616585 12.6779 0.333252 12.1737 0.333252H7.15703C6.65286 0.333252 6.19036 0.616585 5.96536 1.07075ZM17.6654 5.66659H1.66536L2.5487 19.7916C2.61536 20.8458 3.49036 21.6666 4.54453 21.6666H14.7862C15.8404 21.6666 16.7154 20.8458 16.782 19.7916L17.6654 5.66659Z" fill="#9CA3AF"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Emma Rodriguez - Member */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 px-3 sm:px-5 bg-[#F9FAFB] rounded-[16px]">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                      <div className="w-14 h-14 sm:w-[64px] sm:h-[64px] rounded-[16px] overflow-hidden">
                        <img 
                          src="https://randomuser.me/api/portraits/women/68.jpg" 
                          alt="Emma Rodriguez" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Emma Rodriguez</h3>
                        <p className="text-[13px] sm:text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>emma@marketingpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="bg-[#F3F4F6] text-[#1F2937] px-2 sm:px-3 py-1 rounded-[6px] text-[13px] sm:text-[14px] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Member</span>
                      <button className="py-2 text-[#6B7280] hover:text-[#374151] transition-colors">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.318 1.23638C19.4055 0.323877 17.9305 0.323877 17.018 1.23638L15.7638 2.48638L19.843 6.56554L21.0971 5.31138C22.0096 4.39888 22.0096 2.92388 21.0971 2.01138L20.318 1.23638ZM7.8513 10.403C7.59714 10.6572 7.4013 10.9697 7.2888 11.3155L6.05547 15.0155C5.93464 15.3739 6.03047 15.7697 6.29714 16.0405C6.5638 16.3114 6.95964 16.403 7.32214 16.2822L11.0221 15.0489C11.3638 14.9364 11.6763 14.7405 11.9346 14.4864L18.9055 7.51138L14.8221 3.42804L7.8513 10.403ZM4.66797 2.99888C2.45964 2.99888 0.667969 4.79054 0.667969 6.99888V17.6655C0.667969 19.8739 2.45964 21.6655 4.66797 21.6655H15.3346C17.543 21.6655 19.3346 19.8739 19.3346 17.6655V13.6655C19.3346 12.928 18.7388 12.3322 18.0013 12.3322C17.2638 12.3322 16.668 12.928 16.668 13.6655V17.6655C16.668 18.403 16.0721 18.9989 15.3346 18.9989H4.66797C3.93047 18.9989 3.33464 18.403 3.33464 17.6655V6.99888C3.33464 6.26138 3.93047 5.66554 4.66797 5.66554H8.66797C9.40547 5.66554 10.0013 5.06971 10.0013 4.33221C10.0013 3.59471 9.40547 2.99888 8.66797 2.99888H4.66797Z" fill="#9CA3AF"/>
                        </svg>
                      </button>
                      <button className="py-2 text-[#6B7280] hover:text-red-500 transition-colors">
                      <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.96536 1.07075L5.66536 1.66659H1.66536C0.927864 1.66659 0.332031 2.26242 0.332031 2.99992C0.332031 3.73742 0.927864 4.33325 1.66536 4.33325H17.6654C18.4029 4.33325 18.9987 3.73742 18.9987 2.99992C18.9987 2.26242 18.4029 1.66659 17.6654 1.66659H13.6654L13.3654 1.07075C13.1404 0.616585 12.6779 0.333252 12.1737 0.333252H7.15703C6.65286 0.333252 6.19036 0.616585 5.96536 1.07075ZM17.6654 5.66659H1.66536L2.5487 19.7916C2.61536 20.8458 3.49036 21.6666 4.54453 21.6666H14.7862C15.8404 21.6666 16.7154 20.8458 16.782 19.7916L17.6654 5.66659Z" fill="#9CA3AF"/>
                        </svg>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing & Plans Section */}
            <div className="bg-white rounded-[21px] shadow-sm border border-[#F3F4F6] mt-8">
              {/* Header */}
              <div className="border-b border-[#F3F4F6] px-4 sm:px-8 py-4 sm:py-6">
                <h2 className="text-lg sm:text-[26px] font-bold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Billing & Plans</h2>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-8 ">
                {/* Current Plan Section */}
                <h3 className="text-[16px] sm:text-[18px] font-medium text-[#374151] mb-2 sm:mb-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Current Plan</h3>
                  
                <div className="border border-2 rounded-[12px] p-4 sm:p-6 mb-4 sm:mb-5" style={{ backgroundColor: 'rgba(50, 205, 50, 0.05)', borderColor: 'rgba(50, 205, 50, 0.2)' }}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="flex-1 w-full min-w-0">
                      <h3 className="text-[17px] sm:text-[20px] font-semibold text-[#111827] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Professional Plan</h3>
                      <p className="text-[14px] sm:text-[15px] text-[#4B5563] mb-3 sm:mb-4" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Perfect for growing teams</p>
                      
                      {/* Features */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 md:gap-20 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-600" fill="#32CD32" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[13px] sm:text-[14px] text-[#374151]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Up to 10 team members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-600" fill="#32CD32" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[13px] sm:text-[14px] text-[#374151]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Unlimited tools</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-600" fill="#32CD32" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[13px] sm:text-[14px] text-[#374151]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Priority support</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <button className="bg-[#32CD32] text-white px-5 sm:px-6 py-2 rounded-[8px] font-semibold hover:bg-green-700 transition-colors" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                          Upgrade Plan
                        </button>
                        <button className="text-[#374151] border border-[#D1D5DB] px-5 sm:px-6 py-2 rounded-[8px] font-semibold hover:bg-gray-50 transition-colors" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                          View All Plans
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <div className="text-[28px] sm:text-[32px] font-bold text-[#374151]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$49</div>
                      <div className="text-[13px] sm:text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>per month</div>
                    </div>
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className='mb-4 sm:mb-5'>
                  <h3 className="text-[16px] sm:text-[18px] font-medium text-[#374151] mb-2 sm:mb-3" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Payment Method</h3>
                  <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-6 sm:w-10 bg-blue-600 rounded-[4px] flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1862 18.9882L6.6612 20.2174C5.88203 19.8216 5.16536 19.3341 4.51536 18.7632L5.4612 17.8174C5.98203 18.2716 6.5612 18.6674 7.1862 18.9882ZM2.35703 11.6674H1.01953C1.07786 12.5507 1.24453 13.4049 1.50703 14.2132L2.7487 13.7174C2.54453 13.0632 2.40703 12.3757 2.35703 11.6674ZM2.35703 10.3341C2.41536 9.55073 2.5737 8.7924 2.81953 8.0799L1.59036 7.5549C1.27786 8.4299 1.08203 9.36323 1.01953 10.3341H2.35703ZM3.34453 6.8549C3.66953 6.23407 4.0612 5.6549 4.51536 5.12573L3.56953 4.1799C2.9987 4.8299 2.50703 5.54657 2.11536 6.32573L3.34453 6.8549ZM17.207 17.8174C16.6279 18.3174 15.982 18.7466 15.2862 19.0841L15.782 20.3257C16.6445 19.9132 17.4404 19.3841 18.1529 18.7591L17.207 17.8174ZM5.45703 4.18407C6.0362 3.68407 6.68203 3.2549 7.37786 2.9174L6.88203 1.67573C6.01953 2.08823 5.2237 2.6174 4.51536 3.2424L5.45703 4.18407ZM19.3195 15.1466C18.9945 15.7674 18.6029 16.3466 18.1487 16.8757L19.0945 17.8216C19.6654 17.1716 20.157 16.4507 20.5487 15.6757L19.3195 15.1466ZM20.307 11.6674C20.2487 12.4507 20.0904 13.2091 19.8445 13.9216L21.0737 14.4466C21.3862 13.5674 21.582 12.6341 21.6404 11.6632H20.307V11.6674ZM14.0487 19.5841C13.3945 19.7924 12.707 19.9257 11.9987 19.9757V21.3132C12.882 21.2549 13.7362 21.0882 14.5445 20.8257L14.0487 19.5841ZM10.6654 19.9757C9.88203 19.9174 9.1237 19.7591 8.4112 19.5132L7.8862 20.7424C8.76537 21.0549 9.6987 21.2507 10.6695 21.3091V19.9757H10.6654ZM19.9154 8.28407C20.1237 8.93823 20.257 9.62573 20.307 10.3341H21.6445C21.5862 9.45073 21.4195 8.59657 21.157 7.78823L19.9154 8.28407ZM4.51536 16.8757C4.01536 16.2966 3.5862 15.6507 3.2487 14.9549L2.00703 15.4507C2.41953 16.3132 2.9487 17.1091 3.5737 17.8216L4.51536 16.8757ZM11.9987 2.02573C12.782 2.08407 13.5362 2.2424 14.2529 2.48823L14.7779 1.25907C13.9029 0.946566 12.9695 0.750732 11.9987 0.688232V2.02573ZM8.61537 2.4174C9.26953 2.20907 9.95703 2.07573 10.6654 2.02573V0.688232C9.78203 0.746566 8.92786 0.913232 8.11953 1.17573L8.61537 2.4174ZM19.0945 4.1799L18.1487 5.12573C18.6487 5.7049 19.0779 6.35073 19.4195 7.04657L20.6612 6.55073C20.2487 5.68823 19.7195 4.8924 19.0945 4.1799ZM17.207 4.18407L18.1529 3.23823C17.5029 2.6674 16.7862 2.17573 16.007 1.78407L15.482 3.01323C16.0987 3.33823 16.682 3.7299 17.207 4.18407Z" fill="white"/>
                        <path opacity="0.375" d="M11.3307 16.6673C11.9751 16.6673 12.4974 16.145 12.4974 15.5007C12.4974 14.8563 11.9751 14.334 11.3307 14.334C10.6864 14.334 10.1641 14.8563 10.1641 15.5007C10.1641 16.145 10.6864 16.6673 11.3307 16.6673Z" fill="white"/>
                        <path opacity="0.375" d="M11.6536 13.3341H10.9869C10.7119 13.3341 10.4869 13.1091 10.4869 12.8341C10.4869 9.87573 13.7119 10.1716 13.7119 8.3424C13.7119 7.50907 12.9703 6.6674 11.3203 6.6674C10.1078 6.6674 9.47444 7.0674 8.85361 7.86323C8.69111 8.07157 8.39111 8.11323 8.17861 7.96323L7.63277 7.5799C7.39944 7.4174 7.34527 7.08823 7.52444 6.86323C8.40777 5.7299 9.45777 5.00073 11.3244 5.00073C13.5036 5.00073 15.3828 6.2424 15.3828 8.3424C15.3828 11.1591 12.1578 10.9882 12.1578 12.8341C12.1536 13.1091 11.9286 13.3341 11.6536 13.3341Z" fill="white"/>
                        </svg>

                        </div>
                      </div>
                      <div>
                        <div className="text-[15px] sm:text-[16px] font-medium text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>**** **** **** 4242</div>
                        <div className="text-[13px] sm:text-[14px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Expires 12/25</div>
                      </div>
                    </div>
                    <button className="text-[#32CD32] font-medium hover:text-green-700 transition-colors" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                      Update
                    </button>
                  </div>
                </div>

                {/* Billing History Section */}
                <div>
                  <h3 className="text-[16px] sm:text-[18px] font-medium text-[#374151] mb-2 sm:mb-4" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Billing History</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* First Billing Entry */}
                    <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-10 h-10 sm:w-[53px] sm:h-[53px] bg-[#DCFCE7] rounded-[16px] flex items-center justify-center">
                          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M18.2742 0.724854C18.7951 1.24569 18.7951 2.09152 18.2742 2.61235L7.60755 13.279C7.08672 13.7999 6.24089 13.7999 5.72005 13.279L0.386719 7.94569C-0.134115 7.42485 -0.134115 6.57902 0.386719 6.05819C0.907552 5.53735 1.75339 5.53735 2.27422 6.05819L6.66589 10.4457L16.3909 0.724854C16.9117 0.20402 17.7576 0.20402 18.2784 0.724854H18.2742Z" fill="#16A34A"/>
                           </svg>
                          </div>
                          <div>
                            <div className="text-[15px] sm:text-[17px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Professional Plan</div>
                            <div className="text-[13px] sm:text-[15px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Dec 1, 2024</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-[15px] sm:text-[16px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$49.00</div>
                          <button className="text-[#32CD32] font-medium hover:text-green-700 transition-colors flex items-center gap-1" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                          <svg className="w-4 h-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6016 1.6661C12.6016 0.928597 12.0057 0.332764 11.2682 0.332764C10.5307 0.332764 9.9349 0.928597 9.9349 1.6661V11.7786L6.87656 8.72026C6.35573 8.19943 5.5099 8.19943 4.98906 8.72026C4.46823 9.2411 4.46823 10.0869 4.98906 10.6078L10.3224 15.9411C10.8432 16.4619 11.6891 16.4619 12.2099 15.9411L17.5432 10.6078C18.0641 10.0869 18.0641 9.2411 17.5432 8.72026C17.0224 8.19943 16.1766 8.19943 15.6557 8.72026L12.6016 11.7786V1.6661ZM3.26823 14.9994C1.7974 14.9994 0.601562 16.1953 0.601562 17.6661V18.9994C0.601562 20.4703 1.7974 21.6661 3.26823 21.6661H19.2682C20.7391 21.6661 21.9349 20.4703 21.9349 18.9994V17.6661C21.9349 16.1953 20.7391 14.9994 19.2682 14.9994H15.0391L13.1516 16.8869C12.1099 17.9286 10.4224 17.9286 9.38073 16.8869L7.4974 14.9994H3.26823ZM18.6016 17.3328C18.8668 17.3328 19.1211 17.4381 19.3087 17.6257C19.4962 17.8132 19.6016 18.0675 19.6016 18.3328C19.6016 18.598 19.4962 18.8523 19.3087 19.0399C19.1211 19.2274 18.8668 19.3328 18.6016 19.3328C18.3363 19.3328 18.082 19.2274 17.8945 19.0399C17.7069 18.8523 17.6016 18.598 17.6016 18.3328C17.6016 18.0675 17.7069 17.8132 17.8945 17.6257C18.082 17.4381 18.3363 17.3328 18.6016 17.3328Z" fill="#32CD32"/>
                            </svg>
                            Download
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Second Billing Entry */}
                    <div className="bg-white border border-[#E5E7EB] rounded-[12px] p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-10 h-10 sm:w-[53px] sm:h-[53px] bg-[#DCFCE7] rounded-[16px] flex items-center justify-center">
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2742 0.724854C18.7951 1.24569 18.7951 2.09152 18.2742 2.61235L7.60755 13.279C7.08672 13.7999 6.24089 13.7999 5.72005 13.279L0.386719 7.94569C-0.134115 7.42485 -0.134115 6.57902 0.386719 6.05819C0.907552 5.53735 1.75339 5.53735 2.27422 6.05819L6.66589 10.4457L16.3909 0.724854C16.9117 0.20402 17.7576 0.20402 18.2784 0.724854H18.2742Z" fill="#16A34A"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-[15px] sm:text-[17px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Professional Plan</div>
                            <div className="text-[13px] sm:text-[15px] text-[#6B7280]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Nov 1, 2024</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-[15px] sm:text-[16px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$49.00</div>
                          <button className="text-[#32CD32] font-medium hover:text-green-700 transition-colors flex items-center gap-1" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                           <svg className="w-4 h-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6016 1.6661C12.6016 0.928597 12.0057 0.332764 11.2682 0.332764C10.5307 0.332764 9.9349 0.928597 9.9349 1.6661V11.7786L6.87656 8.72026C6.35573 8.19943 5.5099 8.19943 4.98906 8.72026C4.46823 9.2411 4.46823 10.0869 4.98906 10.6078L10.3224 15.9411C10.8432 16.4619 11.6891 16.4619 12.2099 15.9411L17.5432 10.6078C18.0641 10.0869 18.0641 9.2411 17.5432 8.72026C17.0224 8.19943 16.1766 8.19943 15.6557 8.72026L12.6016 11.7786V1.6661ZM3.26823 14.9994C1.7974 14.9994 0.601562 16.1953 0.601562 17.6661V18.9994C0.601562 20.4703 1.7974 21.6661 3.26823 21.6661H19.2682C20.7391 21.6661 21.9349 20.4703 21.9349 18.9994V17.6661C21.9349 16.1953 20.7391 14.9994 19.2682 14.9994H15.0391L13.1516 16.8869C12.1099 17.9286 10.4224 17.9286 9.38073 16.8869L7.4974 14.9994H3.26823ZM18.6016 17.3328C18.8668 17.3328 19.1211 17.4381 19.3087 17.6257C19.4962 17.8132 19.6016 18.0675 19.6016 18.3328C19.6016 18.598 19.4962 18.8523 19.3087 19.0399C19.1211 19.2274 18.8668 19.3328 18.6016 19.3328C18.3363 19.3328 18.082 19.2274 17.8945 19.0399C17.7069 18.8523 17.6016 18.598 17.6016 18.3328C17.6016 18.0675 17.7069 17.8132 17.8945 17.6257C18.082 17.4381 18.3363 17.3328 18.6016 17.3328Z" fill="#32CD32"/>
                            </svg>
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}; 