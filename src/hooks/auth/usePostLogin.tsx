import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postLogin } from 'services/auth';
import { NullResultI } from 'types/common';

export default function usePostLogin() {
  const navigate = useNavigate();
  const { mutate: loginAction, isLoading } = useMutation(postLogin, {
    onSuccess: ({ result }) => {
      localStorage.setItem('userInfo', JSON.stringify(result));
      Cookies.set('userToken', result.token);
      localStorage.setItem('ExpirationOfDateToken', result.expiration);
      navigate('/');
    },
    onError(err) {
      const error = err as AxiosError<NullResultI>;
      toast.error(error.message, {
        position: 'top-center',
      });
    },
  });

  return { loginAction, isLoading };
}
