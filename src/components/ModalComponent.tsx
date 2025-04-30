import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload,
  faArrowRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import highlight from '../images/fashion-blogging-concept-illustration.png';

interface ModalComponentProps {
  onClose?: () => void;
  onNext?: () => void;
}

function ModalComponent({ onClose, onNext }: ModalComponentProps) {
  return (
    <>
      <div className="z-9999 bg-[rgba(0,0,0,0.5)] w-full absolute top-0 h-full flex items-center">
        <div className="bg-[#181A1E] py-10 h-auto w-auto px-4 md:w-1/2 rounded-lg fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl">
            <FontAwesomeIcon
              className="text-white cursor-pointer"
              icon={faXmark}
            />
          </button>
          <div className="flex flex-col items-center justify-center">
            <Image className="w-1/2 mt-5" src={highlight} alt="" />
            <div className="flex flex-col items-center mt-10">
              <p className="font-bold text-white">AI Shorts</p>
              <p className="mt-2 text-white">
                Turn long-from videos into viral-worthy clips
              </p>
              <div className="flex items-center mt-5">
                <button
                  onClick={onNext}
                  className="bg-[#6143F5] cursor-pointer flex items-center gap-2 rounded-lg px-4 py-2">
                  <FontAwesomeIcon className="text-white" icon={faUpload} />
                  <p className="text-white">Upload</p>
                </button>

                <div className="flex items-center ml-3 bg-[#232529] py-2 rounded-lg px-4">
                  <input
                    className="bg-transparent outline-none text-white placeholder:text-white/50"
                    type="text"
                    placeholder="Paste a Youtube link"
                  />
                  <button className="bg-transparent border-none cursor-pointer">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faArrowRight}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
