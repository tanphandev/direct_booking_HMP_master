import CheckIn from '../CheckIn/CheckIn';
import PersonQuanity from '../PersonQuanity/PersonQuanity';

function Rooms() {
  return (
    <div>
      <div>
        <CheckIn />
        <PersonQuanity />
        <div className="h-[80px] flex bg-white rounded-md mb-2">
          <input
            className="flex-1 h-full text-grey-21 text-lg rounded-l-md outline-none px-4"
            placeholder="I have a code"
          />
          <button className="transition-colors w-[120px] text-white bg-blue-0a hover:bg-blue-09 font-semibold rounded-r-md">
            APPLY
          </button>
        </div>
        <div className="flex justify-end">
          <button className="transition-colors w-[150px] h-[56px] text-base font-bold bg-blue-0a hover:bg-blue-09 rounded-md">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rooms;