import axios from 'axios';
import { AUTH_URLS } from 'constants/urls';
import { LoginDataI } from 'types/auth';

interface PostResetPasswordArgsI {
  email: string;
}

const postResetPassword = async ({ email }: PostResetPasswordArgsI) => {
  const response = await axios.post<LoginDataI>(
    AUTH_URLS.POST_RESET_PASSWORD,
    {
      email,
    },
  );

  return response.data;
};

export default postResetPassword;
