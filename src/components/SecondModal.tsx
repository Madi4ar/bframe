import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faArrowRight,
  faChevronDown,
  faCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import preview from '../images/preview.png';
import aspectRatio916 from '../images/aspect-ratio-916.svg';
import aspectRatio169 from '../images/aspect-ratio-169.svg';
import aspectRatio23 from '../images/aspect-ratio-23.svg';
import aspectRatio32 from '../images/aspect-ratio-32.svg';
import aspectRatioAuto from '../images/aspect-ratio-916.svg';
import resolutionIcon from '../images/resolution.svg';
import durationIcon from '../images/duration.svg';

interface SecondModalProps {
  onClose?: () => void;
  onNext?: () => void;
}

function SecondModal({ onClose, onNext }: SecondModalProps) {
  const [isAspectRatioOpen, setIsAspectRatioOpen] = useState(false);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState('auto');
  const [isResolutionOpen, setIsResolutionOpen] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState('1080p');
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('30');

  const aspectRatios = [
    { value: '9:16', icon: aspectRatio916 },
    { value: '16:9', icon: aspectRatio169 },
    { value: '2:3', icon: aspectRatio23 },
    { value: '3:2', icon: aspectRatio32 },
    { value: 'auto', icon: aspectRatioAuto },
  ];

  const resolutions = ['480p', '720p', '1080p', '1440p'];
  const durations = ['15', '30', '45', '60'];

  return (
    <>
      <div className="z-9999 bg-[rgba(0,0,0,0.5)] w-full absolute top-0 h-full flex items-center">
        <div className="bg-[#181A1E] py-10 h-[90vh] md:h-auto w-[80%] px-4 md:w-1/2 rounded-lg fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl">
            <FontAwesomeIcon
              className="text-white cursor-pointer"
              icon={faXmark}
            />
          </button>
          <div className="flex flex-col items-center justify-center flex-1 overflow-y-auto">
            <div className="flex flex-col items-center mt-[200px] md:mt-10">
              <Image className="" src={preview} alt="" />
              <p className="font-bold text-white text-xl text-center mt-5">
                Справедливость: Лекция #1. Моральная сторона убийства [Гарвард]
              </p>
              <div className="flex flex-col w-full mt-3">
                <p className="uppercase text-[#3D3F43]">original language</p>
                <div className="relative mt-2">
                  <select
                    className="appearance-none bg-[#232529] text-white w-full py-2 px-4 rounded-lg outline-none cursor-pointer"
                    defaultValue="english">
                    <option value="russian">Russian</option>
                    <option value="english">English (default)</option>
                    <option value="kazakh">Kazakh</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faChevronDown}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full mt-5">
                <p className="uppercase text-[#3D3F43]">Describe your video</p>
                <textarea
                  className="mt-2 bg-[#232529] text-white w-full py-2 px-4 rounded-lg outline-none cursor-pointer"
                  placeholder="This is basketball game, please, take only gol moments..."></textarea>
              </div>

              <div className="w-full flex flex-wrap justify-between items-center mt-5">
                <div className="flex flex-col w-full md:w-[32%] mb-5 md:mb-0">
                  <p className="uppercase text-[#3D3F43]">Aspect ratio</p>
                  <div className="relative mt-2">
                    <div
                      onClick={() => setIsAspectRatioOpen(!isAspectRatioOpen)}
                      className="bg-[#232529] text-white w-full py-2 px-4 rounded-lg cursor-pointer flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={
                            aspectRatios.find(
                              (ratio) => ratio.value === selectedAspectRatio
                            )?.icon
                          }
                          alt={selectedAspectRatio}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span>{selectedAspectRatio}</span>
                      </div>
                      <FontAwesomeIcon
                        className={`text-white transition-transform ${
                          isAspectRatioOpen ? 'rotate-180' : ''
                        }`}
                        icon={faChevronDown}
                      />
                    </div>
                    {isAspectRatioOpen && (
                      <div className="absolute w-full bottom-full mb-2 bg-[#232529] rounded-lg overflow-hidden z-50">
                        {aspectRatios.map((ratio) => (
                          <div
                            key={ratio.value}
                            onClick={() => {
                              setSelectedAspectRatio(ratio.value);
                              setIsAspectRatioOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#2C2E33] ${
                              selectedAspectRatio === ratio.value
                                ? 'bg-[#2C2E33]'
                                : ''
                            }`}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={ratio.icon}
                                alt={ratio.value}
                                width={20}
                                height={20}
                                className="mr-2"
                              />
                              <span className="text-white">{ratio.value}</span>
                            </div>

                            {selectedAspectRatio === ratio.value ? (
                              <FontAwesomeIcon
                                className="text-white text-[8px]"
                                icon={faCircle}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="text-white text-[12px]"
                                icon={faChevronRight}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[32%] mb-5 md:mb-0">
                  <p className="uppercase text-[#3D3F43]">Resolution</p>
                  <div className="relative mt-2">
                    <div
                      onClick={() => setIsResolutionOpen(!isResolutionOpen)}
                      className="bg-[#232529] text-white w-full py-2 px-4 rounded-lg cursor-pointer flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={resolutionIcon}
                          alt="resolution"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span>{selectedResolution}</span>
                      </div>
                      <FontAwesomeIcon
                        className={`text-white transition-transform ${
                          isResolutionOpen ? 'rotate-180' : ''
                        }`}
                        icon={faChevronDown}
                      />
                    </div>
                    {isResolutionOpen && (
                      <div className="absolute w-full bottom-full mb-2 bg-[#232529] rounded-lg overflow-hidden z-50">
                        {resolutions.map((resolution) => (
                          <div
                            key={resolution}
                            onClick={() => {
                              setSelectedResolution(resolution);
                              setIsResolutionOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#2C2E33] ${
                              selectedResolution === resolution
                                ? 'bg-[#2C2E33]'
                                : ''
                            }`}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={resolutionIcon}
                                alt={resolution}
                                width={20}
                                height={20}
                                className="mr-2"
                              />
                              <span className="text-white">{resolution}</span>
                            </div>

                            {selectedResolution === resolution ? (
                              <FontAwesomeIcon
                                className="text-white text-[8px]"
                                icon={faCircle}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="text-white text-[12px]"
                                icon={faChevronRight}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-[32%] mb-5 md:mb-0">
                  <p className="uppercase text-[#3D3F43]">Duration</p>
                  <div className="relative mt-2">
                    <div
                      onClick={() => setIsDurationOpen(!isDurationOpen)}
                      className="bg-[#232529] text-white w-full py-2 px-4 rounded-lg cursor-pointer flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={durationIcon}
                          alt="duration"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span>{selectedDuration} minutes</span>
                      </div>
                      <FontAwesomeIcon
                        className={`text-white transition-transform ${
                          isDurationOpen ? 'rotate-180' : ''
                        }`}
                        icon={faChevronDown}
                      />
                    </div>
                    {isDurationOpen && (
                      <div className="absolute w-full bottom-full mb-2 bg-[#232529] rounded-lg overflow-hidden z-50">
                        {durations.map((duration) => (
                          <div
                            key={duration}
                            onClick={() => {
                              setSelectedDuration(duration);
                              setIsDurationOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#2C2E33] ${
                              selectedDuration === duration
                                ? 'bg-[#2C2E33]'
                                : ''
                            }`}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={durationIcon}
                                alt={duration}
                                width={20}
                                height={20}
                                className="mr-2"
                              />
                              <span className="text-white">
                                {duration} minutes
                              </span>
                            </div>

                            {selectedDuration === duration ? (
                              <FontAwesomeIcon
                                className="text-white text-[8px]"
                                icon={faCircle}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="text-white text-[12px]"
                                icon={faChevronRight}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-5 w-full justify-end">
            <button
              onClick={onNext}
              className="bg-[#6143F5] text-white py-2 px-4 rounded-lg">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondModal;
