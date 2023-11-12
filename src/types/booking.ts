// ============================ PACKAGE OPTION TYPE =========================== //

interface PackageProps {
  isChoosePackage?: boolean;
  setIsChoosePackage?: React.Dispatch<React.SetStateAction<boolean>>;
  packageChose?: PackageDetail | null;
  setPackageChose?: React.Dispatch<React.SetStateAction<PackageDetail | null>>;
}

interface PackageDetail {
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
}

// =========================== PERSON QUANTITY TYPE =========================== //

interface AdultProps {
  adultQuantity: number;
  setAdultQuantity: React.Dispatch<React.SetStateAction<number>>;
}

interface ChildProps {
  childQuantity: number;
  setChildQuantity: React.Dispatch<React.SetStateAction<number>>;
}

interface PersonQuantityPopperProps extends AdultProps, ChildProps {}

// ================================= SCHEDULE ================================= //

interface SchelduleProps {
  day: string;
  transfer?: string;
  excursion?: string;
  FAndB?: string;
}

interface DateProps {
  title: string;
  date: any;
  time: string;
  mb?: string;
  bgColor?: string;
}
