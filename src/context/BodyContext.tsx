/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useMemo, useState } from 'react';

interface ContextI {
  textPosition: 'center' | 'end' | 'start';
  setTextPosition: (position: 'center' | 'end' | 'start') => void;
  marginX: string;
  setMarginX: (paddingX: string) => void;
  marginY: string;
  setMarginY: (paddingY: string) => void;
  backgroundImage: string;
  setBackgroundImage: (backgroundImage: string) => void;
  titleColor: string;
  setTitleColor: (color: string) => void;
  subTitleColor: string;
  setSubTitleColor: (color: string) => void;
  title: string;
  setTitle: (text: string) => void;
  subTitle: string;
  setSubTitle: (text: string) => void;
  textAlgin: 'left' | 'right' | 'center';
  setTextAlign: (align: 'left' | 'right' | 'center') => void;
}

const Context = createContext<ContextI>({
  textPosition: 'start',
  setTextPosition: (position: 'center' | 'end' | 'start') => {},
  marginX: '',
  setMarginX: (paddingX: string) => {},
  marginY: '',
  setMarginY: (paddingY: string) => {},
  backgroundImage: '',
  setBackgroundImage: (backgroundImage: string) => {},
  titleColor: '',
  setTitleColor: (color: string) => {},
  subTitleColor: '',
  setSubTitleColor: (color: string) => {},
  title: '',
  setTitle: (text: string) => {},
  subTitle: '',
  setSubTitle: (color: string) => {},
  textAlgin: 'left',
  setTextAlign: (align: 'left' | 'right' | 'center') => {},
});

interface BodyContextPropsI {
  children: React.ReactElement;
}

export default function BodyContext({ children }: BodyContextPropsI) {
  const [textPosition, setTextPosition] = useState<
    'center' | 'end' | 'start'
  >('start');
  const [marginX, setMarginX] = useState<string>('0');
  const [marginY, setMarginY] = useState<string>('0');
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [titleColor, setTitleColor] = useState<string>('');
  const [subTitleColor, setSubTitleColor] = useState<string>('');
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [textAlgin, setTextAlign] = useState<'left' | 'right' | 'center'>(
    'left',
  );

  const value = useMemo(
    () => ({
      textPosition,
      setTextPosition,
      marginX,
      setMarginX,
      marginY,
      setMarginY,
      backgroundImage,
      setBackgroundImage,
      titleColor,
      setTitleColor,
      subTitleColor,
      setSubTitleColor,
      title,
      setTitle,
      subTitle,
      setSubTitle,
      textAlgin,
      setTextAlign,
    }),
    [
      backgroundImage,
      marginX,
      marginY,
      subTitle,
      subTitleColor,
      textAlgin,
      textPosition,
      title,
      titleColor,
    ],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppBodyContext = () => useContext(Context);
