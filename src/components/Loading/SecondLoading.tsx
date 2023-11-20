import Spiner from '@/assets/icons/Spiner';

type Props = {
  isLoading?: boolean;
  children?: React.ReactElement;
};

function SecondLoading({ isLoading = false, children }: Props) {
  return (
    <div>
      {children}
      {isLoading && (
        <div className="full-screen flex justify-center items-center bg-black-0.3">
          <div className="flex flex-col items-center justify-center w-[96px] h-[80px] bg-white rounded-xl">
            <Spiner width="32px" height="32px" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondLoading;
