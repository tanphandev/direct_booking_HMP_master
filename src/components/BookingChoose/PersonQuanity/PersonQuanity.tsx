import PersonIcon from '@/app/assets/icons/PersonIcon';

function PersonQuanity() {
  return (
    <div className="h-[80px] flex items-center bg-white text-grey-21 rounded-md p-4 mb-2">
      <PersonIcon width="24px" height="24px" color="#212529" className="mr-4" />
      <p className="text-lg font-bold">2 Adults</p>
      <span className="px-2 text-black-0.2">●</span>
      <p className="text-lg font-bold">0 Child</p>
    </div>
  );
}

export default PersonQuanity;
