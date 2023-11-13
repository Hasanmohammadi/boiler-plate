import clsx from 'clsx';
import { useAppWebInfoContext } from 'context';
import { MouseEvent, useState } from 'react';

const otherFilters = [
  'Earliest take-off',
  'Earliest landing',
  'Latest landing',
  'Latest take-off',
  'Highest price',
  'Slowest',
];

function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('');
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex  rounded-lg bg-white justify-between h-12">
      <button
        onClick={() => setActiveFilter('Best')}
        className={clsx(
          'text-center w-1/4 border-r border-r-gray-300 h-full',
          {
            'border-b-2 border-b-red-600 rounded-bl-lg':
              activeFilter === 'Best',
          },
        )}
      >
        Best
      </button>
      <button
        onClick={() => setActiveFilter('Cheapest')}
        className={clsx(
          'text-center w-1/4 border-r border-r-gray-300 h-full',
          {
            'border-b-2 border-b-red-600': activeFilter === 'Cheapest',
          },
        )}
      >
        Cheapest
      </button>
      <button
        onClick={() => setActiveFilter('Quickest')}
        className={clsx(
          'text-center w-1/4 border-r border-r-gray-300 h-full',
          {
            'border-b-2 border-b-red-600': activeFilter === 'Quickest',
          },
        )}
      >
        Quickest
      </button>
      <button
        onClick={() => setActiveFilter('Quickest')}
        className="text-center w-1/4"
      >
        Quickest
      </button>
    </div>
  );
}

export default TopBar;
