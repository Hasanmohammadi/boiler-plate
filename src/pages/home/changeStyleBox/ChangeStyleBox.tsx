import Box from '@mui/material/Box';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { useSearchParams } from 'react-router-dom';

import BodyStyleSection from './BodyStyleSection';
import HeaderStyleSection from './HeaderStyleSection';

const sidBarItems = [
  { text: 'Header', value: 'header', id: 0 },
  { text: 'Body', value: 'body', id: 1 },
];

export default function ChangeStyleBox() {
  const [containerWidth, setContainerWidth] = useState('0%');
  const [searchParams, setSearchParams] = useSearchParams();

  const onMinimize = () => {
    if (containerWidth === '30%') {
      setContainerWidth('0%');
    } else {
      setContainerWidth('30%');
    }
  };

  useEffect(() => {
    if (!searchParams.get('section')) {
      searchParams.append('section', 'header');
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <div
      className="bg-gray-100 border-2 border-gray-800 w-1/5 h-full min-h-screen fixed right-0 top-0 flex"
      style={{
        transition: 'width 0.5s',
        width: containerWidth,
      }}
    >
      <button
        className="absolute  bg-white rounded-lg z-10 -left-9 p-2 border-2 border-red-500 w-fit top-56"
        onClick={onMinimize}
      >
        {containerWidth === '30%' ? <ArrowRight /> : <ArrowLeft />}
      </button>

      <div className="flex w-5/6 px-4">
        <Box>
          {searchParams.get('section') === 'header' && (
            <HeaderStyleSection />
          )}
          {searchParams.get('section') === 'body' && <BodyStyleSection />}
        </Box>
      </div>
      <div className="h-full bg-blue-900-700 w-1/6 text-center bg-gray-800">
        {sidBarItems.map(({ id, text, value }) => (
          <Box
            key={id}
            className={clsx(
              'text-white py-3 border-b-2 border-b-white cursor-pointer',
              {
                'text-blue-400  border-b-blue-400':
                  searchParams.get('section') === value,
              },
            )}
            onClick={() => {
              searchParams.delete('section');
              searchParams.append('section', value);
              setSearchParams(searchParams);
            }}
          >
            {text}
          </Box>
        ))}
      </div>
    </div>
  );
}
