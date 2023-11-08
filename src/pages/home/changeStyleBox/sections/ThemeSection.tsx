import Finotix from 'assets/image/Finotix.jpg';
import { RadioButton } from 'common';
import { useAppThemeContext } from 'context/ThemeContext';

export default function ThemeSection() {
  const { setTheme } = useAppThemeContext();

  const onRadioChange = (e: { target: { value: string } }) => {
    setTheme(e.target.value);
  };

  return (
    <div className="py-4">
      <h1 className="w-full text-center justify-between">
        Select your theme
      </h1>
      <div>
        <div className="mt-6">
          <RadioButton
            onChange={onRadioChange}
            radios={[
              {
                radioText: (
                  <div className="w-56 h-10 bg-black">
                    <img src={Finotix} alt="theme" />
                  </div>
                ),
                value: 'finotix',
                className: 'w-full mt-8',
              },
              {
                radioText: <div className="w-56 h-10 bg-black"> ads</div>,
                value: 'alpha',
                className: 'w-full mt-40',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
