/* eslint-disable react/jsx-props-no-spreading */
import { MenuItem } from '@mui/material';
import { Button, Input, Modal, Select } from 'common';
import { useAppWebInfoContext } from 'context';
import { ContactI, SiteColorsI } from 'context/WebsiteInfoContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SiteInformationFormI {
  siteName: string;
  siteUrl: string;
  siteColors: SiteColorsI;
  contactInfo: ContactI;
  otherPhoneNumber: string[];
  generalAbout: string;
  font: string;
}

export default function SiteInfoSections() {
  const {
    setOtherPhoneNumber,
    otherPhoneNumber,
    contactInfo,
    generalAbout,
    setContactInfo,
    setSiteColors,
    setSiteName,
    setSiteUrl,
    siteColors,
    siteName,
    siteUrl,
    font,
    setFont,
  } = useAppWebInfoContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [otherNumberInput, setOtherNumberInput] = useState<string>('');
  const [otherNumbers, setOtherNumbers] =
    useState<string>(otherPhoneNumber);

  const { control, handleSubmit, register } =
    useForm<SiteInformationFormI>({
      defaultValues: {
        contactInfo,
        generalAbout,
        siteColors,
        siteName,
        siteUrl,
        font,
      },
    });

  const otherNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherNumberInput(e.target.value);
  };

  const onNumberSave = () => {
    setOtherPhoneNumber(otherNumbers);
  };

  const onSubmit = (data: SiteInformationFormI) => {
    setSiteUrl(data.siteUrl);
    setSiteName(data.siteName);
    setSiteColors(data.siteColors);
    setContactInfo(data.contactInfo);
    setFont(data.font);
  };

  return (
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
        <div className="mt-6">
          <Select
            name="font"
            control={control}
            className="h-8 w-40"
            containerClassName="bg-white w-fit"
          >
            <MenuItem value="IRANSansX">Iran sans x</MenuItem>
            <MenuItem value="Peyda">Peyda</MenuItem>
          </Select>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <Button className="h-10" color="success" type="submit">
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
              color="success"
              onClick={onNumberSave}
            >
              Add
            </Button>
          </div>
        </div>
      </Modal>
    </form>
  );
}
