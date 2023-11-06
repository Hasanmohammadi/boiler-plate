/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextArea } from 'common';
import { useAppWebInfoContext } from 'context';
import { AboutI } from 'context/WebsiteInfoContext';
import { PlusCircle, Trash } from 'react-feather';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface SiteAboutI {
  about: AboutI[];
  otherPhoneNumber: string[];
  generalAbout: string;
}

export default function AboutStyleSection() {
  const { about, generalAbout, setAbout, setGeneralAbout } =
    useAppWebInfoContext();

  const { control, handleSubmit, register } = useForm<SiteAboutI>({
    defaultValues: {
      about,
      generalAbout,
    },
  });

  const { append, fields, remove } = useFieldArray<SiteAboutI>({
    control,
    name: 'about',
  });

  const onSave = (data: SiteAboutI) => {
    setAbout(data.about);
    setGeneralAbout(data.generalAbout);
    toast.success('About save successful');
  };

  return (
    <form onSubmit={handleSubmit(onSave)} className="mt-2 pb-8">
      <div className="w-full flex justify-end">
        <Button color="success" className="h-10" type="submit">
          Save
        </Button>
      </div>
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
    </form>
  );
}
