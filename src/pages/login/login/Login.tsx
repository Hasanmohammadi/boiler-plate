import { LinearLoadingPage } from 'common';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthCard from '../components/AuthCard';
import LoginStyledContainer from './login.style';

interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: { email: '', password: '' },
    // resolver: yupResolver(loginSchema),
  });

  // const { isLoading, loginAction } = usePostLogin();

  const onSubmit: SubmitHandler<LoginInputs> = ({ email, password }) => {
    // loginAction({
    //   languageId: '00000000-0000-0000-0000-000000000000',
    //   username: email,
    //   password,
    // });
  };

  useEffect(() => {
    if (Cookies.get('userToken')) {
      navigate('/');
    }
  }, [navigate]);

  if (Cookies.get('userToken')) {
    return <div> </div>;
  }

  const isLoading = false;
  return (
    <LoginStyledContainer>
      {isLoading && <LinearLoadingPage color="inherit" />}
      <AuthCard
        isLoading={isLoading}
        title="Login to your account"
        subTitle={
          <p>
            Welcome back!
            <br /> Please enter your email and password
          </p>
        }
        control={control}
        inputsLabel={{ first: 'Email', second: 'Password' }}
        inputsName={{ first: 'email', second: 'password' }}
        orangeText="Forgot Password"
        inputsPlaceholder={{
          first: 'Enter your email',
          second: 'Enter your password',
        }}
        btnText="Sign in"
        type="login"
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        inputsErrors={{
          first: errors.email?.message as string,
          second: errors.password?.message as string,
        }}
      />
    </LoginStyledContainer>
  );
}
