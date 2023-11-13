import { Box } from '@mui/material';
import Finotix from 'assets/image/Finotix.jpg';
import alpha from 'assets/image/alpha.png';
import { Modal, RadioButton } from 'common';
import { ThemeType, useAppThemeContext } from 'context/ThemeContext';
import { useState } from 'react';
import { Delete, XSquare } from 'react-feather';

export default function ThemeSection() {
  const { setTheme, theme } = useAppThemeContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pic, setPic] = useState('');

  const onRadioChange = (e: { target: { value: string } }) => {
    setTheme(e.target.value as ThemeType);
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
            defaultValue={theme}
            value={theme}
            radios={[
              {
                radioText: (
                  <Box
                    className="w-56 h-10"
                    onClick={() => {
                      setModalIsOpen(true);
                      setPic(Finotix);
                    }}
                  >
                    <img src={Finotix} alt="theme" />
                  </Box>
                ),
                value: 'finotix',
                className: 'w-full mt-8',
              },
              {
                radioText: (
                  <Box
                    className="w-56 h-10"
                    onClick={() => {
                      setModalIsOpen(true);
                      setPic(alpha);
                    }}
                  >
                    <img src={alpha} alt="theme" />
                  </Box>
                ),
                value: 'alpha',
                className: 'w-full mt-40',
              },
            ]}
          />
        </div>
      </div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <>
          <XSquare
            onClick={() => setModalIsOpen(false)}
            color="red"
            className="cursor-pointer"
          />
          <img src={pic} alt="theme" className="mt-4" />
        </>
      </Modal>
    </div>
  );
}
