import React, { useState } from "react";

const goals = [
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#E0E7FF] rounded-full flex items-center justify-center mr-4">
        <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.828125" y="0.0664673" width="70.8718" height="70.8718" rx="35.4359" fill="#DBEAFE"/>
        <path d="M31.1028 41.0878L29.4988 39.4838C29.0576 39.0426 28.9019 38.4041 29.0992 37.8124C29.2549 37.3504 29.4625 36.7483 29.7117 36.0579H24.2198C23.7734 36.0579 23.3581 35.8191 23.1349 35.4298C22.9117 35.0405 22.9169 34.5629 23.1453 34.1788L25.8705 29.5849C26.5453 28.4482 27.7651 27.7526 29.0836 27.7526H33.3556C33.4802 27.545 33.6048 27.3529 33.7294 27.166C37.9806 20.8955 44.3134 20.6879 48.0923 21.3835C48.6945 21.4925 49.1616 21.9648 49.2758 22.567C49.9714 26.3511 49.7586 32.6787 43.4933 36.9299C43.3116 37.0545 43.1143 37.1791 42.9067 37.3037V41.5757C42.9067 42.8942 42.2111 44.1192 41.0744 44.7888L36.4805 47.514C36.0964 47.7424 35.6188 47.7476 35.2295 47.5244C34.8402 47.3012 34.6014 46.8911 34.6014 46.4395V40.875C33.8695 41.1293 33.231 41.3369 32.7483 41.4927C32.1669 41.6795 31.5336 41.5186 31.0976 41.0878H31.1028ZM42.9067 29.8289C43.4574 29.8289 43.9855 29.6102 44.3749 29.2208C44.7643 28.8314 44.983 28.3033 44.983 27.7526C44.983 27.2019 44.7643 26.6738 44.3749 26.2844C43.9855 25.895 43.4574 25.6763 42.9067 25.6763C42.356 25.6763 41.8279 25.895 41.4385 26.2844C41.0491 26.6738 40.8304 27.2019 40.8304 27.7526C40.8304 28.3033 41.0491 28.8314 41.4385 29.2208C41.8279 29.6102 42.356 29.8289 42.9067 29.8289Z" fill="#2563EB"/>
        </svg>

      </span>
    ),
    title: "Launch",
    desc: "Getting your business off the ground with essential tools and processes",
    tags: [
      { label: "Basic CRM", color: "bg-[#DBEAFE] text-[#1D4ED8]" },
      { label: "Simple Analytics", color: "bg-[#DBEAFE] text-[#1D4ED8]" },
      { label: "Essential Marketing", color: "bg-[#DBEAFE] text-[#1D4ED8]" },
    ],
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#DCFCE7] rounded-full flex items-center justify-center mr-4">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.828125" y="0.402283" width="70.8718" height="70.8718" rx="35.4359" fill="#DCFCE7"/>
        <path d="M26.2967 24.7627C26.2967 23.844 25.5544 23.1017 24.6357 23.1017C23.7169 23.1017 22.9746 23.844 22.9746 24.7627V42.2039C22.9746 44.4982 24.8329 46.3565 27.1273 46.3565H47.8905C48.8093 46.3565 49.5515 45.6142 49.5515 44.6955C49.5515 43.7767 48.8093 43.0344 47.8905 43.0344H27.1273C26.6705 43.0344 26.2967 42.6607 26.2967 42.2039V24.7627ZM47.4026 29.258C48.0514 28.6091 48.0514 27.5554 47.4026 26.9065C46.7537 26.2577 45.7 26.2577 45.0511 26.9065L39.5852 32.3777L36.6057 29.3981C35.9568 28.7493 34.9031 28.7493 34.2542 29.3981L28.4405 35.2118C27.7917 35.8607 27.7917 36.9144 28.4405 37.5633C29.0894 38.2121 30.1431 38.2121 30.792 37.5633L35.4325 32.9279L38.4121 35.9074C39.0609 36.5563 40.1147 36.5563 40.7635 35.9074L47.4077 29.2632L47.4026 29.258Z" fill="#16A34A"/>
        </svg>

      </span>
    ),
    title: "Scale",
    desc: "Growing your existing business with advanced tools and team collaboration",
    tags: [
      { label: "Advanced CRM", color: "bg-[#DCFCE7] text-[#15803D]" },
      { label: "Team Management", color: "bg-[#DCFCE7] text-[#15803D]" },
      { label: "Multi-channel Marketing", color: "bg-[#DCFCE7] text-[#15803D]" },
    ],
  },
  {
    icon: (
      <span className="inline-block w-12 h-12 bg-[#F3E8FF] rounded-full flex items-center justify-center mr-4">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.828125" y="0.73645" width="70.8718" height="70.8718" rx="35.4359" fill="#F3E8FF"/>
        <path d="M35.6652 28.7997C36.0337 28.4727 36.1791 27.9588 35.987 27.502C35.8676 27.2269 35.7378 26.9569 35.5925 26.6974L35.4316 26.4171C35.2759 26.1576 35.1046 25.9032 34.9229 25.6592C34.627 25.2647 34.1079 25.135 33.6408 25.2907L32.1769 25.7734C31.6215 25.3166 30.9831 24.9429 30.2979 24.6886L29.9812 23.1832C29.8826 22.7005 29.5089 22.3164 29.0209 22.2593C28.6783 22.2125 28.3306 22.1918 27.9776 22.1918H27.9412C27.5883 22.1918 27.2405 22.2125 26.8979 22.2541C26.41 22.3112 26.0362 22.7005 25.9376 23.178L25.621 24.6886C24.9306 24.9481 24.2973 25.3166 23.7419 25.7734L22.2729 25.2959C21.8057 25.1402 21.2866 25.2699 20.9908 25.6644C20.8091 25.9084 20.6378 26.1627 20.4769 26.4223L20.3211 26.6974C20.1758 26.9569 20.046 27.2269 19.9266 27.5072C19.7346 27.9588 19.8799 28.4727 20.2485 28.8049L21.4008 29.8326C21.3437 30.1804 21.3126 30.5438 21.3126 30.9123C21.3126 31.2809 21.3437 31.6442 21.4008 31.9972L20.2485 33.025C19.8799 33.352 19.7346 33.8659 19.9266 34.3227C20.046 34.5978 20.1758 34.8677 20.3211 35.1325L20.4769 35.4024C20.6326 35.6671 20.8039 35.9163 20.9908 36.1602C21.2866 36.5547 21.8057 36.6845 22.2729 36.5288L23.7367 36.046C24.2921 36.5028 24.9306 36.8766 25.6158 37.1309L25.9324 38.6414C26.031 39.1242 26.4048 39.5083 26.8927 39.5654C27.2405 39.6069 27.5935 39.6277 27.9516 39.6277C28.3098 39.6277 28.6628 39.6069 29.0105 39.5654C29.4985 39.5083 29.8722 39.119 29.9708 38.6414L30.2875 37.1309C30.9779 36.8714 31.6111 36.5028 32.1666 36.046L33.6304 36.5288C34.0975 36.6845 34.6166 36.5547 34.9125 36.1602C35.0942 35.9163 35.2655 35.6671 35.4212 35.4024L35.5821 35.1221C35.7275 34.8625 35.8572 34.5926 35.9766 34.3175C36.1687 33.8659 36.0233 33.352 35.6548 33.0198L34.5024 31.992C34.5595 31.639 34.5907 31.2757 34.5907 30.9071C34.5907 30.5386 34.5595 30.1752 34.5024 29.8223L35.6548 28.7945L35.6652 28.7997ZM25.4652 30.9123C25.4652 30.2515 25.7277 29.6178 26.195 29.1505C26.6623 28.6832 27.296 28.4207 27.9568 28.4207C28.6176 28.4207 29.2514 28.6832 29.7186 29.1505C30.1859 29.6178 30.4484 30.2515 30.4484 30.9123C30.4484 31.5731 30.1859 32.2069 29.7186 32.6742C29.2514 33.1414 28.6176 33.4039 27.9568 33.4039C27.296 33.4039 26.6623 33.1414 26.195 32.6742C25.7277 32.2069 25.4652 31.5731 25.4652 30.9123ZM45.8495 47.7565C46.1766 48.1251 46.6904 48.2704 47.1472 48.0783C47.4223 47.959 47.6923 47.8292 47.9518 47.6838L48.2321 47.5229C48.4917 47.3672 48.746 47.1959 48.99 47.0142C49.3845 46.7183 49.5142 46.1993 49.3585 45.7321L48.8758 44.2683C49.3326 43.7129 49.7063 43.0744 49.9607 42.3892L51.4712 42.0726C51.9539 41.9739 52.338 41.6002 52.3951 41.1123C52.4367 40.7645 52.4574 40.4115 52.4574 40.0533C52.4574 39.6952 52.4367 39.3422 52.3951 38.9944C52.338 38.5065 51.9487 38.1327 51.4712 38.0341L49.9607 37.7123C49.7011 37.0219 49.3326 36.3886 48.8758 35.8332L49.3585 34.3694C49.5142 33.9022 49.3845 33.3832 48.99 33.0873C48.746 32.9056 48.4917 32.7343 48.2321 32.5734L47.957 32.4177C47.6975 32.2723 47.4275 32.1426 47.1472 32.0232C46.6956 31.8311 46.1817 31.9764 45.8495 32.345L44.8218 33.4974C44.4688 33.4403 44.1054 33.4091 43.7369 33.4091C43.3683 33.4091 43.005 33.4403 42.652 33.4974L41.6242 32.345C41.2972 31.9764 40.7833 31.8311 40.3265 32.0232C40.0514 32.1426 39.7815 32.2723 39.5167 32.4177L39.2468 32.5734C38.9821 32.7291 38.7329 32.9004 38.489 33.0873C38.0945 33.3832 37.9647 33.9022 38.1204 34.3694L38.6032 35.8332C38.1464 36.3886 37.7726 37.0271 37.5183 37.7123L36.0078 38.0237C35.525 38.1224 35.1409 38.4961 35.0838 38.984C35.0423 39.3318 35.0215 39.6848 35.0215 40.043C35.0215 40.4011 35.0423 40.7541 35.0838 41.1019C35.1409 41.5898 35.5302 41.9636 36.0078 42.0622L37.5183 42.3788C37.7778 43.0692 38.1464 43.7025 38.6032 44.2579L38.1204 45.7217C37.9647 46.1889 38.0945 46.708 38.489 47.0038C38.7329 47.1855 38.9821 47.3568 39.2468 47.5125L39.5271 47.6735C39.7867 47.8188 40.0566 47.9486 40.3317 48.068C40.7833 48.26 41.2972 48.1147 41.6294 47.7461L42.6572 46.5938C43.0102 46.6509 43.3735 46.682 43.7421 46.682C44.1106 46.682 44.474 46.6509 44.8269 46.5938L45.8547 47.7461L45.8495 47.7565ZM43.7369 37.5566C44.0641 37.5566 44.3881 37.621 44.6904 37.7462C44.9927 37.8714 45.2673 38.055 45.4987 38.2863C45.7301 38.5177 45.9136 38.7924 46.0388 39.0947C46.164 39.397 46.2285 39.721 46.2285 40.0482C46.2285 40.3754 46.164 40.6994 46.0388 41.0016C45.9136 41.3039 45.7301 41.5786 45.4987 41.81C45.2673 42.0413 44.9927 42.2249 44.6904 42.3501C44.3881 42.4753 44.0641 42.5397 43.7369 42.5397C43.4097 42.5397 43.0857 42.4753 42.7834 42.3501C42.4811 42.2249 42.2064 42.0413 41.9751 41.81C41.7437 41.5786 41.5602 41.3039 41.4349 41.0016C41.3097 40.6994 41.2453 40.3754 41.2453 40.0482C41.2453 39.721 41.3097 39.397 41.4349 39.0947C41.5602 38.7924 41.7437 38.5177 41.9751 38.2863C42.2064 38.055 42.4811 37.8714 42.7834 37.7462C43.0857 37.621 43.4097 37.5566 43.7369 37.5566Z" fill="#9333EA"/>
        </svg>

      </span>
    ),
    title: "Automate",
    desc: "Streamlining operations with automation and integration tools for efficiency",
    tags: [
      { label: "Workflow Automation", color: "bg-[#F3E8FF] text-[#7E22CE]" },
      { label: "Integration Tools", color: "bg-[#F3E8FF] text-[#7E22CE]" },
      { label: "AI-powered Analytics", color: "bg-[#F3E8FF] text-[#7E22CE]" },
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
                  <div className="text-[19px] text-[#4B5563] mb-3 text-left" style={{ lineHeight: '22px',fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{goal.desc}</div>
                  <div className="flex flex-wrap gap-2">
                    {goal.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-[15px] font-medium ${tag.color}`} style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>{tag.label}</span>
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
          <div className="flex w-full justify-between items-center  border-t border-[#F3F4F6] pt-8 border-t-[7px] mt-16">
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