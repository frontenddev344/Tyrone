import React, { useState, useRef } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Topbar } from '../components/Topbar/Topbar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ResponsiveContainer } from 'recharts';

// DonutChart component for circular progress (full background, partial foreground, screenshot style)
const DonutChart = ({ value = 0, max = 100, label = '', color = '#06402B', bgColor = '#90EE90', size = 240, stroke = 24, valueLabel = '', valueColor = '#111827', fontSize = 24 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);
  const progressLength = circumference * progress;
  // Arc starts at 12 o'clock (top)
  const rotation = -90;
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      {/* Background arc: full circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={0}
        strokeLinecap="round"
      />
      {/* Foreground arc: partial, overlays background */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={`${progressLength} ${circumference - progressLength}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={fontSize}
        fontWeight="bold"
        fill={valueColor}
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
      >
        {valueLabel || value}
      </text>
    </svg>
  );
};

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
  // Accordion state for revenue cards
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  // State for success notification
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  // State for selected tools
  const [selectedTools, setSelectedTools] = useState<{ [key: string]: boolean }>({
    'tool-x': false,
    'tool-y': false,
    'tool-z': false
  });
  
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{ title: string; value: string } | null>(null);


  // Function to handle tool addition
  const handleAddTool = (toolId: string) => {
    setSelectedTools(prev => ({
      ...prev,
      [toolId]: true
    }));
    setShowSuccessNotification(true);
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 3000);
  };

  // Function to handle modal open
  const handleModalOpen = (title: string, value: string) => {
    setModalData({ title, value });
    setShowModal(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setShowModal(false);
    setModalData(null);
  };

  // Bar chart data for Revenue Insights
  const revenueData = [
    { month: 'JAN', lightGreen: 17.5, darkGreen: 13.5 },
    { month: 'FEB', lightGreen: 25, darkGreen: 20.5 },
    { month: 'MAR', lightGreen: 17.5, darkGreen: 9.5 },
    { month: 'APR', lightGreen: 18, darkGreen: 14 },
    { month: 'MAY', lightGreen: 25, darkGreen: 20.5 },
    { month: 'JUNE', lightGreen: 18, darkGreen: 9.5 },
    { month: 'JULY', lightGreen: 25, darkGreen: 20.5 },
    { month: 'AUG', lightGreen: 18, darkGreen: 9.5 },
  ];

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
      <main className="flex-1 overflow-x-hidden">
        {/* Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />
        <div className='py-4 sm:py-8 overflow-x-hidden'>
          {/* Welcome and Stats */}
          <div className="mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10 max-w-full">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
              <img src="assets/avt.png" alt="avatar" className="w-14 h-14 sm:w-[85px] sm:h-[85px] rounded-[21px] mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-[22px] sm:text-[28px] lg:text-[36px] text-[#11182] mb-1 sm:mb-0" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Welcome back, Sarah!  <span className="inline-block">👋</span></div>
                <div className="text-[#4B5563] text-[15px] sm:text-[18px] lg:text-[22px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Ready to power up your marketing agency today?</div>
              </div>
            </div>
            {/* Stats Row - 3 summary cards only, matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 sm:mb-8">
              {/* Card 1: Tools Added */}
              <div className="bg-white rounded-[21px] p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative min-h-[120px]">
                <div className="flex items-center mb-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ECFDF5] mr-2">
                    {/* Tool icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="5" fill="#D1FAE5" stroke="#10B981" strokeWidth="2"/></svg>
                  </span>
                  <span className="ml-auto text-[15px] font-semibold text-[#22C55E]">+2 this week</span>
                </div>
                <div className="font-bold text-[28px] text-[#111827] leading-tight">6</div>
                <div className="text-[#6B7280] text-[16px]">Tools Added</div>
              </div>
              {/* Card 2: Tool Usage */}
              <div className="bg-white rounded-[21px] p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative min-h-[120px]">
                <div className="flex items-center mb-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EFF6FF] mr-2">
                    {/* Usage icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/><path d="M7 11l5 5 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="4" width="10" height="6" rx="2" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/></svg>
                  </span>
                  <span className="ml-auto text-[15px] font-semibold text-[#22C55E]">+15%</span>
                </div>
                <div className="font-bold text-[28px] text-[#111827] leading-tight">87%</div>
                <div className="text-[#6B7280] text-[16px]">Tool Usage</div>
              </div>
              {/* Card 3: Current Goal */}
              <div className="bg-white rounded-[21px] p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative min-h-[120px]">
                <div className="flex items-center mb-2">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FEF3C7] mr-2">
                    {/* Goal icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FEF3C7" stroke="#F59E42" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#F59E42" strokeWidth="2"/></svg>
                  </span>
                  <span className="ml-auto text-[15px] font-semibold text-[#2563EB]">2 of 3</span>
                </div>
                <div className="font-bold text-[28px] text-[#111827] leading-tight">Scale</div>
                <div className="text-[#6B7280] text-[16px]">Current Goal</div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F3F4F6] mt-12 mb-0 w-full mx-auto"></div>
          {/* Your Tool Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2 sm:mb-4 mt-3 sm:mt-5 px-4 sm:px-2 lg:px-6 xl:px-10">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-center sm:text-left mb-2 sm:mb-0" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Your Tool Stack</div>
            <a href="#" className="text-[#32CD32] font-semibold text-[15px] sm:text-[18px] flex items-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>View All <svg className='ml-1' width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.275 11.6075C18.7958 11.0867 18.7958 10.2408 18.275 9.72001L11.6083 3.05334C11.0875 2.53251 10.2417 2.53251 9.72083 3.05334C9.2 3.57418 9.2 4.42001 9.72083 4.94084L14.1167 9.33251H1.33333C0.595833 9.33251 0 9.92834 0 10.6658C0 11.4033 0.595833 11.9992 1.33333 11.9992H14.1125L9.725 16.3908C9.20417 16.9117 9.20417 17.7575 9.725 18.2783C10.2458 18.7992 11.0917 18.7992 11.6125 18.2783L18.2792 11.6117L18.275 11.6075Z" fill="#32CD32"/>
            </svg></a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-4 xl:gap-6 mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10">
            {/* Tool Card 1 */}
            <div className="bg-white shadow-md rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative hover:bg-green-50 transition-all duration-200 cursor-pointer">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12 rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3 ">
                  <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.332031" width="64" height="64" rx="16" fill="#FFEDD5"/>
                    <path d="M23.6654 18.3334C21.8268 18.3334 20.332 19.8282 20.332 21.6667V41.6667C20.332 43.5052 21.8268 45 23.6654 45H38.6654C40.5039 45 41.9987 43.5052 41.9987 41.6667V21.6667C41.9987 19.8282 40.5039 18.3334 38.6654 18.3334H23.6654ZM29.4987 33.3334H32.832C35.1341 33.3334 36.9987 35.198 36.9987 37.5C36.9987 37.9584 36.6237 38.3334 36.1654 38.3334H26.1654C25.707 38.3334 25.332 37.9584 25.332 37.5C25.332 35.198 27.1966 33.3334 29.4987 33.3334ZM27.832 28.3334C27.832 27.4493 28.1832 26.6015 28.8083 25.9764C29.4335 25.3512 30.2813 25 31.1654 25C32.0494 25 32.8973 25.3512 33.5224 25.9764C34.1475 26.6015 34.4987 27.4493 34.4987 28.3334C34.4987 29.2174 34.1475 30.0653 33.5224 30.6904C32.8973 31.3155 32.0494 31.6667 31.1654 31.6667C30.2813 31.6667 29.4335 31.3155 28.8083 30.6904C28.1832 30.0653 27.832 29.2174 27.832 28.3334ZM45.332 22.5C45.332 22.0417 44.957 21.6667 44.4987 21.6667C44.0404 21.6667 43.6654 22.0417 43.6654 22.5V25.8334C43.6654 26.2917 44.0404 26.6667 44.4987 26.6667C44.957 26.6667 45.332 26.2917 45.332 25.8334V22.5ZM44.4987 28.3334C44.0404 28.3334 43.6654 28.7084 43.6654 29.1667V32.5C43.6654 32.9584 44.0404 33.3334 44.4987 33.3334C44.957 33.3334 45.332 32.9584 45.332 32.5V29.1667C45.332 28.7084 44.957 28.3334 44.4987 28.3334ZM45.332 35.8334C45.332 35.375 44.957 35 44.4987 35C44.0404 35 43.6654 35.375 43.6654 35.8334V39.1667C43.6654 39.625 44.0404 40 44.4987 40C44.957 40 45.332 39.625 45.332 39.1667V35.8334Z" fill="#EA580C"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <div className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px] pr-[50px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Customer Management</div>
                  {/* <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Customer Management</div> */}
                </div>
              </div>
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-[#4B5563] font-normal mr-2 text-[12px] sm:text-[14px] lg:text-[15px] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Usage this month</span>
                <span className="text-[#111827] font-semibold text-[12px] sm:text-[14px] lg:text-[15px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>92%</span>
              </div>
              <div className="w-full h-[7px] sm:h-[10px] bg-[#E5E7EB] rounded-full mb-1 sm:mb-2">
                <div className="h-[7px] sm:h-[10px] bg-[#32CD32] rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[15px] mt-1 sm:mt-2">
                <span className="text-[#111827] font-semibold" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>$45/month</span>
                {/* <span className="text-[#32CD32] text-[13px] sm:text-[15px] lg:text-[17px] font-semibold flex items-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}><svg className='mr-1' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8796 0.33252C11.2342 0.33252 10.7129 0.853874 10.7129 1.49919C10.7129 2.1445 11.2342 2.66585 11.8796 2.66585H14.8947L7.5556 10.0086C7.09987 10.4643 7.09987 11.2044 7.5556 11.6601C8.01133 12.1159 8.75143 12.1159 9.20716 11.6601L16.5462 4.31742V7.33252C16.5462 7.97783 17.0676 8.49919 17.7129 8.49919C18.3582 8.49919 18.8796 7.97783 18.8796 7.33252V1.49919C18.8796 0.853874 18.3582 0.33252 17.7129 0.33252H11.8796ZM3.12956 1.49919C1.5181 1.49919 0.212891 2.80439 0.212891 4.41585V16.0825C0.212891 17.694 1.5181 18.9992 3.12956 18.9992H14.7962C16.4077 18.9992 17.7129 17.694 17.7129 16.0825V11.9992C17.7129 11.3539 17.1915 10.8325 16.5462 10.8325C15.9009 10.8325 15.3796 11.3539 15.3796 11.9992V16.0825C15.3796 16.4034 15.1171 16.6659 14.7962 16.6659H3.12956C2.80872 16.6659 2.54622 16.4034 2.54622 16.0825V4.41585C2.54622 4.09502 2.80872 3.83252 3.12956 3.83252H7.21289C7.8582 3.83252 8.37956 3.31117 8.37956 2.66585C8.37956 2.02054 7.8582 1.49919 7.21289 1.49919H3.12956Z" fill="#32CD32"/>
                </svg>Open</span> */}
              </div>
            </div>

            {/* Tool Card 2 */}
            <div className="bg-white shadow-md rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative hover:bg-green-50 transition-all duration-200 cursor-pointer">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12  rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.333984" y="0.332031" width="64" height="64" rx="16" fill="#FEF9C3"/>
                  <path d="M21.5 21.6667C20.1198 21.6667 19 22.7865 19 24.1667C19 24.9531 19.3698 25.6927 20 26.1667L31.3333 34.6667C31.9271 35.1094 32.7396 35.1094 33.3333 34.6667L44.6667 26.1667C45.2969 25.6927 45.6667 24.9531 45.6667 24.1667C45.6667 22.7865 44.5469 21.6667 43.1667 21.6667H21.5ZM19 27.5V38.3334C19 40.1719 20.4948 41.6667 22.3333 41.6667H42.3333C44.1719 41.6667 45.6667 40.1719 45.6667 38.3334V27.5L34.3333 36C33.1458 36.8906 31.5208 36.8906 29.9837 36L19 27.5Z" fill="#CA8A04"/>
                </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <div className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px] pr-[50px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email Marketing</div>
                  {/* <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email Marketing</div> */}
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
                {/* <span className="text-[#32CD32] text-[13px] sm:text-[15px] lg:text-[17px] font-semibold flex items-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}><svg className='mr-1' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8796 0.33252C11.2342 0.33252 10.7129 0.853874 10.7129 1.49919C10.7129 2.1445 11.2342 2.66585 11.8796 2.66585H14.8947L7.5556 10.0086C7.09987 10.4643 7.09987 11.2044 7.5556 11.6601C8.01133 12.1159 8.75143 12.1159 9.20716 11.6601L16.5462 4.31742V7.33252C16.5462 7.97783 17.0676 8.49919 17.7129 8.49919C18.3582 8.49919 18.8796 7.97783 18.8796 7.33252V1.49919C18.8796 0.853874 18.3582 0.33252 17.7129 0.33252H11.8796ZM3.12956 1.49919C1.5181 1.49919 0.212891 2.80439 0.212891 4.41585V16.0825C0.212891 17.694 1.5181 18.9992 3.12956 18.9992H14.7962C16.4077 18.9992 17.7129 17.694 17.7129 16.0825V11.9992C17.7129 11.3539 17.1915 10.8325 16.5462 10.8325C15.9009 10.8325 15.3796 11.3539 15.3796 11.9992V16.0825C15.3796 16.4034 15.1171 16.6659 14.7962 16.6659H3.12956C2.80872 16.6659 2.54622 16.4034 2.54622 16.0825V4.41585C2.54622 4.09502 2.80872 3.83252 3.12956 3.83252H7.21289C7.8582 3.83252 8.37956 3.31117 8.37956 2.66585C8.37956 2.02054 7.8582 1.49919 7.21289 1.49919H3.12956Z" fill="#32CD32"/>
                </svg>
                Open</span> */}
              </div>
            </div>

            {/* Tool Card 3 */}
            <div className="bg-white shadow-md rounded-[21px] p-3 sm:p-4 lg:p-6 flex flex-col shadow-sm border border-[#F3F4F6] relative hover:bg-green-50 transition-all duration-200 cursor-pointer">
              <div className="flex items-center mb-1 sm:mb-2">
                <span className="w-8 h-8 sm:w-12 sm:h-12  rounded flex items-center justify-center text-white font-bold mr-2 sm:mr-3">
                  <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.667969" y="0.332031" width="64" height="64" rx="16" fill="#DBEAFE"/>
                    <path d="M21.0007 21.3313C21.9225 21.3313 22.6673 22.0761 22.6673 22.998C22.6673 23.9199 21.9225 24.6647 21.0007 24.6647H20.3327C19.4108 24.6647 18.666 23.9199 18.666 22.998C18.666 22.0761 19.4108 21.3313 20.3327 21.3313H21.0007ZM26.0007 25C26.0007 24.0781 26.7454 23.3333 27.6673 23.3333H37.6673C38.5892 23.3333 39.334 24.0781 39.334 25C39.334 25.9219 38.5892 26.6667 37.6673 26.6667H27.6673C26.7454 26.6667 26.0007 25.9219 26.0007 25ZM27.6673 28.3333H34.334C35.2559 28.3333 36.0007 29.0781 36.0007 30C36.0007 30.9219 35.2559 31.6667 34.334 31.6667H27.6673C26.7454 31.6667 26.0007 30.9219 26.0007 30C26.0007 29.0781 26.7454 28.3333 27.6673 28.3333ZM27.6673 33.3333H41.0007C41.9225 33.3333 42.6673 34.0781 42.6673 35C42.6673 35.9219 41.9225 36.6667 41.0007 36.6667H27.6673C26.7454 36.6667 26.0007 35.9219 26.0007 35C26.0007 34.0781 26.7454 33.3333 27.6673 33.3333Z" fill="#2563EB"/>
                  </svg>
                </span>
                <span style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }} className="ml-auto absolute right-3 sm:right-6 top-3 sm:top-8 text-[11px] sm:text-[14px] font-semibold text-[#16A34A] flex items-center"><svg className="mr-1" width="8" height="8" fill="none" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#16A34A"/></svg>Active</span>
                <div className='w-full'>
                  <span className="font-bold text-[#111827] text-[13px] sm:text-[15px] lg:text-[16px] pr-[50px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Web Analytics</span>
                  {/* <div className="text-[#6B7280] text-[12px] sm:text-[14px] lg:text-[15px] mb-1 sm:mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Web Analytics</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F3F4F6] mt-12 mb-0 w-full mx-auto"></div>
          {/* Recommended Tools Section - HIDDEN */}
          {/* 
          <div className="mt-8 mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left sm:text-left  mb-2 sm:mb-4 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Recommended Tools</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              
              Card 1
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-start justify-between min-w-[280px]">
                <div className="">
                  <span className=" flex items-center  mb-4">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.332031" y="0.33313" width="53.3333" height="53.3333" rx="10.6667" fill="#F97316"/>
                    <path d="M18.9987 18.9998C18.9987 18.2623 18.4029 17.6665 17.6654 17.6665C16.9279 17.6665 16.332 18.2623 16.332 18.9998V32.9998C16.332 34.8415 17.8237 36.3332 19.6654 36.3332H36.332C37.0695 36.3332 37.6654 35.7373 37.6654 34.9998C37.6654 34.2623 37.0695 33.6665 36.332 33.6665H19.6654C19.2987 33.6665 18.9987 33.3665 18.9987 32.9998V18.9998ZM35.9404 22.6082C36.4612 22.0873 36.4612 21.2415 35.9404 20.7207C35.4195 20.1998 34.5737 20.1998 34.0529 20.7207L29.6654 25.1123L27.2737 22.7207C26.7529 22.1998 25.907 22.1998 25.3862 22.7207L20.7195 27.3873C20.1987 27.9082 20.1987 28.754 20.7195 29.2748C21.2404 29.7957 22.0862 29.7957 22.607 29.2748L26.332 25.554L28.7237 27.9457C29.2445 28.4665 30.0904 28.4665 30.6112 27.9457L35.9445 22.6123L35.9404 22.6082Z" fill="white"/>
                    </svg>
                  </span>
                  <div>
                    
                    <div className="font-medium text-[17px] sm:text-[21px] text-[#1F2937] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>HubSpot</div>
                    <div className="text-[#4B5563] text-[14px] sm:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>CRM & Marketing</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer mt-5">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.332 3.66646C11.332 2.92896 10.7362 2.33313 9.9987 2.33313C9.2612 2.33313 8.66536 2.92896 8.66536 3.66646V9.66646H2.66536C1.92786 9.66646 1.33203 10.2623 1.33203 10.9998C1.33203 11.7373 1.92786 12.3331 2.66536 12.3331H8.66536V18.3331C8.66536 19.0706 9.2612 19.6665 9.9987 19.6665C10.7362 19.6665 11.332 19.0706 11.332 18.3331V12.3331H17.332C18.0695 12.3331 18.6654 11.7373 18.6654 10.9998C18.6654 10.2623 18.0695 9.66646 17.332 9.66646H11.332V3.66646Z" fill="#22C55E"/>
                </svg>

                </span>
              </div>

              Card 2
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-start justify-between min-w-[280px]">
                <div className="">
                  <span className=" flex items-center  mb-4">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.332031" y="0.33313" width="53.3333" height="53.3333" rx="10.6667" fill="#A855F7"/>
                  <path d="M37.6654 26.9998C37.6654 27.0373 37.6654 27.0748 37.6654 27.1123C37.6487 28.6331 36.2654 29.6665 34.7445 29.6665H30.6654C29.5612 29.6665 28.6654 30.5623 28.6654 31.6665C28.6654 31.8081 28.682 31.9456 28.707 32.079C28.7945 32.504 28.9779 32.9123 29.157 33.3248C29.4112 33.8998 29.6612 34.4706 29.6612 35.0748C29.6612 36.3998 28.7612 37.604 27.4362 37.6581C27.2904 37.6623 27.1445 37.6665 26.9945 37.6665C21.107 37.6665 16.332 32.8915 16.332 26.9998C16.332 21.1081 21.107 16.3331 26.9987 16.3331C32.8904 16.3331 37.6654 21.1081 37.6654 26.9998ZM21.6654 28.3331C21.6654 27.9795 21.5249 27.6404 21.2748 27.3903C21.0248 27.1403 20.6857 26.9998 20.332 26.9998C19.9784 26.9998 19.6393 27.1403 19.3892 27.3903C19.1392 27.6404 18.9987 27.9795 18.9987 28.3331C18.9987 28.6868 19.1392 29.0259 19.3892 29.2759C19.6393 29.526 19.9784 29.6665 20.332 29.6665C20.6857 29.6665 21.0248 29.526 21.2748 29.2759C21.5249 29.0259 21.6654 28.6868 21.6654 28.3331ZM21.6654 24.3331C22.019 24.3331 22.3581 24.1927 22.6082 23.9426C22.8582 23.6926 22.9987 23.3534 22.9987 22.9998C22.9987 22.6462 22.8582 22.307 22.6082 22.057C22.3581 21.8069 22.019 21.6665 21.6654 21.6665C21.3117 21.6665 20.9726 21.8069 20.7226 22.057C20.4725 22.307 20.332 22.6462 20.332 22.9998C20.332 23.3534 20.4725 23.6926 20.7226 23.9426C20.9726 24.1927 21.3117 24.3331 21.6654 24.3331ZM28.332 20.3331C28.332 19.9795 28.1916 19.6404 27.9415 19.3903C27.6915 19.1403 27.3523 18.9998 26.9987 18.9998C26.6451 18.9998 26.3059 19.1403 26.0559 19.3903C25.8058 19.6404 25.6654 19.9795 25.6654 20.3331C25.6654 20.6868 25.8058 21.0259 26.0559 21.2759C26.3059 21.526 26.6451 21.6665 26.9987 21.6665C27.3523 21.6665 27.6915 21.526 27.9415 21.2759C28.1916 21.0259 28.332 20.6868 28.332 20.3331ZM32.332 24.3331C32.6857 24.3331 33.0248 24.1927 33.2748 23.9426C33.5249 23.6926 33.6654 23.3534 33.6654 22.9998C33.6654 22.6462 33.5249 22.307 33.2748 22.057C33.0248 21.8069 32.6857 21.6665 32.332 21.6665C31.9784 21.6665 31.6393 21.8069 31.3892 22.057C31.1392 22.307 30.9987 22.6462 30.9987 22.9998C30.9987 23.3534 31.1392 23.6926 31.3892 23.9426C31.6393 24.1927 31.9784 24.3331 32.332 24.3331Z" fill="white"/>
                  </svg>

                  </span>
                  <div>
                    <div className="font-medium text-[17px] sm:text-[21px] text-[#1F2937] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Crello</div>
                    <div className="text-[#4B5563] text-[14px] sm:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Design Tool</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer mt-5">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.332 3.66646C11.332 2.92896 10.7362 2.33313 9.9987 2.33313C9.2612 2.33313 8.66536 2.92896 8.66536 3.66646V9.66646H2.66536C1.92786 9.66646 1.33203 10.2623 1.33203 10.9998C1.33203 11.7373 1.92786 12.3331 2.66536 12.3331H8.66536V18.3331C8.66536 19.0706 9.2612 19.6665 9.9987 19.6665C10.7362 19.6665 11.332 19.0706 11.332 18.3331V12.3331H17.332C18.0695 12.3331 18.6654 11.7373 18.6654 10.9998C18.6654 10.2623 18.0695 9.66646 17.332 9.66646H11.332V3.66646Z" fill="#22C55E"/>
                </svg>

                </span>
              </div>

              Card 3
              <div className="bg-[#F9FAFB] rounded-[16px] p-6 flex items-start justify-between min-w-[280px]">
                <div className="">
                  <span className=" flex items-center  mb-4">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.332031" y="0.33313" width="53.3333" height="53.3333" rx="10.6667" fill="#3B82F6"/>
                  <path d="M18.332 18.9998C17.2279 18.9998 16.332 19.8956 16.332 20.9998C16.332 21.6289 16.6279 22.2206 17.132 22.5998L26.1987 29.3998C26.6737 29.7539 27.3237 29.7539 27.7987 29.3998L36.8654 22.5998C37.3695 22.2206 37.6654 21.6289 37.6654 20.9998C37.6654 19.8956 36.7695 18.9998 35.6654 18.9998H18.332ZM16.332 23.6664V32.3331C16.332 33.8039 17.5279 34.9998 18.9987 34.9998H34.9987C36.4695 34.9998 37.6654 33.8039 37.6654 32.3331V23.6664L28.5987 30.4664C27.6487 31.1789 26.3487 31.1789 25.3987 30.4664L16.332 23.6664Z" fill="white"/>
                  </svg>

                  </span>
                  <div>
                    <div className="font-medium text-[17px] sm:text-[21px text-[#1F2937] " style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Mailchimp</div>
                    <div className="text-[#4B5563] text-[14px] sm:text-[18px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email Marketing</div>
                  </div>
                </div>
                <span className="text-[#22C55E] text-2xl font-bold cursor-pointer mt-5">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.332 3.66646C11.332 2.92896 10.7362 2.33313 9.9987 2.33313C9.2612 2.33313 8.66536 2.92896 8.66536 3.66646V9.66646H2.66536C1.92786 9.66646 1.33203 10.2623 1.33203 10.9998C1.33203 11.7373 1.92786 12.3331 2.66536 12.3331H8.66536V18.3331C8.66536 19.0706 9.2612 19.6665 9.9987 19.6665C10.7362 19.6665 11.332 19.0706 11.332 18.3331V12.3331H17.332C18.0695 12.3331 18.6654 11.7373 18.6654 10.9998C18.6654 10.2623 18.0695 9.66646 17.332 9.66646H11.332V3.66646Z" fill="#22C55E"/>
                </svg>

                </span>
              </div>
            </div>
          </div>
          */}
          {/* END Recommended Tools Section */}

          {/* Popular Features Section - HIDDEN */}
          {/* <div className="mt-8 mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left sm:text-left mb-2 sm:mb-4 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Popular Features</div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>CR</span>
              <span className="bg-green-100 text-green-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>IG</span>
              <span className="bg-purple-100 text-purple-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>AI</span>
              <span className="bg-orange-100 text-orange-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Analytics</span>
              <span className="bg-pink-100 text-pink-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Mobile</span>
              <span className="bg-cyan-100 text-cyan-700 text-[16px] sm:text-[18px] font-medium px-4 py-1 rounded-full" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>API</span>
            </div>
          </div> */}
          
          {/* Suggested Tools Section */}
          <div className="mt-8 mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10 relative">
            {/* Success Notification */}
            {showSuccessNotification && (
              <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-4 rounded-[10px] flex items-center space-x-3 z-50 shadow-lg">
                <div className="w-[21px] h-[21px] bg-white rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[16px] font-medium" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool has been successfully added.</span>
              </div>
            )}
            
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left mb-2" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              Suggested Tools
            </div>
            <div className="text-[#6B7280] text-[16px] sm:text-[18px] mb-6" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
              Discover tools that match your workflow
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Tool X (CRM) */}
              <div className={`rounded-[10px] border border-[#E5E7EB] px-4 py-8 flex items-center shadow-sm relative group ${selectedTools['tool-x'] ? 'bg-green-50' : 'bg-white'}`}>
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
                      <path d="M23 21V19C23 18.1133 22.7311 17.2528 22.2312 16.5523C21.7314 15.8519 21.0282 15.3516 20.2426 15.1313C19.4571 14.911 18.6249 14.9842 17.8837 15.3402C17.1425 15.6963 16.5331 16.3179 16.1566 17.1011C15.7802 17.8844 15.6619 18.7847 15.8216 19.6587C15.9812 20.5327 16.4082 21.3329 17.0394 21.9523C17.6707 22.5718 18.4719 22.9769 19.3459 23.1075C20.2199 23.2381 21.1202 23.0874 21.9035 22.6789" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                <div>
                    <div className="font-semibold text-[#111827] text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool X</div>
                    <div className="text-[#6B7280] text-[14px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>CRM</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddTool('tool-x')}
                  className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 relative group/button"
                >
                  {selectedTools['tool-x'] ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  )}
                  {/* Tooltip */}
                  <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/button:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Add to My Tools
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </button>
              </div>

              {/* Tool Y (Analytics) */}
              <div className={`rounded-[10px] border border-[#E5E7EB] px-4 py-8  flex items-center shadow-sm relative group ${selectedTools['tool-y'] ? 'bg-green-50' : 'bg-white'}`}>
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3V21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9L12 6L16 10L21 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 5H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool Y</div>
                    <div className="text-[#6B7280] text-[14px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Analytics</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddTool('tool-y')}
                  className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 relative group/button"
                >
                  {selectedTools['tool-y'] ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {/* Tooltip */}
                  <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/button:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Add to My Tools
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </button>
              </div>

              {/* Tool Z (Email) */}
              <div className={`rounded-[10px] border border-[#E5E7EB] px-4 py-8  flex items-center shadow-sm relative group ${selectedTools['tool-z'] ? 'bg-green-50' : 'bg-white'}`}>
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                <div>
                    <div className="font-semibold text-[#111827] text-[16px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Tool Z</div>
                    <div className="text-[#6B7280] text-[14px]" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Email</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddTool('tool-z')}
                  className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 relative group/button"
                >
                  {selectedTools['tool-z'] ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  )}
                  {/* Tooltip */}
                  <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/button:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Add to My Tools
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#F3F4F6] mt-12 mb-0 w-full mx-auto"></div>
          {/* Business Revenue Data Column Section - 3 cards per row, 4th on new row, grid version for perfect alignment */}
          <div className="mb-10 px-4 sm:px-2 lg:px-6 xl:px-10">
            <div>
              <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left mb-6 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Business Revenue Data Column</div>
              <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full">
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 sm:p-6 flex flex-col items-center shadow-sm w-full max-w-[100%] h-auto cursor-pointer hover:shadow-md transition-all duration-200 relative group">
                  {/* Hover Modal */}
                  <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl border border-gray-200 p-2 sm:p-6 w-full max-w-[98vw] h-auto z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center h-full flex flex-col">
                      <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Revenue Insights Details</h3>
                      <div className="w-full overflow-x-auto mb-4">
                        <div style={{ minWidth: 240, minHeight: 140 }}>
                          <ResponsiveContainer width="100%" aspect={2.1}>
                            <BarChart
                              data={revenueData}
                              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                              barGap={4}
                              barCategoryGap={18}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <YAxis domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <Bar dataKey="lightGreen" fill="#90EE90" barSize={12} radius={[4, 4, 0, 0]} name="Revenue" />
                              <Bar dataKey="darkGreen" fill="#06402B" barSize={12} radius={[4, 4, 0, 0]} name="Profit" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3 sm:space-x-6">
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#90EE90] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Revenue</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#06402B] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Profit</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                  </div>
                  <div className="font-bold text-[15px] sm:text-[17px] text-[#23272E] mb-2 text-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Revenue this month</div>
                  <div className="block sm:hidden">
                    <DonutChart value={25} max={100} valueLabel="$8000" color="#06402B" bgColor="#90EE90" stroke={16} size={120} fontSize={16} valueColor="#23272E" />
                  </div>
                  <div className="hidden sm:block">
                    <DonutChart value={25} max={100} valueLabel="$8000" color="#06402B" bgColor="#90EE90" stroke={24} size={180} fontSize={24} valueColor="#23272E" />
                  </div>
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 sm:p-6 flex flex-col items-center shadow-sm w-full max-w-[100%] h-auto cursor-pointer hover:shadow-md transition-all duration-200 relative group">
                  {/* Hover Modal */}
                  <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl border border-gray-200 p-2 sm:p-6 w-full max-w-[98vw] h-auto z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center h-full flex flex-col">
                      <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Revenue Insights Details</h3>
                      <div className="w-full overflow-x-auto mb-4">
                        <div style={{ minWidth: 240, minHeight: 140 }}>
                          <ResponsiveContainer width="100%" aspect={2.1}>
                            <BarChart
                              data={revenueData}
                              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                              barGap={4}
                              barCategoryGap={18}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <YAxis domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <Bar dataKey="lightGreen" fill="#90EE90" barSize={12} radius={[4, 4, 0, 0]} name="Revenue" />
                              <Bar dataKey="darkGreen" fill="#06402B" barSize={12} radius={[4, 4, 0, 0]} name="Profit" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3 sm:space-x-6">
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#90EE90] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Revenue</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#06402B] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Profit</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                  </div>
                  <div className="font-bold text-[15px] sm:text-[17px] text-[#23272E] mb-2 text-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Total revenue</div>
                  <div className="block sm:hidden">
                    <DonutChart value={70} max={100} valueLabel="$200,000" color="#06402B" bgColor="#90EE90" stroke={16} size={120} fontSize={16} valueColor="#23272E" />
                  </div>
                  <div className="hidden sm:block">
                    <DonutChart value={70} max={100} valueLabel="$200,000" color="#06402B" bgColor="#90EE90" stroke={24} size={180} fontSize={24} valueColor="#23272E" />
                  </div>
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 sm:p-6 flex flex-col items-center shadow-sm w-full max-w-[100%] h-auto cursor-pointer hover:shadow-md transition-all duration-200 relative group">
                  {/* Hover Modal */}
                  <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl border border-gray-200 p-2 sm:p-6 w-full max-w-[98vw] h-auto z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center h-full flex flex-col">
                      <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Revenue Insights Details</h3>
                      <div className="w-full overflow-x-auto mb-4">
                        <div style={{ minWidth: 240, minHeight: 140 }}>
                          <ResponsiveContainer width="100%" aspect={2.1}>
                            <BarChart
                              data={revenueData}
                              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                              barGap={4}
                              barCategoryGap={18}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <YAxis domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <Bar dataKey="lightGreen" fill="#90EE90" barSize={12} radius={[4, 4, 0, 0]} name="Revenue" />
                              <Bar dataKey="darkGreen" fill="#06402B" barSize={12} radius={[4, 4, 0, 0]} name="Profit" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3 sm:space-x-6">
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#90EE90] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Revenue</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#06402B] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Profit</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                  </div>
                  <div className="font-bold text-[15px] sm:text-[17px] text-[#23272E] mb-2 text-center" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Yearly Revenue</div>
                  <div className="block sm:hidden">
                    <DonutChart value={30} max={100} valueLabel="$80,000" color="#06402B" bgColor="#90EE90" stroke={16} size={120} fontSize={16} valueColor="#23272E" />
                  </div>
                  <div className="hidden sm:block">
                    <DonutChart value={30} max={100} valueLabel="$80,000" color="#06402B" bgColor="#90EE90" stroke={24} size={180} fontSize={24} valueColor="#23272E" />
                  </div>
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 sm:p-6 flex flex-col items-center shadow-sm w-full max-w-[100%] h-auto cursor-pointer hover:shadow-md transition-all duration-200 relative group">
                  {/* Hover Modal */}
                  <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl border border-gray-200 p-2 sm:p-6 w-full max-w-[98vw] h-auto z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="text-center h-full flex flex-col">
                      <h3 className="text-xs sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-left">Revenue Insights Details</h3>
                      <div className="w-full overflow-x-auto mb-4">
                        <div style={{ minWidth: 240, minHeight: 140 }}>
                          <ResponsiveContainer width="100%" aspect={2.1}>
                            <BarChart
                              data={revenueData}
                              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                              barGap={4}
                              barCategoryGap={18}
                            >
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <YAxis domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} tick={{ fontSize: 10, fill: '#6B7280', fontWeight: 500 }} axisLine={false} tickLine={false} />
                              <Bar dataKey="lightGreen" fill="#90EE90" barSize={12} radius={[4, 4, 0, 0]} name="Revenue" />
                              <Bar dataKey="darkGreen" fill="#06402B" barSize={12} radius={[4, 4, 0, 0]} name="Profit" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3 sm:space-x-6">
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#90EE90] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Revenue</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#06402B] rounded mr-2"></div>
                          <span className="text-xs sm:text-sm text-gray-700 font-medium">Profit</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                  </div>
                  <div className="flex flex-row justify-between items-start w-full">
                    <span className="font-bold text-[15px] sm:text-[17px] text-[#23272E] text-left" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Growth %</span>
                    <span className=" ">
                      <span className="text-[#06402B] text-[13px] sm:text-[15px] font-semibold mr-2 sm:mr-4">+16%</span>
                      <span className="text-[#EF4444] text-[13px] sm:text-[15px] font-semibold">+16%</span>
                    </span>
                  </div>
                  <div className="block sm:hidden">
                    <DonutChart value={20} max={100} valueLabel="20%" color="#06402B" bgColor="#90EE90" stroke={16} size={120} fontSize={16} valueColor="#23272E" />
                  </div>
                  <div className="hidden sm:block">
                    <DonutChart value={20} max={100} valueLabel="20%" color="#06402B" bgColor="#90EE90" stroke={24} size={180} fontSize={24} valueColor="#23272E" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Section - exact screenshot style */}
          <div className="border-t border-[#F3F4F6] mt-12 mb-0 w-full mx-auto"></div>
          <div className="mt-6 px-4 sm:px-2 lg:px-6 xl:px-10">
            <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left mb-6 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Team Member</div>
            <div className="w-full mx-auto">
              {/* Table header: hidden on mobile */}
              <div className="hidden sm:flex flex-row px-6 py-3 text-[#23272E] font-semibold text-[16px]">
                <div className="flex-1">Name</div>
                <div className="flex-1">Role/Position</div>
                <div className="flex-1">Last Active</div>
                <div className="w-10"></div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Name 1', role: 'Marketing Lead', last: 'Active 2 days ago', icon: 'filled' },
                  { name: 'Name 2', role: 'Marketing Lead', last: 'Active 2 days ago', icon: 'outline' },
                  { name: 'Name 3', role: 'Marketing Lead', last: 'Active 2 days ago', icon: 'outline' },
                  { name: 'Name 3', role: 'Marketing Lead', last: 'Active 2 days ago', icon: 'outline' },
                ].map((m, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-xl border border-[#F3F4F6] px-4 py-3 sm:px-6 sm:py-3 text-[15px] w-full gap-2 sm:gap-0" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    {/* Mobile label-value pairs */}
                    <div className="flex flex-col sm:flex-1 w-full">
                      <span className="block sm:hidden text-xs text-gray-500 font-semibold mb-1">Name</span>
                      <span>{m.name}</span>
                    </div>
                    <div className="flex flex-col sm:flex-1 w-full">
                      <span className="block sm:hidden text-xs text-gray-500 font-semibold mb-1">Role/Position</span>
                      <span>{m.role}</span>
                    </div>
                    <div className="flex flex-col sm:flex-1 w-full">
                      <span className="block sm:hidden text-xs text-gray-500 font-semibold mb-1">Last Active</span>
                      <span>{m.last}</span>
                    </div>
                    <div className="w-full sm:w-10 flex justify-end mt-2 sm:mt-0">
                      {m.icon === 'filled' ? (
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#F5F3FF"/><path d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="#A78BFA" strokeWidth="1.5"/><path d="M17.25 18a5.25 5.25 0 0 0-10.5 0" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      ) : (
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#A78BFA" strokeWidth="1.5" fill="none"/><path d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="#A78BFA" strokeWidth="1.5"/><path d="M17.25 18a5.25 5.25 0 0 0-10.5 0" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



        </div>
      </main>
    </div>
  );
}; 