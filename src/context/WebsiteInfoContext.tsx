/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useMemo, useState } from 'react';

interface ContextI {
  siteUrl: string;
  setSiteUrl: (siteUrl: string) => void;
  contactInfo: ContactI;
  setContactInfo: (contactInfo: ContactI) => void;
  siteColors: SiteColorsI;
  setSiteColors: (colors: SiteColorsI) => void;
  about: AboutI[];
  setAbout: (siteAbout: AboutI[]) => void;
}

interface HeaderContextPropsI {
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
});

export default function HeaderContext({ children }: HeaderContextPropsI) {
  const [siteName, setSiteName] = useState<string>('');
  const [siteUrl, setSiteUrl] = useState<string>('');
  const [siteColors, setSiteColors] = useState<SiteColorsI>({
    primary: '',
    secondary: '',
    tertiary: '',
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
    }),
    [siteName, siteUrl, contactInfo, siteColors, about],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useAppHeaderContext = () => useContext(Context);
