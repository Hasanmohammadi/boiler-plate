import { AirPlaneAboutUs } from 'assets/svg';
import { useAppWebInfoContext } from 'context/WebsiteInfoContext';
import { Header } from 'pages/home';

import AirplaneDashed from './AirplaneDashed';

export default function About() {
  const { about, generalAbout } = useAppWebInfoContext();

  return (
    <>
      <Header />
      <div className="px-32 pb-12">
        <div className="px-32 flex pt-36">
          <div className="w-1/2">
            <p className="font-bold text-5xl text-red-500">About us</p>
            <p className="font-light text-2xl mt-14">{generalAbout}</p>
          </div>
          <div className="w-1/2 h-80 bg-black"> </div>
        </div>
        {about.map(({ description, title }) => (
          <div className="mt-20 border relative border-dashed border-gray-300 rounded-lg py-10 px-11">
            <span className="absolute -top-5 left-4 bg-white px-4 text-red-500 font-medium text-3xl">
              {title}:
            </span>
            <div className="absolute -top-48 left-52">
              <AirPlaneAboutUs className="absolute top-[52px]" />
              <AirplaneDashed />
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
