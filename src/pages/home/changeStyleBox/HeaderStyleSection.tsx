/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Button, Checkbox } from 'common';
import { useAppHeaderContext } from 'context';

export default function HeaderStyleSection() {
  const {
    setPaddingX,
    setPaddingY,
    setBgColor,
    bgColor,
    paddingX,
    paddingY,
    setLogoSize,
    setBtns,
    btns,
  } = useAppHeaderContext();

  const onInputChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.target.name === 'padding-X') {
      setPaddingX(e.target.value);
    } else {
      setPaddingY(e.target.value);
    }
  };

  const onColorChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setBgColor(e.target.value);
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
    console.log(
      '🚀 ~ file: HeaderStyleSection.tsx:72 ~ newBtns ~ newBtns:',
      newBtns,
    );

    setBtns(newBtns);
  };

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
            <span>Background color</span>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={bgColor}
              onChange={onColorChange}
              className="rounded-lg"
            />
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

        <div className="mt-2">
          <div className="flex items-center">
            <Checkbox
              className="border-none p-0"
              onChecked={() => onCheckBoxSelect('Sign In')}
              onUnChecked={() => onUnCheckBoxSelect('Sign In')}
            />
            <Button>Sign In</Button>
          </div>
          <div className="flex items-center">
            <Checkbox
              className="border-none p-0"
              onChecked={() => onCheckBoxSelect('Contact us')}
              onUnChecked={() => onUnCheckBoxSelect('Contact us')}
            />
            <p>Contact us</p>
          </div>
          <div className="flex items-center">
            <Checkbox
              className="border-none p-0"
              onChecked={() => onCheckBoxSelect('About us')}
              onUnChecked={() => onUnCheckBoxSelect('About us')}
            />
            <p>About us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
