import React from 'react';
import Image from 'next/image';
import plus from '../images/plus.svg';
import highlight from '../images/highlight.svg';
import menu from '../images/burger-menu.svg';
import Link from 'next/link';
import ModalComponent from './ModalComponent';
import SecondModal from './SecondModal';
import ProjectsList from './ProjectsList';
import { useRouter } from 'next/navigation';

function MainPage({ onMenuClick }: { onMenuClick: () => void }) {
  const [isFirstModalOpen, setIsFirstModalOpen] = React.useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = React.useState(false);
  const router = useRouter();

  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const openFinalPage = () => {
    setIsSecondModalOpen(false);
    router.push('/final');
  };

  return (
    <>
      <div className="bg-black h-full rounded-xl py-[30px] px-[24px]">
        <Image
          className="md:hidden menu-burger cursor-pointer"
          src={menu}
          alt=""
          onClick={onMenuClick}
        />
        <div className="flex items-center w-full justify-between">
          <p className="text-white text-xl font-bold">Projects</p>
          <Link
            href=""
            className="rounded-lg bg-[#9747FF] py-[6px] px-[20px] flex items-center justify-center">
            <Image src={plus} alt="" />
            <p className="text-white ml-3">Get pro</p>
          </Link>
        </div>

        <div className="w-full flex flex-wrap justify-between mt-[30px]">
          <div
            className="w-full md:w-[32%] flex items-center bg-[#1C1D21] rounded-lg p-[25px] mb-5 cursor-pointer"
            onClick={() => setIsFirstModalOpen(true)}>
            <Image src={highlight} alt="" />
            <div className="flex flex-col ml-5">
              <p className="font-bold text-white">AI Highlights</p>
              <p className="text-[#7D7F86]">Viral clips from longer videos</p>
            </div>
          </div>

          <div
            className="w-full md:w-[32%] flex items-center bg-[#1C1D21] rounded-lg p-[25px] mb-5 cursor-pointer"
            onClick={() => setIsFirstModalOpen(true)}>
            <Image src={highlight} alt="" />
            <div className="flex flex-col ml-5">
              <p className="font-bold text-white">AI Highlights</p>
              <p className="text-[#7D7F86]">Viral clips from longer videos</p>
            </div>
          </div>

          <div
            className="w-full md:w-[32%] flex items-center bg-[#1C1D21] rounded-lg p-[25px] mb-5 cursor-pointer"
            onClick={() => setIsFirstModalOpen(true)}>
            <Image src={highlight} alt="" />
            <div className="flex flex-col ml-5">
              <p className="font-bold text-white">AI Highlights</p>
              <p className="text-[#7D7F86]">Viral clips from longer videos</p>
            </div>
          </div>
        </div>

        <ProjectsList />
      </div>
      {isFirstModalOpen && (
        <ModalComponent
          onClose={() => setIsFirstModalOpen(false)}
          onNext={openSecondModal}
        />
      )}
      {isSecondModalOpen && (
        <SecondModal
          onClose={() => setIsSecondModalOpen(false)}
          onNext={openFinalPage}
        />
      )}
    </>
  );
}

export default MainPage;
