import { AlphaFilterIcon } from 'assets/svg';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'react-feather';

const filters = [
  {
    id: 1,
    text: 'قیمت',
    icon: <AlphaFilterIcon className="self-center" />,
  },
  {
    id: 2,
    text: 'ساعت',
    icon: <AlphaFilterIcon className="self-center" />,
  },
  {
    id: 3,
    text: 'مدت پرواز',
    icon: <AlphaFilterIcon className="self-center" />,
  },
  {
    id: 4,
    text: 'تخفیف',
    icon: <AlphaFilterIcon className="self-center" />,
  },
];

export default function AlphaTopBar() {
  return (
    <div
      className="flex justify-between gap-3"
      style={{ direction: 'rtl' }}
    >
      <div className="w-3/5 cursor-pointer bg-white flex rounded-lg justify-between h-12 items-center">
        {filters.map(({ icon, id, text }, index) => (
          <div
            className={clsx('flex px-4 w-1/4 justify-center gap-2', {
              'border-r border-r-gray-300': index,
            })}
            key={id}
          >
            <p>{text}</p>
            {icon}
          </div>
        ))}
      </div>
      <div className="w-2/5 bg-white flex rounded-lg justify-between h-12 items-center px-2">
        <div className="cursor-pointer flex gap-2">
          <ChevronRight />
          <p>روز قبل</p>
        </div>
        <p className="font-medium text-sm">سه‌شنبه ۲۳ اردیبهشت</p>
        <div className="cursor-pointer flex gap-2">
          <p>روز بعد</p>
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}
