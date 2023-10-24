/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

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
  btns: [{ type: 'link', text: 'Contact us', hidden: true }],
  setBtns: (btns: BtnAndLinks[]) => {},
});

interface HeaderContextPropsI {
  children: React.ReactElement;
}

export interface BtnAndLinks {
  type: 'link' | 'button';
  color?: string;
  size?: string;
  text: string;
  hidden: boolean;
}

export default function HeaderContext({ children }: HeaderContextPropsI) {
  const [componentName, setComponentName] = useState<string>('');
  const [paddingX, setPaddingX] = useState<string>('0');
  const [paddingY, setPaddingY] = useState<string>('0');
  const [bgColor, setBgColor] = useState<string>('');
  const [logoSize, setLogoSize] = useState<number>(36);
  const [btns, setBtns] = useState<BtnAndLinks[]>([
    { type: 'link', text: 'About us', hidden: true },
    { type: 'link', text: 'Contact us', hidden: true },
    { type: 'button', text: 'Sign In', hidden: true },
  ]);
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
