import { Button, Input, Modal, TextArea } from 'common';
import {
  ContactI,
  useAppWebInfoContext,
} from 'context/WebsiteInfoContext';
import { useState } from 'react';
import { Delete } from 'react-feather';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface ContactInfoI {
  contactInfo: ContactI;
  otherPhoneNumber: string;
}

export default function ContactSection() {
  const { setOtherPhoneNumber, contactInfo, setContactInfo } =
    useAppWebInfoContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { control, handleSubmit, watch } = useForm<ContactInfoI>({
    defaultValues: {
      contactInfo,
    },
  });

  const { otherPhoneNumber } = watch();
  console.log(
    '🚀 ~ file: ContactSections.tsx:28 ~ ContactSection ~ otherPhoneNumber:',
    otherPhoneNumber,
  );

  const onNumberAdd = () => {
    setOtherPhoneNumber(otherPhoneNumber);
    setModalIsOpen(false);
  };

  const onSave = (data: ContactInfoI) => {
    setContactInfo(data.contactInfo);
    toast.success('Contact save successful');
  };

  return (
    <form onSubmit={handleSubmit(onSave)}>
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
          <TextArea control={control} name="contactInfo.description" />
        </div>
      </div>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div>
          <div>
            <p className="text-center">Add another number</p>
            <Input
              type="number"
              control={control}
              name="otherPhoneNumber"
            />
            <Button
              containerClassName="mt-6"
              className="w-full h-8"
              color="success"
              onClick={onNumberAdd}
            >
              Add
            </Button>
          </div>
        </div>
      </Modal>
      <Button color="success" type="submit">
        Save
      </Button>
    </form>
  );
}
