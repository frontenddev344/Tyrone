import React, { useState, useRef } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';

export const Dashboard = () => {
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
    <div className="min-h-screen bg-[#FFFFFF] flex">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        toolList={toolList}
        setToolList={setToolList}
        hasTools={hasTools}
      />
      {/* Main Content */}
      <main className="flex-1">
        {/* Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />
        <div className='px-4 sm:px-2 lg:px-6 xl:px-10 py-4 sm:py-8'>
          {/* Welcome and Stats */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-14 h-14 sm:w-[85px] sm:h-[85px] rounded-[21px] mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-[22px] sm:text-[28px] lg:text-[36px] text-[#11182] mb-1 sm:mb-0" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome back, Sarah!  <span className="inline-block">👋</span></div>
                <div className="text-[#4B5563] text-[15px] sm:text-[18px] lg:text-[22px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Ready to power up your marketing agency today?</div>
              </div>
            </div>
            {/* Stats Row - 4 cards only, matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-4 xl:gap-6 mb-6 sm:mb-8">
              {/* Card 1 */}
              <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
                <div className="flex items-center mb-2 sm:mb-4">
                  <span className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="-0.000671387" width="64" height="64" rx="16" fill="#32CD32" fill-opacity="0.1"/>
                      <path d="M22.7593 18.259C22.2645 17.8736 21.5614 17.9205 21.1135 18.3632L19.0301 20.4465C18.5874 20.8892 18.5405 21.5924 18.9207 22.0924L23.0874 27.509C23.3218 27.8163 23.6916 27.9986 24.077 27.9986H26.8947L32.5718 33.6757C31.8062 35.1861 32.051 37.0819 33.3166 38.3424L39.1499 44.1757C39.801 44.8267 40.8582 44.8267 41.5093 44.1757L44.8426 40.8424C45.4937 40.1913 45.4937 39.134 44.8426 38.483L39.0093 32.6497C37.7489 31.3892 35.853 31.1392 34.3426 31.9049L28.6655 26.2278V23.4153C28.6655 23.0247 28.4832 22.6601 28.176 22.4257L22.7593 18.259ZM19.702 38.6288C19.0405 39.2903 18.6655 40.1913 18.6655 41.1288C18.6655 43.0819 20.2489 44.6653 22.202 44.6653C23.1395 44.6653 24.0405 44.2903 24.702 43.6288L30.8374 37.4934C30.4312 36.4049 30.3687 35.2226 30.6499 34.1028L27.4364 30.8892L19.702 38.6288ZM45.3322 25.4986C45.3322 24.9517 45.2749 24.4205 45.1655 23.9101C45.0405 23.3267 44.327 23.1757 43.9051 23.5976L40.577 26.9257C40.4207 27.0819 40.2072 27.1705 39.9885 27.1705H36.9989C36.5405 27.1705 36.1655 26.7955 36.1655 26.3372V23.3424C36.1655 23.1236 36.2541 22.9101 36.4103 22.7538L39.7385 19.4257C40.1603 19.0038 40.0093 18.2903 39.426 18.1653C38.9103 18.0559 38.3791 17.9986 37.8322 17.9986C33.6916 17.9986 30.3322 21.358 30.3322 25.4986V25.5403L34.7749 29.983C36.6499 29.509 38.7228 30.009 40.1916 31.4778L41.0093 32.2955C43.5614 31.0976 45.3322 28.5038 45.3322 25.4986ZM21.5822 40.4986C21.5822 40.1671 21.7139 39.8491 21.9483 39.6147C22.1827 39.3803 22.5007 39.2486 22.8322 39.2486C23.1637 39.2486 23.4817 39.3803 23.7161 39.6147C23.9505 39.8491 24.0822 40.1671 24.0822 40.4986C24.0822 40.8301 23.9505 41.1481 23.7161 41.3825C23.4817 41.6169 23.1637 41.7486 22.8322 41.7486C22.5007 41.7486 22.1827 41.6169 21.9483 41.3825C21.7139 41.1481 21.5822 40.8301 21.5822 40.4986Z" fill="#32CD32"/>
                    </svg>
                  </span>
                  <span className="absolute right-3 sm:right-6 top-3 sm:top-8 text-[13px] sm:text-[18px] font-semibold text-[#16A34A]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>+2 this week</span>
                </div>
                <div className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>6</div>
                <div className="text-[#4B5563] text-[13px] sm:text-[16px] lg:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tools Added</div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
                <div className="flex items-center mb-2 sm:mb-4">
                  <span className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="-0.000671387" width="64" height="64" rx="16" fill="#DBEAFE"/>
                      <path d="M21.9993 21.3313C21.9993 20.4095 21.2546 19.6647 20.3327 19.6647C19.4108 19.6647 18.666 20.4095 18.666 21.3313V38.8313C18.666 41.1334 20.5306 42.998 22.8327 42.998H43.666C44.5879 42.998 45.3327 42.2532 45.3327 41.3313C45.3327 40.4095 44.5879 39.6647 43.666 39.6647H22.8327C22.3743 39.6647 21.9993 39.2897 21.9993 38.8313V21.3313ZM43.1764 25.8418C43.8275 25.1907 43.8275 24.1334 43.1764 23.4824C42.5254 22.8313 41.4681 22.8313 40.8171 23.4824L35.3327 28.972L32.3431 25.9824C31.6921 25.3313 30.6348 25.3313 29.9837 25.9824L24.1504 31.8157C23.4993 32.4668 23.4993 33.524 24.1504 34.1751C24.8014 34.8261 25.8587 34.8261 26.5098 34.1751L31.166 29.524L34.1556 32.5136C34.8066 33.1647 35.8639 33.1647 36.515 32.5136L43.1816 25.847L43.1764 25.8418Z" fill="#2563EB"/>
                    </svg>
                  </span>
                  <span className="absolute right-3 sm:right-6 top-3 sm:top-8 text-[13px] sm:text-[18px] font-semibold text-[#16A34A]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>+15%</span>
                </div>
                <div className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>87%</div>
                <div className="text-[#4B5563] text-[13px] sm:text-[16px] lg:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool Usage</div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
                <div className="flex items-center mb-2 sm:mb-4">
                  <span className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="-0.000671387" width="64" height="64" rx="16" fill="#FFEDD5"/>
                      <path d="M26.8177 41.3163L26.1615 42.8528C25.1875 42.358 24.2917 41.7486 23.4792 41.0351L24.6615 39.8528C25.3125 40.4205 26.0365 40.9153 26.8177 41.3163ZM20.7812 32.1653H19.1094C19.1823 33.2695 19.3906 34.3372 19.7188 35.3476L21.2708 34.7278C21.0156 33.9101 20.8437 33.0507 20.7812 32.1653ZM20.7812 30.4986C20.8542 29.5195 21.0521 28.5716 21.3594 27.6809L19.8229 27.0247C19.4323 28.1184 19.1875 29.2851 19.1094 30.4986H20.7812ZM22.0156 26.1497C22.4219 25.3736 22.9115 24.6497 23.4792 23.9882L22.2969 22.8059C21.5833 23.6184 20.9687 24.5143 20.4792 25.4882L22.0156 26.1497ZM39.3438 39.8528C38.6198 40.4778 37.8125 41.0143 36.9427 41.4361L37.5625 42.9882C38.6406 42.4726 39.6354 41.8111 40.526 41.0299L39.3438 39.8528ZM24.6562 22.8111C25.3802 22.1861 26.1875 21.6497 27.0573 21.2278L26.4375 19.6757C25.3594 20.1913 24.3646 20.8528 23.4792 21.6341L24.6562 22.8111ZM41.9844 36.5143C41.5781 37.2903 41.0885 38.0143 40.5208 38.6757L41.7031 39.858C42.4167 39.0455 43.0312 38.1445 43.5208 37.1757L41.9844 36.5143ZM43.2188 32.1653C43.1458 33.1445 42.9479 34.0924 42.6406 34.983L44.1771 35.6393C44.5677 34.5403 44.8125 33.3736 44.8854 32.1601H43.2188V32.1653ZM35.3958 42.0611C34.5781 42.3216 33.7188 42.4882 32.8333 42.5507V44.2226C33.9375 44.1497 35.0052 43.9413 36.0156 43.6132L35.3958 42.0611ZM31.1667 42.5507C30.1875 42.4778 29.2396 42.2799 28.349 41.9726L27.6927 43.5091C28.7917 43.8997 29.9583 44.1445 31.1719 44.2174V42.5507H31.1667ZM42.7292 27.9361C42.9896 28.7538 43.1562 29.6132 43.2188 30.4986H44.8906C44.8177 29.3945 44.6094 28.3268 44.2812 27.3163L42.7292 27.9361ZM23.4792 38.6757C22.8542 37.9518 22.3177 37.1445 21.8958 36.2747L20.3438 36.8945C20.8594 37.9726 21.5208 38.9674 22.3021 39.858L23.4792 38.6757ZM32.8333 20.1132C33.8125 20.1861 34.7552 20.3841 35.651 20.6913L36.3073 19.1549C35.2135 18.7643 34.0469 18.5195 32.8333 18.4413V20.1132ZM28.6042 20.6028C29.4219 20.3424 30.2812 20.1757 31.1667 20.1132V18.4413C30.0625 18.5143 28.9948 18.7226 27.9844 19.0507L28.6042 20.6028ZM41.7031 22.8059L40.5208 23.9882C41.1458 24.7122 41.6823 25.5195 42.1094 26.3893L43.6615 25.7695C43.1458 24.6913 42.4844 23.6966 41.7031 22.8059ZM39.3438 22.8111L40.526 21.6288C39.7135 20.9153 38.8177 20.3007 37.8438 19.8111L37.1875 21.3476C37.9583 21.7538 38.6875 22.2434 39.3438 22.8111Z" fill="#EA580C"/>
                  <path opacity="0.24975" d="M31.9993 38.4153C32.8048 38.4153 33.4577 37.7624 33.4577 36.957C33.4577 36.1516 32.8048 35.4987 31.9993 35.4987C31.1939 35.4987 30.541 36.1516 30.541 36.957C30.541 37.7624 31.1939 38.4153 31.9993 38.4153Z" fill="#EA580C"/>
                  <path opacity="0.24975" d="M32.402 34.2486H31.5686C31.2249 34.2486 30.9436 33.9674 30.9436 33.6236C30.9436 29.9257 34.9749 30.2955 34.9749 28.0091C34.9749 26.9674 34.0478 25.9153 31.9853 25.9153C30.4697 25.9153 29.678 26.4153 28.902 27.4101C28.6988 27.6705 28.3238 27.7226 28.0582 27.5351L27.3759 27.0559C27.0843 26.8528 27.0166 26.4413 27.2405 26.1601C28.3447 24.7434 29.6572 23.832 31.9905 23.832C34.7145 23.832 37.0634 25.3841 37.0634 28.0091C37.0634 31.5299 33.0322 31.3163 33.0322 33.6236C33.027 33.9674 32.7457 34.2486 32.402 34.2486Z" fill="#EA580C"/>
                </svg>
                  </span>
                  <span className="absolute right-3 sm:right-6 top-3 sm:top-8 text-[13px] sm:text-[18px] font-semibold text-[#2563EB]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} >2 of 3</span>
                </div>
                <div className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Scale</div>
                <div className="text-[#4B5563] text-[13px] sm:text-[16px] lg:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Current Goal</div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
                <div className="flex items-center mb-2 sm:mb-4">
                  <span className="w-8 h-8 sm:w-12 sm:h-12  flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="-0.000671387" width="64" height="64" rx="16" fill="#F3E8FF"/>
                      <path d="M31.9994 17.998C32.9213 17.998 33.6661 18.7428 33.6661 19.6647V21.524C33.7494 21.5344 33.8275 21.5449 33.9109 21.5605C33.9317 21.5657 33.9473 21.5657 33.9682 21.5709L36.4682 22.0292C37.3744 22.1959 37.9734 23.0657 37.8067 23.9667C37.64 24.8678 36.7703 25.4719 35.8692 25.3053L33.3953 24.8522C31.765 24.6126 30.3275 24.774 29.3171 25.1751C28.3067 25.5761 27.9005 26.1282 27.8067 26.6386C27.7025 27.1959 27.7807 27.5084 27.8692 27.7011C27.963 27.9042 28.1557 28.1334 28.5359 28.3886C29.3848 28.9459 30.6869 29.3105 32.3744 29.7584L32.5255 29.8001C34.015 30.1959 35.838 30.6751 37.1921 31.5605C37.9317 32.0449 38.6296 32.7011 39.0619 33.6178C39.5046 34.5501 39.5984 35.5917 39.3953 36.7011C39.0359 38.6803 37.6713 40.0032 35.9786 40.6959C35.265 40.9876 34.489 41.1751 33.6661 41.2688V42.998C33.6661 43.9199 32.9213 44.6647 31.9994 44.6647C31.0775 44.6647 30.3328 43.9199 30.3328 42.998V41.1803C30.3119 41.1751 30.2859 41.1751 30.265 41.1699H30.2546C28.9838 40.9719 26.8953 40.4251 25.489 39.8001C24.6505 39.4251 24.2703 38.4407 24.6453 37.6022C25.0203 36.7636 26.0046 36.3834 26.8432 36.7584C27.9317 37.2428 29.7234 37.7219 30.7598 37.8834C32.4213 38.1282 33.7911 37.9876 34.7182 37.6074C35.5984 37.248 35.9994 36.7272 36.114 36.1022C36.213 35.5501 36.1348 35.2324 36.0463 35.0397C35.9473 34.8313 35.7546 34.6022 35.3692 34.3469C34.515 33.7897 33.2078 33.4251 31.515 32.9772L31.3692 32.9407C29.8848 32.5449 28.0619 32.0605 26.7078 31.1751C25.9682 30.6907 25.2755 30.0292 24.8432 29.1126C24.4057 28.1803 24.3171 27.1386 24.5255 26.0292C24.9005 24.0397 26.39 22.748 28.0828 22.0761C28.7755 21.8001 29.5359 21.6126 30.3328 21.5032V19.6647C30.3328 18.7428 31.0775 17.998 31.9994 17.998Z" fill="#9333EA"/>
                    </svg>
                  </span>
                  <span className="absolute right-3 sm:right-6 top-3 sm:top-8 text-[13px] sm:text-[18px] font-semibold text-[#4B5563]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>per month</span>
                </div>
                <div className="font-bold text-[20px] sm:text-[26px] lg:text-[32px] text-[#111827]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$127</div>
                <div className="text-[#4B5563] text-[13px] sm:text-[16px] lg:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Monthly Cost</div>
              </div>
            </div>
          </div>
          {/* Your Tool Stack */}
          <div className="flex  sm:flex-row items-center justify-between mb-2 sm:mb-4 mt-3 sm:mt-5">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-center sm:text-left" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Your Tool Stack</div>
            <a href="#" className="text-[#32CD32] font-semibold text-[15px] sm:text-[18px] flex items-center mt-0 sm:mt-0" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>View All <svg className='ml-1' width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.275 11.6075C18.7958 11.0867 18.7958 10.2408 18.275 9.72001L11.6083 3.05334C11.0875 2.53251 10.2417 2.53251 9.72083 3.05334C9.2 3.57418 9.2 4.42001 9.72083 4.94084L14.1167 9.33251H1.33333C0.595833 9.33251 0 9.92834 0 10.6658C0 11.4033 0.595833 11.9992 1.33333 11.9992H14.1125L9.725 16.3908C9.20417 16.9117 9.20417 17.7575 9.725 18.2783C10.2458 18.7992 11.0917 18.7992 11.6125 18.2783L18.2792 11.6117L18.275 11.6075Z" fill="#32CD32"/>
            </svg></a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-4 xl:gap-6 mb-6 sm:mb-8">
            {/* Tool Card 1 */}
            <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12 rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3 ">
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.332031" width="64" height="64" rx="16" fill="#FFEDD5"/>
                    <path d="M23.6654 18.3334C21.8268 18.3334 20.332 19.8282 20.332 21.6667V41.6667C20.332 43.5052 21.8268 45 23.6654 45H38.6654C40.5039 45 41.9987 43.5052 41.9987 41.6667V21.6667C41.9987 19.8282 40.5039 18.3334 38.6654 18.3334H23.6654ZM29.4987 33.3334H32.832C35.1341 33.3334 36.9987 35.198 36.9987 37.5C36.9987 37.9584 36.6237 38.3334 36.1654 38.3334H26.1654C25.707 38.3334 25.332 37.9584 25.332 37.5C25.332 35.198 27.1966 33.3334 29.4987 33.3334ZM27.832 28.3334C27.832 27.4493 28.1832 26.6015 28.8083 25.9764C29.4335 25.3512 30.2813 25 31.1654 25C32.0494 25 32.8973 25.3512 33.5224 25.9764C34.1475 26.6015 34.4987 27.4493 34.4987 28.3334C34.4987 29.2174 34.1475 30.0653 33.5224 30.6904C32.8973 31.3155 32.0494 31.6667 31.1654 31.6667C30.2813 31.6667 29.4335 31.3155 28.8083 30.6904C28.1832 30.0653 27.832 29.2174 27.832 28.3334ZM45.332 22.5C45.332 22.0417 44.957 21.6667 44.4987 21.6667C44.0404 21.6667 43.6654 22.0417 43.6654 22.5V25.8334C43.6654 26.2917 44.0404 26.6667 44.4987 26.6667C44.957 26.6667 45.332 26.2917 45.332 25.8334V22.5ZM44.4987 28.3334C44.0404 28.3334 43.6654 28.7084 43.6654 29.1667V32.5C43.6654 32.9584 44.0404 33.3334 44.4987 33.3334C44.957 33.3334 45.332 32.9584 45.332 32.5V29.1667C45.332 28.7084 44.957 28.3334 44.4987 28.3334ZM45.332 35.8334C45.332 35.375 44.957 35 44.4987 35C44.0404 35 43.6654 35.375 43.6654 35.8334V39.1667C43.6654 39.625 44.0404 40 44.4987 40C44.957 40 45.332 39.625 45.332 39.1667V35.8334Z" fill="#EA580C"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <div className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool 1</div>
                  <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Customer Management</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-[#4B5563] font-normal mr-2 text-[12px] sm:text-[14px] lg:text-[15px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Usage this month</span>
                <span className="text-[#111827] font-semibold text-[12px] sm:text-[14px] lg:text-[15px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>92%</span>
              </div>
              <div className="w-full h-[7px] sm:h-[10px] bg-[#E5E7EB] rounded-full mb-1 sm:mb-2">
                <div className="h-[7px] sm:h-[10px] bg-[#32CD32] rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[15px] mt-1 sm:mt-2">
                <span className="text-[#111827] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$45/month</span>
                <span className="text-[#32CD32] text-[13px] sm:text-[15px] lg:text-[17px] font-semibold flex items-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}><svg className='mr-1' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8796 0.33252C11.2342 0.33252 10.7129 0.853874 10.7129 1.49919C10.7129 2.1445 11.2342 2.66585 11.8796 2.66585H14.8947L7.5556 10.0086C7.09987 10.4643 7.09987 11.2044 7.5556 11.6601C8.01133 12.1159 8.75143 12.1159 9.20716 11.6601L16.5462 4.31742V7.33252C16.5462 7.97783 17.0676 8.49919 17.7129 8.49919C18.3582 8.49919 18.8796 7.97783 18.8796 7.33252V1.49919C18.8796 0.853874 18.3582 0.33252 17.7129 0.33252H11.8796ZM3.12956 1.49919C1.5181 1.49919 0.212891 2.80439 0.212891 4.41585V16.0825C0.212891 17.694 1.5181 18.9992 3.12956 18.9992H14.7962C16.4077 18.9992 17.7129 17.694 17.7129 16.0825V11.9992C17.7129 11.3539 17.1915 10.8325 16.5462 10.8325C15.9009 10.8325 15.3796 11.3539 15.3796 11.9992V16.0825C15.3796 16.4034 15.1171 16.6659 14.7962 16.6659H3.12956C2.80872 16.6659 2.54622 16.4034 2.54622 16.0825V4.41585C2.54622 4.09502 2.80872 3.83252 3.12956 3.83252H7.21289C7.8582 3.83252 8.37956 3.31117 8.37956 2.66585C8.37956 2.02054 7.8582 1.49919 7.21289 1.49919H3.12956Z" fill="#32CD32"/>
                </svg>Open</span>
              </div>
            </div>
            {/* Tool Card 2 */}
            <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12  rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.333984" y="0.332031" width="64" height="64" rx="16" fill="#FEF9C3"/>
                  <path d="M21.5 21.6667C20.1198 21.6667 19 22.7865 19 24.1667C19 24.9531 19.3698 25.6927 20 26.1667L31.3333 34.6667C31.9271 35.1094 32.7396 35.1094 33.3333 34.6667L44.6667 26.1667C45.2969 25.6927 45.6667 24.9531 45.6667 24.1667C45.6667 22.7865 44.5469 21.6667 43.1667 21.6667H21.5ZM19 27.5V38.3334C19 40.1719 20.4948 41.6667 22.3333 41.6667H42.3333C44.1719 41.6667 45.6667 40.1719 45.6667 38.3334V27.5L34.3333 36C33.1458 36.8906 31.5208 36.8906 29.9837 36L19 27.5Z" fill="#CA8A04"/>
                </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <div className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool 2</div>
                  <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email Marketing</div>
                </div>
              </div>
              <div className="flex items-center justify-between  mb-1 sm:mb-2">
                <span className="text-[#4B5563] font-normal mr-2 text-[12px] sm:text-[14px] lg:text-[15px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Usage this month</span>
                <span className="text-[#111827] font-semibold text-[12px] sm:text-[14px] lg:text-[15px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>78%</span>
              </div>
              <div className="w-full h-[7px] sm:h-[10px] bg-[#E5E7EB] rounded-full mb-1 sm:mb-2">
                <div className="h-[7px] sm:h-[10px] bg-[#32CD32] rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[15px] mt-1 sm:mt-2">
                <span className="text-[#111827] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$30/month</span>
                <span className="text-[#32CD32] text-[13px] sm:text-[15px] lg:text-[17px] font-semibold flex items-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}><svg className='mr-1' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8796 0.33252C11.2342 0.33252 10.7129 0.853874 10.7129 1.49919C10.7129 2.1445 11.2342 2.66585 11.8796 2.66585H14.8947L7.5556 10.0086C7.09987 10.4643 7.09987 11.2044 7.5556 11.6601C8.01133 12.1159 8.75143 12.1159 9.20716 11.6601L16.5462 4.31742V7.33252C16.5462 7.97783 17.0676 8.49919 17.7129 8.49919C18.3582 8.49919 18.8796 7.97783 18.8796 7.33252V1.49919C18.8796 0.853874 18.3582 0.33252 17.7129 0.33252H11.8796ZM3.12956 1.49919C1.5181 1.49919 0.212891 2.80439 0.212891 4.41585V16.0825C0.212891 17.694 1.5181 18.9992 3.12956 18.9992H14.7962C16.4077 18.9992 17.7129 17.694 17.7129 16.0825V11.9992C17.7129 11.3539 17.1915 10.8325 16.5462 10.8325C15.9009 10.8325 15.3796 11.3539 15.3796 11.9992V16.0825C15.3796 16.4034 15.1171 16.6659 14.7962 16.6659H3.12956C2.80872 16.6659 2.54622 16.4034 2.54622 16.0825V4.41585C2.54622 4.09502 2.80872 3.83252 3.12956 3.83252H7.21289C7.8582 3.83252 8.37956 3.31117 8.37956 2.66585C8.37956 2.02054 7.8582 1.49919 7.21289 1.49919H3.12956Z" fill="#32CD32"/>
                </svg>
                Open</span>
              </div>
            </div>
            {/* Tool Card 3 */}
            <div className="bg-white rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12  rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.667969" y="0.332031" width="64" height="64" rx="16" fill="#DBEAFE"/>
                    <path d="M21.0007 21.3313C21.9225 21.3313 22.6673 22.0761 22.6673 22.998C22.6673 23.9199 21.9225 24.6647 21.0007 24.6647H20.3327C19.4108 24.6647 18.666 23.9199 18.666 22.998C18.666 22.0761 19.4108 21.3313 20.3327 21.3313H21.0007ZM26.0007 25C26.0007 24.0781 26.7454 23.3333 27.6673 23.3333H37.6673C38.5892 23.3333 39.334 24.0781 39.334 25C39.334 25.9219 38.5892 26.6667 37.6673 26.6667H27.6673C26.7454 26.6667 26.0007 25.9219 26.0007 25ZM27.6673 28.3333H34.334C35.2559 28.3333 36.0007 29.0781 36.0007 30C36.0007 30.9219 35.2559 31.6667 34.334 31.6667H27.6673C26.7454 31.6667 26.0007 30.9219 26.0007 30C26.0007 29.0781 26.7454 28.3333 27.6673 28.3333ZM27.6673 33.3333H41.0007C41.9225 33.3333 42.6673 34.0781 42.6673 35C42.6673 35.9219 41.9225 36.6667 41.0007 36.6667H27.6673C26.7454 36.6667 26.0007 35.9219 26.0007 35C26.0007 34.0781 26.7454 33.3333 27.6673 33.3333Z" fill="#2563EB"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <span className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool 3</span>
                  <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Web Analytics</div>
                </div>
              </div>
            </div>
          </div>
          {/* Recommended Tools Section */}
          <div className="mt-8">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-center sm:text-left  mb-2 sm:mb-4 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Recommended Tools</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-center justify-between min-w-[280px]">
                <div className="">
                  <span className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#FF6A00] bg-opacity-10 mr-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="28" rx="8" fill="#FF6A00"/>
                      <path d="M8 18L12 14L16 18L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-[18px] text-[#111827]">HubSpot</div>
                    <div className="text-[#6B7280] text-[15px]">CRM & Marketing</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer">+</span>
              </div>
              {/* Card 2 */}
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-center justify-between min-w-[280px]">
                <div className="">
                  <span className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#A259FF] bg-opacity-10 mr-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="28" rx="8" fill="#A259FF"/>
                      <circle cx="14" cy="14" r="6" fill="white"/>
                      <circle cx="14" cy="14" r="3" fill="#A259FF"/>
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-[18px] text-[#111827]">Crello</div>
                    <div className="text-[#6B7280] text-[15px]">Design Tool</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer">+</span>
              </div>
              {/* Card 3 */}
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-center justify-between min-w-[280px]">
                <div className="">
                  <span className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#2563EB] bg-opacity-10 mr-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="28" rx="8" fill="#2563EB"/>
                      <rect x="8" y="10" width="12" height="8" rx="2" fill="white"/>
                      <rect x="12" y="14" width="4" height="2" rx="1" fill="#2563EB"/>
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-[18px] text-[#111827]">Mailchimp</div>
                    <div className="text-[#6B7280] text-[15px]">Email Marketing</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer">+</span>
              </div>
            </div>
          </div>
          {/* Chart Area */}
          <div className="bg-white rounded-xl border border-[#F3F4F6] shadow-sm p-3 sm:p-4 lg:p-6 w-full max-w-[511px] overflow-x-auto" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} >
            <div className="font-bold text-[15px] sm:text-[17px] lg:text-[19px] text-[#1A2330]">Total yearly sales</div>
            <div className="w-full overflow-x-auto">
              <svg className="w-full max-w-[471px] h-auto" viewBox="0 0 471 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Y axis labels and grid lines */}
                {[
                  {y: 35, label: 300},
                  {y: 65, label: 250},
                  {y: 95, label: 200},
                  {y: 125, label: 150},
                  {y: 155, label: 100},
                  {y: 185, label: 50},
                  {y: 215, label: 0},
                ].map(({y, label}) => (
                  <g key={y}>
                    <text x="16" y={y+5} font-size="13" fill="#32CD32" text-anchor="start">{label}</text>
                    <line x1="54" y1={y} x2="451" y2={y} stroke="#000" stroke-dasharray="3 2"/>
                  </g>
                ))}
                {/* Line chart */}
                <polyline points="54,215 120,185 180,145 240,135 300,125 360,165 410,85 451,35" fill="none" stroke="#58D758" stroke-width="2.5"/>
                {/* Dots */}
                <circle cx="54" cy="215" r="4" fill="#58D758"/>
                <circle cx="120" cy="185" r="4" fill="#58D758"/>
                <circle cx="180" cy="145" r="4" fill="#58D758"/>
                <circle cx="240" cy="135" r="4" fill="#58D758"/>
                <circle cx="300" cy="125" r="4" fill="#58D758"/>
                <circle cx="360" cy="165" r="4" fill="#58D758"/>
                <circle cx="410" cy="85" r="4" fill="#58D758"/>
                <circle cx="451" cy="35" r="4" fill="#58D758"/>
                {/* X axis labels - evenly spaced, muted gray */}
                <text x="50" y="250" font-size="14" fill="#111827" text-anchor="middle">December 2024</text>
                <text x="180" y="250" font-size="14" fill="#111827" text-anchor="middle">January 2025</text>
                <text x="300" y="250" font-size="14" fill="#111827" text-anchor="middle">February 2025</text>
                <text x="410" y="250" font-size="14" fill="#111827" text-anchor="middle">March 2025</text>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}; 