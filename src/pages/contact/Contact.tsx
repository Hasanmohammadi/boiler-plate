import { useAppThemeContext } from 'context/ThemeContext';

import AlphaContact from './alpha/AlphaContact';
import FinotixContact from './finotix/FinotixContact';

export default function Contact() {
  const { theme } = useAppThemeContext();

  return (
    <div>
      {theme === 'finotix' && <FinotixContact />}
      {theme === 'alpha' && <AlphaContact />}
    </div>
  );
}
