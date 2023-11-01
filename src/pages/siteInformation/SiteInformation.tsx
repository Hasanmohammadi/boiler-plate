/* eslint-disable react/jsx-props-no-spreading */
import { Button, Input, Modal, TextArea } from 'common';
import { useAppWebInfoContext } from 'context';
import { AboutI, ContactI, SiteColorsI } from 'context/WebsiteInfoContext';
import { useEffect, useState } from 'react';
import { Delete, PlusCircle, Trash } from 'react-feather';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface SiteInformationFormI {
  siteName: string;
  siteUrl: string;
  siteColors: SiteColorsI;
  contactInfo: ContactI;
  about: AboutI[];
  otherPhoneNumber: string[];
  generalAbout: string;
}

export default function SiteInformation() {
  const {
    setOtherPhoneNumbers,
    otherPhoneNumbers,
    about,
    contactInfo,
    generalAbout,
    setAbout,
    setContactInfo,
    setGeneralAbout,
    setSiteColors,
    setSiteName,
    setSiteUrl,
    siteColors,
    siteName,
    siteUrl,
  } = useAppWebInfoContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [otherNumberInput, setOtherNumberInput] = useState<string>('');
  const [otherNumbers, setOtherNumbers] =
    useState<string[]>(otherPhoneNumbers);

  const { control, handleSubmit, register } =
    useForm<SiteInformationFormI>({
      defaultValues: {
        about,
        contactInfo,
        generalAbout,
        siteColors,
        siteName,
        siteUrl,
      },
    });

  const { append, fields, remove } = useFieldArray<SiteInformationFormI>({
    control,
    name: 'about',
  });

  useEffect(() => {
    append({ description: '', title: '' });
  }, []);

  const otherNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherNumberInput(e.target.value);
  };

  const onNumberAdd = () => {
    if (otherNumbers.length <= 3) {
      if (!otherNumbers.includes(otherNumberInput)) {
        const x = [...otherNumbers];
        x.push(otherNumberInput);
        setOtherNumbers(x);
        setOtherNumberInput('');
      } else {
        toast.error('This number already existed');
      }
    } else {
      toast.warning('You can only add three phone numbers');
    }
  };

  const onNumberSave = () => {
    setOtherPhoneNumbers(otherNumbers);
  };

  const onDeleteNumber = (number: string) => {
    const x = [...otherNumbers];
    const y = x.filter((n) => n !== number);
    setOtherNumbers(y);
  };

  const onSubmit = (data: SiteInformationFormI) => {
    setSiteUrl(data.siteUrl);
    setSiteName(data.siteName);
    setSiteColors(data.siteColors);
    setGeneralAbout(data.generalAbout);
    setContactInfo(data.contactInfo);
    setAbout(data.about);
  };

  return (
    <div className="flex flex-row bg-cyan-900 h-full min-h-screen">
      <div className="m-auto py-4 bg-white rounded-lg px-6 mt-6">
        <h1 className="font-bold text-4xl text-center">
          Site Information
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="border border-gray-300 rounded-lg px-4 py-6 ">
            <div className="flex gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="font-light text-sm">Site Name</span>
                <Input className="h-8" control={control} name="siteName" />
              </div>
              <div>
                <span className="font-light text-sm">Site Url</span>
                <Input className="h-8" control={control} name="siteUrl" />
              </div>
            </div>
            <div className="mt-2 border-b border-gray-200 pb-2">
              <p className="font-medium text-lg">Website Color:</p>
              <div className="flex gap-4 justify-between mt-2">
                <div>
                  <span className="text-xs">Primary Color: </span>
                  <input
                    type="color"
                    {...register('siteColors.primary')}
                    className="bg-[unset] h-5"
                  />
                </div>
                <div>
                  <span className="text-xs">Secondary Color: </span>
                  <input
                    type="color"
                    {...register('siteColors.secondary')}
                    className="bg-[unset] h-5"
                  />
                </div>
                <div>
                  <span className="text-xs">Tertiary Color: </span>
                  <input
                    type="color"
                    {...register('siteColors.tertiary')}
                    className="bg-[unset] h-5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 border-b border-gray-200 pb-2">
              <p className="font-medium text-lg">Contact</p>
              <div className="flex gap-4 mt-0.5">
                <div>
                  <p className="text-xs">
                    Phone Number{' '}
                    <span
                      className="text-blue-600 cursor-pointer hover:text-blue-400"
                      onClick={() => setModalIsOpen(true)}
                      role="presentation"
                    >
                      (Add more phone number)
                    </span>
                  </p>
                  <Input
                    control={control}
                    className="h-8"
                    name="contactInfo.mainPhoneNumber"
                  />
                </div>
                <div>
                  <p className="text-xs">Email</p>
                  <Input
                    control={control}
                    className="h-8"
                    name="contactInfo.email"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-0.5">
                <div>
                  <span className="text-xs">Working Hours</span>
                  <Input
                    control={control}
                    className="h-8"
                    name="contactInfo.workingHours"
                  />
                </div>
                <div>
                  <span className="text-xs">Address</span>
                  <Input
                    control={control}
                    className="h-8"
                    name="contactInfo.address"
                  />
                </div>
              </div>
              <div className="mt-0.5">
                <span className="text-xs">Description</span>
                <TextArea
                  control={control}
                  name="contactInfo.description"
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-medium text-lg">General About:</p>
              <TextArea control={control} name="generalAbout" />
              <div className="flex gap-2 place-items-center mt-4">
                <p className="font-medium text-lg">Detail About</p>
                <PlusCircle
                  className="cursor-pointer"
                  color="green"
                  size={20}
                  onClick={() => append({ description: '', title: '' })}
                />
              </div>
              {fields.map(({ description, id, title }, index) => (
                <div key={id} className="w-full mt-2">
                  <div className="mt-2">
                    <p className="text-xs">Title</p>
                    <div className="flex gap-4 place-items-center">
                      <input
                        className="h-8 mt-1 border-gray-300 border rounded-lg outline-none px-4"
                        {...register(`about.${index}.title`)}
                      />
                      {!!index && (
                        <Trash
                          size={16}
                          className="cursor-pointer"
                          onClick={() => remove(index)}
                          color="red"
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs">Description</p>
                    <textarea
                      className="mt-1 border-gray-300 border rounded-lg w-full outline-none px-4 py-2"
                      {...register(`about.${index}.description`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <Button color="success" type="submit">
              Save
            </Button>
          </div>
          <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
            <div className="h-80">
              <div>
                <p>Add more number</p>
                <input
                  value={otherNumberInput}
                  onChange={otherNumberChange}
                  className="h-8 mt-2 border-gray-300 border rounded-lg outline-none px-4"
                  type="number"
                />
                <Button
                  className="w-full h-8"
                  containerClassName="mt-4"
                  onClick={onNumberAdd}
                >
                  Add
                </Button>
              </div>
              <div className="mt-4">
                {otherNumbers.map(
                  (number) =>
                    !!number && (
                      <div className="border border-gray-300 my-2 px-2 py-1 rounded-lg flex justify-between">
                        <p>{number}</p>
                        <Delete
                          className="cursor-pointer self-center"
                          color="red"
                          size={18}
                          onClick={() => onDeleteNumber(number)}
                        />
                      </div>
                    ),
                )}
              </div>
              <div>
                <Button
                  color="success"
                  className="h-9"
                  containerClassName="mt-4 text-end"
                  onClick={onNumberSave}
                >
                  Save
                </Button>
              </div>
            </div>
          </Modal>
        </form>
      </div>
    </div>
  );
}
