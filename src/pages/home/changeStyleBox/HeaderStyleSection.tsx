/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MenuItem } from '@mui/material';
import { Button, Checkbox, Select } from 'common';
import { useAppHeaderContext } from 'context';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function HeaderStyleSection() {
  const {
    setPaddingX,
    setPaddingY,
    setBgColor,
    bgColor,
    paddingX,
    paddingY,
    setLogoSize,
    logoSize,
    setBtns,
    btns,
  } = useAppHeaderContext();
  console.log(
    '🚀 ~ file: HeaderStyleSection.tsx:35 ~ HeaderStyleSection ~ btns:',
    btns,
  );

  const onInputChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.target.name === 'padding-X') {
      setPaddingX(e.target.value);
    } else {
      setPaddingY(e.target.value);
    }
  };

  const onSizeLogoChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setLogoSize(e.target.value);
  };
  const onCheckBoxSelect = (text: string) => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === text) {
        return { ...item, hidden: false };
      }
      return item;
    });

    setBtns(newBtns);
  };

  const onUnCheckBoxSelect = (text: string) => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === text) {
        return { ...item, hidden: true };
      }
      return item;
    });

    setBtns(newBtns);
  };

  const { control, watch, register } = useForm({
    defaultValues: {
      btnSize: 'md',
      headerBgColor: '#ec2222',
      aboutUsSize: 14,
      contactUsSize: 14,
      aboutUsColor: '#ffffff',
      contactUsColor: '#ffffff',
    },
  });

  const {
    btnSize,
    aboutUsSize,
    contactUsSize,
    headerBgColor,
    aboutUsColor,
    contactUsColor,
  } = watch();

  useEffect(() => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.type === 'button') {
        return { ...item, size: btnSize };
      }
      return item;
    });

    setBtns(newBtns);
  }, [btnSize]);

  useEffect(() => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === 'Contact us') {
        return { ...item, size: contactUsSize };
      }
      return item;
    });

    setBtns(newBtns);
  }, [contactUsSize]);

  useEffect(() => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === 'About us') {
        return { ...item, color: aboutUsColor };
      }
      return item;
    });

    setBtns(newBtns);
  }, [aboutUsColor]);

  useEffect(() => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === 'Contact us') {
        return { ...item, color: contactUsColor };
      }
      return item;
    });

    setBtns(newBtns);
  }, [contactUsColor]);

  useEffect(() => {
    const x = [...btns];
    const newBtns = x.map((item) => {
      if (item.text === 'About us') {
        return { ...item, size: aboutUsSize };
      }
      return item;
    });

    setBtns(newBtns);
  }, [aboutUsSize]);

  useEffect(() => {
    setBgColor(headerBgColor);
  }, [headerBgColor]);

  return (
    <div
      className="bg-gray-300 w-[80%] absolute top-0 mt-4"
      style={{ direction: 'ltr' }}
    >
      <h1 className="text-center text-xl font-extrabold">Header</h1>
      <div className="px-2">
        <div className="border-b border-b-gray-50 py-4">
          <div className="flex gap-2 mt-2">
            <span>Padding-X</span>
            <input
              className="border-2 border-red-500 rounded-lg w-14 text-center"
              type="number"
              min={0}
              onChange={onInputChange}
              name="padding-X"
              value={paddingX}
            />
            px
          </div>
          <div className="flex gap-2 mt-2">
            <span>Padding-Y</span>
            <input
              className="border-2 border-red-500 rounded-lg w-14 text-center"
              type="number"
              min={0}
              onChange={onInputChange}
              name="padding-Y"
              value={paddingY}
            />
            px
          </div>
        </div>
        <div className="border-b border-b-gray-50 py-4">
          <div className="flex gap-2 mt-2">
            <label htmlFor="favcolor">
              Background color{' '}
              <input
                type="color"
                {...register('headerBgColor')}
                className="rounded-lg"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-50 py-4">
        <div>
          <p className=" font-semibold text-gray-600">Logo</p>
          <form className="mt-2 flex flex-col w-56">
            <input
              type="file"
              id="myFile"
              name="filename"
              className="border-2 border-red-500 rounded-lg"
              onChange={(file) => console.log(file)}
            />
          </form>
          <div className="flex gap-2 mt-4">
            <p>Logo Size</p>
            <input
              id="myFile"
              name="filename"
              className="border-2 border-red-500 rounded-lg w-14 text-center"
              onChange={onSizeLogoChange}
              type="number"
              min={0}
              defaultValue={logoSize}
            />
            px
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-50 py-4">
        <div className="flex justify-center gap-2">
          <p className="text-center font-semibold text-gray-600">
            Buttons & Links
          </p>
        </div>

        <div className="mt-2 pt-2">
          <div className="flex items-center w-full justify-between mt-2 gap-2">
            <Checkbox
              className="w-1 border-none p-0"
              onChecked={() => onCheckBoxSelect('Sign In')}
              onUnChecked={() => onUnCheckBoxSelect('Sign In')}
              checked={
                !btns.find(({ text }) => text === 'Sign In')?.hidden
              }
            />
            <Button className="h-8">Sign In</Button>
            <div className="flex gap-1">
              <span className="self-center">Size:</span>
              <Select
                control={control}
                name="btnSize"
                className="h-8 w-28 bg-white"
              >
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
              </Select>
            </div>
          </div>
          <div className="flex items-center w-full justify-between mt-2">
            <Checkbox
              className="w-1 border-none p-0"
              onChecked={() => onCheckBoxSelect('Contact us')}
              onUnChecked={() => onUnCheckBoxSelect('Contact us')}
              checked={
                !btns.find(({ text }) => text === 'Contact us')?.hidden
              }
            />
            <p>Contact us</p>
            <div className="flex gap-1">
              <span className="self-center">Size:</span>
              <input
                className="border-2 border-red-500 rounded-lg w-14 text-center"
                type="number"
                min={0}
                {...register('contactUsSize')}
                value={
                  btns.find(({ text }) => text === 'Contact us')?.size
                }
              />
              px
            </div>
            <input
              type="color"
              {...register('contactUsColor')}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center w-full justify-between mt-2">
            <Checkbox
              className="w-1 border-none p-0"
              onChecked={() => onCheckBoxSelect('About us')}
              onUnChecked={() => onUnCheckBoxSelect('About us')}
              checked={
                !btns.find(({ text }) => text === 'About us')?.hidden
              }
            />
            <p>About us</p>
            <div className="flex gap-1">
              <span className="self-center">Size:</span>
              <input
                className="border-2 border-red-500 rounded-lg w-14 text-center"
                type="number"
                min={0}
                value={btns.find(({ text }) => text === 'About us')?.size}
                {...register('aboutUsSize')}
              />
              px
            </div>
            <input
              type="color"
              {...register('aboutUsColor')}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
