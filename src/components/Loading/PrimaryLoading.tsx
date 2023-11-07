import Image from 'next/image';

import HMP_LOGO from '@/../public/assets/logo/hmp_master_logo.png';

function PrimaryLoading() {
  return (
    <div className="full-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image src={HMP_LOGO} className="w-[150px] h-[150px] mb-5" alt="HMP LOGO" />
        {/* Loading Icon header */}
      </div>
    </div>
  );
}

export default PrimaryLoading;
