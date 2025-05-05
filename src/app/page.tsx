'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainPage from '@/components/MainPage';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#1C1D21] min-h-screen flex flex-col md:flex-row">
      <div
        className={`border z-50 w-full h-screen md:w-[15%] fixed transition-all duration-300 ${
          isSidebarOpen ? 'left-0 h-screen' : '-left-full'
        } md:left-0 md:relative border-r border-[#28292D]`}>
        <Sidebar onClose={toggleSidebar} />
      </div>
      <div className="w-full md:w-[85%] p-[16px]">
        <MainPage onMenuClick={toggleSidebar} />
      </div>
    </div>
  );
}
