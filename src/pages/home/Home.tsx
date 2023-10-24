/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTranslation } from 'react-i18next';

import Body from './body/Body';
import ChangeStyleBox from './changeStyleBox/ChangeStyleBox';
import Header from './header/Header';

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).catch((err) => console.log(err));
  };
  return (
    <div
      className="min-w-screen w-full h-full min-h-screen relative mb-48"
      // style={{ direction: 'rtl' }}
    >
      {/* <header className="App-header">
        <p>{t('paragraph')}</p>
        <button className="btn" onClick={() => changeLanguage('en')}>
          english
        </button>
        <button className="btn" onClick={() => changeLanguage('hn')}>
          hindi
        </button>
        <button className="btn" onClick={() => changeLanguage('sp')}>
          spanish
        </button>
        <button className="btn" onClick={() => changeLanguage('fr')}>
          french
        </button>
      </header> */}
      <Header />
      <Body />
      <ChangeStyleBox />
    </div>
  );
}
