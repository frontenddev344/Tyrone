import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Topbar } from '../components/Topbar/Topbar';

export const RecentActivity = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Dummy toolList and hasTools for Sidebar demo
  const [toolList, setToolList] = useState<{ name: string; icon: React.ReactElement }[]>([]);
  const hasTools = toolList.length > 0;

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
        <div className="w-full min-h-[60vh] mb-6 sm:mb-8 px-4 sm:px-2 lg:px-6 xl:px-10">
          <h1 className="text-[20px] sm:text-[26px] lg:text-[32px] font-semibold text-[#111827] text-left mb-6 mt-3 sm:mt-5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            Recent Activity
          </h1>
          <div className="w-full  bg-white rounded-[21px] border border-[#F3F4F6] shadow-sm p-0 py-6">
            <div className="grid grid-cols-12 px-6 py-3 text-[#23272E] font-bold text-[13px] sm:text-[16px]">
              <div className="col-span-5 text-left">Team Member</div>
              <div className="col-span-4 text-left">Modified Tools</div>
              <div className="col-span-3 text-right">Recent Activity</div>
            </div>
            <div className="flex flex-col gap-4 px-6">
              {[
                { name: 'Member 1', role: 'Customer Management', tool: 'Tool 1', time: '10:48 AM', bg: 'bg-[#E9FAEC]', border: 'border-[#E9FAEC]', avatarBg: 'bg-[#32CD32]', avatarIcon: '#22C55E', timeColor: 'text-[#6B7280]' },
                { name: 'Member 2', role: 'Customer Management', tool: 'Tool 2', time: '10:48 AM', bg: 'bg-white', border: 'border-[#E5E7EB]', avatarBg: 'bg-[#EA580C]', avatarIcon: '#F97316', timeColor: 'text-[#6B7280]' },
                { name: 'Member 3', role: 'Customer Management', tool: 'Tool 3', time: '10:48 AM', bg: 'bg-[#E9FAEC]', border: 'border-[#E9FAEC]', avatarBg: 'bg-[#32CD32]', avatarIcon: '#22C55E', timeColor: 'text-[#6B7280]' },
                { name: 'Member 4', role: 'Customer Management', tool: 'Tool 4', time: '10:48 AM', bg: 'bg-white', border: 'border-[#E5E7EB]', avatarBg: 'bg-[#EA580C]', avatarIcon: '#F97316', timeColor: 'text-[#6B7280]' },
              ].map((item, idx) => (
                <div
                  key={item.name}
                  className={`flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center px-3 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[15px] ${item.bg} border ${item.border} rounded-[20px]`}
                  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}
                >
                  {/* Team Member (avatar, name, role) */}
                  <div className="flex flex-row items-center gap-3 sm:col-span-5 w-full">
                    <span className={`w-10 h-10 flex items-center justify-center rounded-full ${item.avatarBg}`}>
                      <img src="../../assets/user-one.png" alt="avatar" className="w-6 h-6" />
                    </span>
                    <div className="flex flex-col">
                      <span className="block sm:hidden text-xs text-[#6B7280] font-semibold mb-0.5">Team Member</span>
                      <div className="font-bold text-[#23272E] text-[13px] sm:text-[14px] leading-tight">{item.name}</div>
                      <div className="text-xs text-[#6B7280] font-normal leading-tight">{item.role}</div>
                    </div>
                  </div>
                  {/* Tool Name */}
                  <div className="flex flex-row sm:block w-full sm:col-span-4 mt-2 sm:mt-0">
                    <span className="block sm:hidden text-xs text-[#6B7280] font-semibold mr-2">Modified Tools</span>
                    <span className="font-medium text-[#6B7280] text-[13px] sm:text-[14px]">{item.tool}</span>
                  </div>
                  {/* Time */}
                  <div className={`flex flex-row sm:block w-full sm:col-span-3 mt-2 sm:mt-0 sm:text-right ${item.timeColor}`}>
                    <span className="block sm:hidden text-xs text-[#6B7280] font-semibold mr-2">Recent Activity</span>
                    <span className="font-medium text-[13px] sm:text-[14px]">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}; 