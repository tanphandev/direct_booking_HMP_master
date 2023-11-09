import CalendarIcon from '@/app/assets/icons/Calendar';

function CheckIn() {
  return (
    <div className="h-[80px] grid grid-cols-2 bg-white text-grey-21 rounded-md mb-2">
      <div className="flex items-center border-r-[1px] border-black-0.2 p-4">
        <CalendarIcon width="24px" height="24px" color="#212529" className="mr-4" />
        <div>
          <p className="text-sm font-medium">CHECK-IN</p>
          <p className="text-lg font-bold">Nov 8, 2023</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium">CHECK-OUT</p>
        <p className="text-lg font-bold">Nov 9, 2023</p>
      </div>
    </div>
  );
}

export default CheckIn;
