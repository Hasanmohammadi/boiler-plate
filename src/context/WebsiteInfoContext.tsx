/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useMemo, useState } from 'react';

interface ContextI {
  siteName: string;
  setSiteName: (siteName: string) => void;
  siteUrl: string;
  setSiteUrl: (siteUrl: string) => void;
  contactInfo: ContactI;
  setContactInfo: (contactInfo: ContactI) => void;
  siteColors: SiteColorsI;
  setSiteColors: (colors: SiteColorsI) => void;
  about: AboutI[];
  setAbout: (siteAbout: AboutI[]) => void;
  generalAbout: string;
  setGeneralAbout: (generalAbout: string) => void;
  otherPhoneNumber: string;
  setOtherPhoneNumber: (otherPhoneNumber: string) => void;
}

interface WebInfoContextPropsI {
  children: React.ReactElement;
}

export interface ContactI {
  description: string;
  mainPhoneNumber: string;
  email: string;
  workingHours: string;
  address: string;
  otherPhoneNumber: string[];
}

export interface SiteColorsI {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface AboutI {
  title: string;
  description: string;
}

const Context = createContext<ContextI>({
  siteName: '',
  setSiteName: (siteName: string) => {},
  siteUrl: '',
  setSiteUrl: (siteUrl: string) => {},
  contactInfo: {
    description: '',
    mainPhoneNumber: '',
    email: '',
    workingHours: '',
    address: '',
    otherPhoneNumber: [''],
  },
  setContactInfo: (contactInfo: ContactI) => {},
  siteColors: { primary: '', secondary: '', tertiary: '' },
  setSiteColors: (siteUrl: SiteColorsI) => {},
  about: [{ description: '', title: '' }],
  setAbout: (siteUrl: AboutI[]) => {},
  generalAbout: '',
  setGeneralAbout: (generalAbout: string) => {},
  otherPhoneNumber: '',
  setOtherPhoneNumber: (otherPhoneNumber: string) => {},
});

export default function WebInfoContextContainer({
  children,
}: WebInfoContextPropsI) {
  const [siteName, setSiteName] = useState<string>('');
  const [siteUrl, setSiteUrl] = useState<string>('');
  const [generalAbout, setGeneralAbout] = useState<string>('');
  const [otherPhoneNumber, setOtherPhoneNumber] = useState<string>('');
  const [siteColors, setSiteColors] = useState<SiteColorsI>({
    primary: '#000000',
    secondary: '#000000',
    tertiary: '#000000',
  });

  const [contactInfo, setContactInfo] = useState<ContactI>({
    description: '',
    mainPhoneNumber: '',
    email: '',
    workingHours: '',
    address: '',
    otherPhoneNumber: [''],
  });

  const [about, setAbout] = useState<AboutI[]>([
    { description: '', title: '' },
  ]);

  const value = useMemo(
    () => ({
      siteName,
      setSiteName,
      siteUrl,
      setSiteUrl,
      contactInfo,
      setContactInfo,
      siteColors,
      setSiteColors,
      about,
      setAbout,
      generalAbout,
      setGeneralAbout,
      otherPhoneNumber,
      setOtherPhoneNumber,
    }),
    [
      siteName,
      siteUrl,
      contactInfo,
      siteColors,
      about,
      generalAbout,
      otherPhoneNumber,
    ],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppWebInfoContext = () => useContext(Context);
