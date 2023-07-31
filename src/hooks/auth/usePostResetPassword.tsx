import { useMutation } from 'react-query';
import { postResetPassword } from 'services/auth';

interface UsePostResetPasswordArgsI {
  setPage: React.Dispatch<React.SetStateAction<'forgotPass' | 'success'>>;
}

export default function usePostResetPassword({
  setPage,
}: UsePostResetPasswordArgsI) {
  const { mutate: resetPasswordAction, isLoading } = useMutation(
    postResetPassword,
    {
      onSuccess: () => {
        setPage('success');
      },
    },
  );

  return { resetPasswordAction, isLoading };
}
