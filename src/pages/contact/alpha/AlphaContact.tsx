import { Box } from '@mui/material';
import { Button, Input, TextArea } from 'common';
import { useAppWebInfoContext } from 'context';
import { useForm } from 'react-hook-form';

export default function AlphaContact() {
  const { contactInfo, siteColors, otherPhoneNumber } =
    useAppWebInfoContext();

  const { control } = useForm();

  return (
    <Box className="w-full h-full py-14 px-40 " sx={{ direction: 'rtl' }}>
      <p className="text-xl font-medium">تماس با ما</p>
      <div className="p-8 rounded-lg bg-white mt-8 shadow-md flex flex-col gap-10">
        <div>
          <p>پشتیبانی : {contactInfo.workingHours}</p>
        </div>
        <div>
          <p>آدرس : {contactInfo.address}</p>
        </div>
        <div>
          <p>ایمیل : {contactInfo.email}</p>
        </div>
        <div>
          <p>
            شماره تلفن : {contactInfo.mainPhoneNumber}{' '}
            {otherPhoneNumber && ` - ${otherPhoneNumber}`}
          </p>
        </div>
        <div>{contactInfo.description}</div>
        <hr className="border-t-2 border-t-gray-200 border-dashed" />
        <div>
          <div className="flex justify-between gap-10">
            <Input
              control={control}
              name="name"
              label="نام"
              className="w-1/2 h-9"
            />
            <Input
              control={control}
              name="email"
              label="ایمیل"
              className="w-1/2 h-9"
            />
          </div>
          <div>
            <TextArea
              control={control}
              name="message"
              label="پیام"
              className="mt-10 h-28"
            />
          </div>
          <div className="flex justify-end">
            <Button
              primaryColor={siteColors.primary}
              containerClassName="mt-16"
              className="w-64"
            >
              ارسال
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
