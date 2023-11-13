/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useAppThemeContext } from './ThemeContext';

interface ContextI {
  paddingX: string;
  setPaddingX: (paddingX: string) => void;
  paddingY: string;
  setPaddingY: (paddingY: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  logoSize: number;
  setLogoSize: (size: number) => void;
  btns: BtnAndLinks[];
  setBtns: (btns: BtnAndLinks[]) => void;
}

const Context = createContext<ContextI>({
  paddingX: '',
  setPaddingX: (paddingX: string) => {},
  paddingY: '',
  setPaddingY: (paddingY: string) => {},
  bgColor: '',
  setBgColor: (color: string) => {},
  logoSize: 36,
  setLogoSize: (size: number) => {},
  btns: [
    {
      type: 'link',
      text: 'Contact us',
      hidden: true,
      value: 'Contact us',
    },
  ],
  setBtns: (btns: BtnAndLinks[]) => {},
});

interface HeaderContextPropsI {
  children: React.ReactElement;
}

export interface BtnAndLinks {
  type: 'link' | 'button';
  color?: string;
  size?: string | number;
  text: string;
  hidden: boolean;
  value: string;
}

export default function HeaderContext({ children }: HeaderContextPropsI) {
  const { siteDirection } = useAppThemeContext();

  const [componentName, setComponentName] = useState<string>('');
  const [paddingX, setPaddingX] = useState<string>('0');
  const [paddingY, setPaddingY] = useState<string>('0');
  const [bgColor, setBgColor] = useState<string>('#ec2222');
  const [logoSize, setLogoSize] = useState<number>(84);
  const [btns, setBtns] = useState<BtnAndLinks[]>([
    {
      type: 'link',
      text: 'About us',
      hidden: true,
      size: 14,
      color: '#000000',
      value: 'About us',
    },
    {
      type: 'link',
      text: 'Contact us',
      hidden: true,
      size: siteDirection === 'ltr' ? 14 : 40,
      color: '#000000',
      value: 'Contact us',
    },
    { type: 'button', text: 'Sign In', hidden: true, value: 'Sign In' },
  ]);

  useEffect(() => {
    setBtns([
      {
        type: 'link',
        text: siteDirection === 'ltr' ? 'About us' : 'درباره ما',
        hidden: true,
        size: 14,
        color: '#000000',
        value: 'About us',
      },
      {
        type: 'link',
        text: siteDirection === 'ltr' ? 'Contact us' : 'تماس با ما',
        hidden: true,
        size: 14,
        color: '#000000',
        value: 'Contact us',
      },
      {
        type: 'button',
        text: siteDirection === 'ltr' ? 'Sign In' : 'ورود',
        hidden: true,
        value: 'Sign In',
      },
    ]);
  }, [siteDirection]);

  const value = useMemo(
    () => ({
      componentName,
      setComponentName,
      paddingX,
      setPaddingX,
      paddingY,
      setPaddingY,
      bgColor,
      setBgColor,
      logoSize,
      setLogoSize,
      btns,
      setBtns,
    }),
    [bgColor, btns, componentName, logoSize, paddingX, paddingY],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppHeaderContext = () => useContext(Context);
