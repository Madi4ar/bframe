import Image from 'next/image';
import React from 'react';
import preview from '../images/preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';

function ProjectsList() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <p className="w-full text-left text-white text-xl font-bold mb-5">
          Projects
        </p>

        <div className="relative mb-5 w-full rounded-lg bg-[#1C1D21] flex items-center justify-between py-[14px] px-[20px]">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Image
              className="mt-8 w-full md:w-24 md:mt-0"
              src={preview}
              alt=""
            />
            <div className="flex flex-col justify-between">
              <p className="font-bold text-white text-base text-center">
                Справедливость: Лекция #1. Моральная сторона убийства [Гарвард]
              </p>
              <p className="text-[#7D7F86] text-center md:text-left">
                33% • Creating your project ...
              </p>
            </div>
          </div>

          <FontAwesomeIcon
            className="absolute right-4 top-3 md:relative md:top-0 md:right-0  text-2xl text-white cursor-pointer"
            icon={faXmark}
          />
        </div>

        <div className="relative mb-5 w-full rounded-lg bg-[#1C1D21] flex flex-col md:flex-row items-center justify-between py-[14px] px-[20px]">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-5 md:mb-0 mt-5 md:mt-0">
            <Image
              className="mt-8 w-full md:w-24 md:mt-0"
              src={preview}
              alt=""
            />
            <div className="flex flex-col justify-between">
              <p className="font-bold text-white text-base text-center">
                Справедливость: Лекция #1. Моральная сторона убийства [Гарвард]
              </p>
              <p className="text-[#7D7F86] text-center md:text-left">
                10 shots • en • 2:3 • 480p • auto
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="uppercase bg-[#6143F5] text-white py-2 px-4 rounded-lg">
              ai shorts
            </button>
            <FontAwesomeIcon className="text-white" icon={faTrash} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
