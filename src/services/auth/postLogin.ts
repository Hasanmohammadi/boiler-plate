import axios from 'axios';
import { AUTH_URLS } from 'constants/urls';
import { LoginDataI } from 'types/auth';

interface PostLoginArgsI {
  languageId: string;
  username: string;
  password: string;
}

const postLogin = async ({ password, username }: PostLoginArgsI) => {
  const response = await axios.post<LoginDataI>(AUTH_URLS.POST_LOGIN, {
    languageId: '00000000-0000-0000-0000-000000000000',
    username,
    password,
  });

  return response.data;
};

export default postLogin;
