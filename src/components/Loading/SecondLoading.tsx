import Spiner from '@/assets/icons/Spiner';

function SecondLoading() {
  return (
    <div className="full-screen flex justify-center items-center bg-black-0.3">
      <div className="flex flex-col items-center justify-center w-[96px] h-[80px] bg-white rounded-xl">
        <Spiner width="32px" height="32px" />
      </div>
    </div>
  );
}

export default SecondLoading;
