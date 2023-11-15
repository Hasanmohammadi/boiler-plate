import { useAppThemeContext } from 'context/ThemeContext';

import AlphaAbout from './alpha/AlphaAbout';
import FinotixAbout from './finotix/FinotixAbout';

export default function About() {
  const { theme } = useAppThemeContext();
  return (
    <div>
      {theme === 'finotix' && <FinotixAbout />}
      {theme === 'alpha' && <AlphaAbout />}
    </div>
  );
}
