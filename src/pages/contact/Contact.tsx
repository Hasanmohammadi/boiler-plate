import { Typography } from '@mui/material';
import { Button, Input, TextArea } from 'common';
import { useAppWebInfoContext } from 'context';
import { useForm } from 'react-hook-form';

interface ContactFormI {
  name: string;
  email: string;
  message: string;
}
export default function Contact() {
  const { contactInfo, siteColors, otherPhoneNumber } =
    useAppWebInfoContext();
  console.log(
    '🚀 ~ file: Contact.tsx:13 ~ Contact ~ otherPhoneNumber:',
    otherPhoneNumber,
  );
  const { control } = useForm<ContactFormI>();

  return (
    <div className="mt-16 px-36 flex">
      <div className="w-1/2">
        <div>
          <Typography
            sx={{
              color: siteColors.primary,
              fontSize: '20px',
              fontWeight: '700',
            }}
          >
            CONTACT US
          </Typography>
          <p className="text-lg font-normal mt-5">
            {contactInfo.description}
          </p>
        </div>
        <div className="mt-20 flex flex-col gap-11">
          <p className="font-semibold">
            Phone:
            <span className="font-normal text-gray-400 ml-3">
              {contactInfo.mainPhoneNumber}{' '}
              {otherPhoneNumber && `- ${otherPhoneNumber}`}
            </span>
          </p>
          <p className="font-semibold">
            Email Address:
            <span className="font-normal text-gray-400 ml-3">
              {contactInfo.email}
            </span>
          </p>
          <p className="font-semibold">
            Working Hours:
            <span className="font-normal text-gray-400 ml-3">
              {contactInfo.workingHours}
            </span>
          </p>
          <p className="font-semibold">
            Address:
            <span className="font-normal text-gray-400 ml-3">
              {contactInfo.address}
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-4/5 rounded-lg py-8 px-6 bg-gray-100 flex flex-col gap-2 m-auto">
          <Input
            placeholder="Your Name"
            control={control}
            name="name"
            className="h-14"
            hasBorder={false}
          />
          <Input
            placeholder="Your Email Address"
            control={control}
            name="email"
            className="h-14"
            hasBorder={false}
          />
          <TextArea
            placeholder="Your message here"
            control={control}
            name="message"
            className="h-52"
            hasBorder={false}
          />
          <Button
            type="submit"
            className="w-full"
            containerClassName="mt-6"
            primaryColor={siteColors.primary}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
