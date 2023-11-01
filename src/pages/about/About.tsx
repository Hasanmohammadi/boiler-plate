import { Typography } from '@mui/material';
import { AirPlaneAboutUs } from 'assets/svg';
import { useAppWebInfoContext } from 'context/WebsiteInfoContext';
import { Header } from 'pages/home';

import AirplaneDashed from './AirplaneDashed';

export default function About() {
  const { about, generalAbout, siteColors } = useAppWebInfoContext();

  return (
    <>
      <Header />
      <div className="px-32 pb-12">
        <div className="px-32 flex pt-36">
          <div className="w-1/2">
            <Typography
              sx={{
                color: siteColors.primary,
                fontSize: '48px',
                fontWeight: '700',
              }}
            >
              About us
            </Typography>
            <p className="font-light text-2xl mt-6">{generalAbout}</p>
          </div>
          <div className="w-1/2 h-80 bg-black"> </div>
        </div>
        {about.map(({ description, title }, index) => (
          <div className="mt-20 border relative border-dashed border-gray-300 rounded-lg py-10 px-11">
            {title && (
              <Typography
                className="absolute -top-5 left-4 bg-white px-4"
                sx={{
                  color: siteColors.primary,
                  fontSize: '30px',
                  fontWeight: '500',
                }}
              >
                {title}:
              </Typography>
            )}
            {!index && (
              <div className="absolute -top-48 left-52">
                <AirPlaneAboutUs
                  className="absolute top-[52px]"
                  primaryColor={siteColors.primary}
                  secondaryColor={siteColors.secondary}
                />
                <AirplaneDashed />
              </div>
            )}
            {description && <p>{description}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
