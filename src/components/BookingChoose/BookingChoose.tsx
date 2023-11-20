'use client';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { isEmpty } from 'lodash';

import Packages from './Packages/Packages';
import Rooms from './Rooms/Rooms';
import { getBookingPackages } from '@/store/booking/bookingAction';
import { getDateNowTimestamp } from '@/utils/helper';

function BookingChoose() {
  const {
    db_sale_type_default: tabDefault,
    db_sales_types: tabList,
  }: { db_sale_type_default: TabProps; db_sales_types: TabProps[] } = useAppSelector((state) => state.business.setting);
  const { bid } = useAppSelector((state) => state.business?.basic_business_info);
  const dispatch = useAppDispatch();
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const [tabs, setTabs] = useState<TabProps[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [isChoosePackage, setIsChoosePackage] = useState<boolean>(false);
  const [packageChose, setPackageChose] = useState<PackageDetail | null>(null);
  useEffect(() => {
    if (!isEmpty(tabList) && !isEmpty(tabDefault)) {
      const temp = [...tabList].map((tab) => ({ ...tab }));
      /* sort tabs with default tab is first position */
      temp.sort((a, b) => {
        if (a.id === tabDefault?.id) {
          return -1;
        } else if (b.id === tabDefault?.id) {
          return 1;
        }
        return 0;
      });

      /* insert component */
      temp.forEach((tab) => {
        if (tab.id === 'rooms') {
          tab.component = <Rooms />;
        } else if (tab.id === 'packages') {
          tab.component = (
            <Packages
              isChoosePackage={isChoosePackage}
              setIsChoosePackage={setIsChoosePackage}
              packageChose={packageChose}
              setPackageChose={setPackageChose}
            />
          );
        }
      });
      /* set tabs value */
      setTabs(temp);
    }
  }, [tabList, tabDefault, isChoosePackage, packageChose]);

  /* active tab color */
  useEffect(() => {
    tabsRef.current?.forEach((tab, index) => {
      if (index === activeTabIndex) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });
  }, [activeTabIndex, tabs]);

  useEffect(() => {
    const checkPackages = () => {
      for (const item of tabList) {
        if (item.id === 'packages') {
          return true;
        }
      }
      return false;
    };
    if (isEmpty(tabList)) return;
    const isPackagesExist = checkPackages();
    isPackagesExist && dispatch(getBookingPackages({ bid, datecreated: getDateNowTimestamp() }));
  }, [tabList]);
  /* Change Tab */
  const ChangeTab = (index: number) => {
    setActiveTabIndex(index);
  };
  return (
    <div className="main-container h-full flex flex-col sm:justify-center py-4 px-4">
      <div className="text-grey-21 font-bold mb-4">
        {tabs.map((tab: TabProps, index) => (
          <button
            key={index}
            ref={(el) => {
              if (el) {
                tabsRef.current[index] = el;
              }
            }}
            className="transition-colors uppercase w-[140px] md:w-[200px] h-[80px] py-4 bg-white hover:bg-blue-0a hover:text-white rounded-[4px] shadow-sm shadow-black-0.1"
            onClick={() => {
              ChangeTab(index);
            }}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div className="text-white">{tabs[activeTabIndex]?.component}</div>
    </div>
  );
}

export default BookingChoose;
