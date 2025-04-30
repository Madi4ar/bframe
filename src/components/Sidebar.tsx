import React from 'react';
import logo from '../images/logo.svg';
import square from '../images/menu-icon-square.svg';
import plus from '../images/plus.svg';
import Image from 'next/image';

interface SidebarProps {
  onClose: () => void;
}

function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="w-full bg-[#1C1D21] flex flex-col py-[30px] px-[20px] h-full">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="" />
        <button
          onClick={onClose}
          className="md:hidden text-white text-2xl font-bold">
          ×
        </button>
      </div>
      <div className="flex items-center mt-[30px] rounded-lg bg-[rgba(255,255,255,0.10)] py-[13.5px] px-[11px]">
        <Image src={square} alt="" />
        <p className="ml-5 text-white">All playlists</p>
      </div>

      <button className="flex items-center cursor-pointer mt-[28px] ">
        <Image src={plus} alt="" />
        <p className="ml-5 text-white">Create new</p>
      </button>
    </div>
  );
}

export default Sidebar;
