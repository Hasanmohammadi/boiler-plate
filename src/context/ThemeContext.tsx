import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type ThemeType = 'finotix' | 'alpha';
interface ContextI {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  siteDirection: 'ltr' | 'rtl';
  setSiteDirection: (siteDirection: 'ltr' | 'rtl') => void;
}

const Context = createContext<ContextI>({
  theme: 'finotix',
  setTheme: (theme: ThemeType) => {},
  siteDirection: 'ltr',
  setSiteDirection: (siteDirection: 'ltr' | 'rtl') => {},
});

interface ThemeContextPropsI {
  children: React.ReactElement;
}

export default function ThemeContext({ children }: ThemeContextPropsI) {
  const [theme, setTheme] = useState<ThemeType>('finotix');
  const [siteDirection, setSiteDirection] = useState<'ltr' | 'rtl'>('rtl');

  useEffect(() => {
    if (theme === 'alpha') {
      setSiteDirection('rtl');
    } else {
      setSiteDirection('ltr');
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      siteDirection,
      setSiteDirection,
    }),
    [theme, siteDirection],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppThemeContext = () => useContext(Context);
