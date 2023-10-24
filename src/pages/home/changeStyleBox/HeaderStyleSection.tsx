/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useAppHeaderContext } from 'context';
import { BtnsI } from 'context/HeaderContext';
import { useEffect } from 'react';
import { PlusCircle, Trash2 } from 'react-feather';
import { useFieldArray, useForm } from 'react-hook-form';

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

  interface FormI {
    btns: BtnsI[];
  }
  const { control, watch, register } = useForm<FormI>({
    defaultValues: {
      btns: [
        {
          text: 'text',
          type: 'primary',
          link: '/text',
        },
      ],
    },
  });

  const { append, fields, remove } = useFieldArray<FormI>({
    name: 'btns',
    control,
  });
  const w = watch();

  useEffect(() => {
    setBtns(w.btns);
  }, [setBtns, w]);

  return (
    <div
      className="bg-gray-300 w-[94%] absolute top-0 mt-4"
      style={{ direction: 'ltr' }}
    >
      <div className="px-6">
        <div className="flex gap-2 mt-2">
          <span>Padding-X</span>
          <input
            className="border-2 border-red-500 rounded-lg w-14 text-center"
            type="number"
            onChange={onInputChange}
            name="padding-X"
            min={0}
            value={paddingX}
          />
          px
        </div>
        <div className="flex gap-2 mt-2">
          <span>Padding-Y</span>
          <input
            className="border-2 border-red-500 rounded-lg w-14 text-center"
            type="number"
            onChange={onInputChange}
            name="padding-Y"
            min={0}
            value={paddingY}
          />
          px
        </div>
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
      <div className="mt-2">
        <p className="text-center font-semibold text-gray-600">
          Upload logo
        </p>
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
          <select
            name="logoSize"
            className="h-6 border-2 border-red-500 rounded-lg "
            onChange={onSizeLogoChange}
            value={logoSize}
          >
            <option value={36}>36</option>
            <option value={48}>48</option>
            <option value={60}>60</option>
            <option value={72}>72</option>
            <option value={84}>84</option>
          </select>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex justify-center gap-2">
          <p className="text-center font-semibold text-gray-600">
            Buttons
          </p>
          <PlusCircle
            className="cursor-pointer"
            color="#EF4444"
            onClick={() =>
              fields.length < 3 &&
              append({
                text: '',
                link: '',
                type: 'primary',
              })
            }
          />
        </div>
        {fields.map(({ id }, index) => (
          <div key={id} className="flex gap-2 mt-2">
            {fields.length !== 1 && (
              <Trash2
                className="cursor-pointer"
                color="#EF4444"
                onClick={() => remove(index)}
              />
            )}

            <span>text</span>
            <input
              {...register(`btns.${index}.text` as const)}
              className="w-16 border-2 border-red-500 rounded-lg pl-1"
            />
            <span>link</span>
            <input
              {...register(`btns.${index}.link` as const)}
              className="w-16 border-2 border-red-500 rounded-lg pl-1"
            />
            <span>type</span>
            <select
              defaultValue="primary"
              {...register(`btns.${index}.type` as const)}
              className="h-6 border-2 border-red-500 rounded-lg"
            >
              <option value="primary">Primary</option>
              <option value="ghost">Ghost</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="error">Error</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
