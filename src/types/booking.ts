export type PackageProps = {
  isChoosePackage?: boolean;
  setIsChoosePackage?: React.Dispatch<React.SetStateAction<boolean>>;
  packageChose?: PackageDetail | null;
  setPackageChose?: React.Dispatch<React.SetStateAction<PackageDetail | null>>;
};

export type PackageDetail = {
  name: string;
  detail: {
    duration: string;
    max_adult: number;
    max_children: number;
    adult_price: string;
    child_price: string;
    signle_price: string;
    description: string;
  };
};
