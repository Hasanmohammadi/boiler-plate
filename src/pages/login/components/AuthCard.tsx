import clsx from 'clsx';
import { Button, Input } from 'common';
import {
  Control,
  FieldValues,
  Path,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { Link } from 'react-router-dom';

export interface AuthCardPropsI<T extends FieldValues> {
  title?: string;
  subTitle?: string | React.ReactNode;
  control?: Control<T>;
  inputsName?: {
    first: Path<T>;
    second: Path<T>;
  };
  inputsLabel?: {
    first: string;
    second: string;
  };
  inputsPlaceholder?: {
    first: string;
    second: string;
  };
  inputsErrors?: {
    first: string;
    second: string;
  };
  orangeText?: string;
  btnText?: string;
  type: 'login' | 'forgotPassword';
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  isLoading?: boolean;
}

export default function AuthCard<T extends FieldValues>({
  subTitle,
  title,
  control,
  inputsName,
  inputsLabel,
  inputsPlaceholder,
  orangeText,
  btnText,
  type,
  handleSubmit,
  onSubmit,
  inputsErrors,
  isLoading,
}: AuthCardPropsI<T>) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="py-16 px-10 bg-gray-50 rounded-3xl gap-4 m-auto flex flex-col items-center shadow-[rgba(0, 0, 0, 0.24] shadow-xl"
    >
      <h1 className="text-gray-900 text-3xl font-semibold m-auto">
        {title}
      </h1>
      <p className="text-center text-gray-500 text-base font-normal m-auto">
        {subTitle}
      </p>
      <div className=" flex flex-col gap-10 mt-6 w-[360px]">
        <Input
          name={inputsName?.first as Path<T>}
          placeholder={inputsPlaceholder?.first}
          control={control as Control<T>}
          label={inputsLabel?.first}
          className="m-auto p-0 h-11 w-full"
          errorMessage={inputsErrors?.first}
        />
        <Input
          name={inputsName?.second as Path<T>}
          placeholder={inputsPlaceholder?.second}
          control={control as Control<T>}
          label={inputsLabel?.second}
          className={clsx('m-auto h-11 p-0 w-full ', {
            invisible: type === 'forgotPassword',
          })}
          errorMessage={inputsErrors?.second}
          type="password"
        />
        <div className="w-full flex flex-row-reverse">
          <Link
            to={type === 'login' ? '/forgot-password' : '/login'}
            className="text-sm font-semibold text-primary "
          >
            {orangeText}
          </Link>
        </div>
        <Button
          className="w-full py-3 flex flex-col-reverse"
          type="submit"
          loading={isLoading}
          color="secondary"
        >
          {btnText as string}
        </Button>
      </div>
    </form>
  );
}
