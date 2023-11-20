import Box from '@mui/material/Box';
import clsx from 'clsx';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { useLocation, useNavigate } from 'react-router-dom';

import AboutStyleSection from './sections/AboutStyleSection';
import BodyStyleSection from './sections/BodyStyleSection';
import ContactSection from './sections/ContactSections';
import HeaderStyleSection from './sections/HeaderStyleSection';
import SiteInfoSections from './sections/SiteInfoSections';
import ThemeSection from './sections/ThemeSection';

const sidBarItems = [
  { text: 'Header', value: 'header', id: 0, url: '?section=header' },
  {
    text: 'Main page',
    value: 'main-page',
    id: 1,
    url: '/main-page',
  },
  { text: 'About', value: 'about-us', id: 2, url: '/about-us' },
  { text: 'Contact', value: 'contact-us', id: 3, url: '/contact-us' },
  { text: 'Site info', value: 'site-info', id: 4, url: '/site-info' },
  { text: 'Theme', value: 'theme', id: 5, url: '#' },
  { text: 'Result page', value: 'result-page', id: 6, url: '/result' },
];

export default function ChangeStyleBox() {
  const [containerWidth, setContainerWidth] = useState('0%');
  const { pathname } = useLocation();
  const [itemSelected, setItemSelected] = useState('');

  const navigate = useNavigate();

  const onMinimize = () => {
    if (containerWidth === '30%') {
      setContainerWidth('0%');
    } else {
      setContainerWidth('30%');
    }
  };

  return (
    <div
      className="bg-gray-100 border-2 border-gray-800 w-1/5 h-full min-h-screen fixed right-0 top-0 flex z-20"
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

      <div className="flex w-5/6 px-4 overflow-auto">
        <div className="w-full">
          {itemSelected === 'header' && <HeaderStyleSection />}
          {itemSelected === 'main-page' && <BodyStyleSection />}
          {pathname === '/about-us' && itemSelected === 'about-us' && (
            <AboutStyleSection />
          )}
          {itemSelected === 'site-info' && <SiteInfoSections />}
          {itemSelected === 'contact-us' && <ContactSection />}
          {itemSelected === 'theme' && <ThemeSection />}
        </div>
      </div>
      <div className="h-full bg-blue-900-700 w-1/5 text-center bg-gray-800 z-10">
        {sidBarItems.map(({ id, text, value, url }) => (
          <Box
            key={id}
            className={clsx(
              'text-white py-3 border-b-2 border-b-white cursor-pointer',
              {
                'text-blue-400  border-b-blue-400': itemSelected === value,
              },
            )}
            onClick={() => {
              if (value !== 'site-info') {
                navigate(url);
              }
              setItemSelected(value);
            }}
          >
            {text}
          </Box>
        ))}
      </div>
    </div>
  );
}
