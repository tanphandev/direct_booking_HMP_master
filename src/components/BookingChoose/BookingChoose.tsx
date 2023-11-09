'use client';
import { useEffect, useRef, useState } from 'react';
import Packages from './Packages/Packages';
import Rooms from './Rooms/Rooms';
import { PackageDetail } from '@/types/booking';

function BookingChoose() {
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [isChoosePackage, setIsChoosePackage] = useState<boolean>(false);
  const [packageChose, setPackageChose] = useState<PackageDetail | null>(null);
  const tabs: TabProps[] = [
    {
      label: 'ROOMS',
      component: <Rooms />
    },
    {
      label: 'PACKAGES',
      component: (
        <Packages
          isChoosePackage={isChoosePackage}
          setIsChoosePackage={setIsChoosePackage}
          packageChose={packageChose}
          setPackageChose={setPackageChose}
        />
      )
    }
  ];

  const ChangeTab = (index: number) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    tabsRef.current?.forEach((tab, index) => {
      if (index === activeTabIndex) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });
  }, [activeTabIndex]);
  return (
    <div className="h-full flex flex-col justify-center px-4 mx-[106px]">
      <div className="text-grey-21 font-bold mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => {
              if (el) {
                tabsRef.current[index] = el;
              }
            }}
            className="transition-colors w-[200px] h-[80px] py-4 px-9 bg-white hover:bg-blue-0a hover:text-white rounded-[4px] shadow-sm shadow-black-0.1"
            onClick={() => {
              ChangeTab(index);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-white">{tabs[activeTabIndex].component}</div>
    </div>
  );
}

export default BookingChoose;