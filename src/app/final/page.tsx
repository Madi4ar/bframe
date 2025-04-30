'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import shortsOne from '../../images/shorts-1.png';
import shortsTwo from '../../images/shorts-2.png';
import shortsThree from '../../images/shorts-3.png';
import shortsFour from '../../images/shorts-4.png';
import Image from 'next/image';
import videoDownload from '../../images/videoDownload.svg';
import share from '../../images/share.svg';
import collect from '../../images/collect.svg';
import { useRouter } from 'next/navigation';

export default function FinalPage() {
  const router = useRouter();

  return (
    <div className="bg-[#181A1E] w-full min-h-screen">
      <div className="w-full py-10 px-4 flex flex-col">
        <button
          onClick={() => router.back()}
          className="text-white text-xl border border-[#292A2F] px-4 py-1 outline-none rounded-lg w-fit">
          <FontAwesomeIcon
            className="text-white cursor-pointer"
            icon={faArrowLeft}
          />
        </button>
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-white text-2xl font-bold">
            Справедливость: Лекция #1. Моральная сторона убийства [Гарвард]
          </h2>

          <div className="w-full flex flex-wrap items-start justify-between gap-2 mt-5">
            <div className="flex flex-col w-full md:w-[24%] mb-3 md:mb-0">
              <Image className="w-full md:w-[80%]" src={shortsOne} alt="" />
              <div className="flex w-full md:w-[80%] items-start justify-between mt-3">
                <p className="text-white w-[70%]">
                  The main mountain view and details about central Asia,
                  SouthEast Asia...
                </p>
                <div className="flex items-center gap-2">
                  <Image src={videoDownload} alt="" />
                  <Image src={share} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[24%] mb-3 md:mb-0">
              <Image className="w-full md:w-[80%]" src={shortsTwo} alt="" />
              <div className="flex w-full md:w-[80%] items-start justify-between mt-3">
                <p className="text-white w-[70%]">
                  The main mountain view and details about central Asia,
                  SouthEast Asia...
                </p>
                <div className="flex items-center gap-2">
                  <Image src={videoDownload} alt="" />
                  <Image src={share} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[24%] mb-3 md:mb-0">
              <Image className="w-full md:w-[80%]" src={shortsThree} alt="" />
              <div className="flex w-full md:w-[80%] items-start justify-between mt-3">
                <p className="text-white w-[70%]">
                  The main mountain view and details about central Asia,
                  SouthEast Asia...
                </p>
                <div className="flex items-center gap-2">
                  <Image src={videoDownload} alt="" />
                  <Image src={share} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[24%] mb-3 md:mb-0">
              <Image className="w-full md:w-[80%]" src={shortsFour} alt="" />
              <div className="flex w-full md:w-[80%] items-start justify-between mt-3">
                <p className="text-white w-[70%]">
                  The main mountain view and details about central Asia,
                  SouthEast Asia...
                </p>
                <div className="flex items-center gap-2">
                  <Image src={videoDownload} alt="" />
                  <Image src={share} alt="" />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.back()}
            className="bg-[#6143F5] mt-5 flex items-center gap-2 cursor-pointer text-white py-2 px-4 rounded-lg mt-5">
            <Image src={collect} alt="" />
            Collect and make one video
          </button>
        </div>
      </div>
    </div>
  );
}
