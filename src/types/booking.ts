// ============================ PACKAGE OPTION TYPE =========================== //

interface PackageProps {
  isChoosePackage?: boolean;
  setIsChoosePackage?: React.Dispatch<React.SetStateAction<boolean>>;
  packageChose?: PackageDetail | null;
  setPackageChose?: React.Dispatch<React.SetStateAction<PackageDetail | null>>;
}

interface PackageDetail {
  pid: string;
  uid: string;
  title: string;
  type: string;
  packages_night_stay: number;
  db_max_adult: number;
  db_max_children: number;
  packages_adult_rate: number;
  packages_child_rate: number;
  packages_single_rate: number;
  packages_note: string;
  packages_room_type: Array<{
    entity_id: number;
    title: string;
  }>;
  packages_days: Array<{
    activities: Array<{
      type: string;
      title: string;
    }>;
  }>;
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
  activities: any[];
}

interface DateProps {
  title: string;
  date: Date;
  time: string;
  mb?: string;
  bgColor?: string;
}

// =================================== STEP =================================== //

interface Step {
  currentStep: number;
  step: number;
}

interface FillInfoProp extends Step {}
interface VerifyDetailProps extends Step {}
interface ConfirmReservationProps extends Step {}

// ============================== FILL INFOMATION ============================= //

interface GuestInformationProps {
  inputId: string;
  isReuseOrderData?: boolean;
  guestFormRef?: any;
  handleUseOrderData?: Function;
}
interface ArrivalTimeType {
  arrivalAt: string;
  departingFrom: string;
  via: string;
}

interface PersonInformation {
  full_name: string;
  mail: string;
  phone_number: string;
  country: string;
}

// ================================= PAYMENTS ================================= //
interface PaymentProps {
  handlePayAtHotel: Function;
}
