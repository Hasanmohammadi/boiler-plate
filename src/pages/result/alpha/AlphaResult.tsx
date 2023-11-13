import clsx from 'clsx';
import AlphaSearchBox from 'pages/home/body/alpha';

export default function AlphaResult() {
  return (
    <div className="absolute w-full ">
      <div
        className={clsx(
          'flex flex-col justify-center w-full m-auto pt-0 bg-white top-0 left-0 right-0 sticky z-10 shadow-xl',
        )}
      >
        <AlphaSearchBox isInHeader />
      </div>
    </div>
  );
}
