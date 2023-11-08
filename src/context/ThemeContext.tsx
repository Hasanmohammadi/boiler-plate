import { createContext, useContext, useMemo, useState } from 'react';

interface ContextI {
  theme: string;
  setTheme: (theme: string) => void;
}

const Context = createContext<ContextI>({
  theme: '',
  setTheme: (theme: string) => {},
});

interface ThemeContextPropsI {
  children: React.ReactElement;
}

export default function ThemeContext({ children }: ThemeContextPropsI) {
  const [theme, setTheme] = useState<string>('');

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppThemeContext = () => useContext(Context);
