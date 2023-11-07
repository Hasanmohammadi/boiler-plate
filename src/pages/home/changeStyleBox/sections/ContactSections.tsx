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
  otherPhoneNumber: string[];
}

export default function ContactSection() {
  const {
    setOtherPhoneNumbers,
    otherPhoneNumbers,
    contactInfo,
    generalAbout,
    setContactInfo,
  } = useAppWebInfoContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [otherNumberInput, setOtherNumberInput] = useState<string>('');
  const [otherNumbers, setOtherNumbers] =
    useState<string[]>(otherPhoneNumbers);

  const { control, handleSubmit, register } = useForm<ContactInfoI>({
    defaultValues: {
      contactInfo,
    },
  });

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

  const onDeleteNumber = (number: string) => {
    const x = [...otherNumbers];
    const y = x.filter((n) => n !== number);
    setOtherNumbers(y);
  };

  const onNumberSave = () => {
    setOtherPhoneNumbers(otherNumbers);
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
        <div className="h-80">
          <div>
            <p>Add more number</p>
            <input
              value={otherNumberInput}
              onChange={otherNumberChange}
              className="h-8 mt-2 border-gray-300 border rounded-lg outline-none px-4"
              type="number"
            />
            <button
              className="w-full h-8"
              // containerClassName="mt-4"
              onClick={onNumberAdd}
            >
              Add
            </button>
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
            <button
              color="success"
              className="h-9"
              // containerClassName="mt-4 text-end"
              onClick={onNumberSave}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      <Button color="success" type="submit">
        Save
      </Button>
    </form>
  );
}
