import PackageOption from '../PackageOption/PackageOption';
import ReviewPackage from '../ReviewPackage/ReviewPackage';
import { PackageProps } from '@/types/booking';

function Packages({ isChoosePackage, setIsChoosePackage, packageChose, setPackageChose }: PackageProps) {
  return (
    <>
      {isChoosePackage ? (
        <ReviewPackage packageChose={packageChose} setIsChoosePackage={setIsChoosePackage} />
      ) : (
        <PackageOption
          packageChose={packageChose}
          setIsChoosePackage={setIsChoosePackage}
          setPackageChose={setPackageChose}
        />
      )}
    </>
  );
}

export default Packages;
