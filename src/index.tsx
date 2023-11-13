import { ThemeProvider } from '@mui/material/styles';
import { AxiosError } from 'axios';
import {
  BodyContextContainer,
  ContextContainer,
  WebInfoContextContainer,
} from 'context';
import ThemeContext from 'context/ThemeContext';
import Cookies from 'js-cookie';
import ChangeStyleBox from 'pages/home/changeStyleBox/ChangeStyleBox';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Router from 'router';

import './assets/styles/index.css';
import theme from './assets/theme';
import './i18n';
import reportWebVitals from './reportWebVitals';

export interface MyErrorI {
  result: null;
  hasError: boolean;
  message: string;
  title: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onSettled: (data, err) => {
        const error = err as AxiosError;

        if (
          error?.response?.status === 401 &&
          !window.location.pathname.includes('/login')
        ) {
          Cookies.remove('userToken');
          window.location.href = './login';
        }
      },
    },
    mutations: {
      onSettled: (data, err) => {
        const error = err as AxiosError<MyErrorI>;

        if (error?.response?.data?.title) {
          toast.error(error?.response?.data?.title);
        } else {
          toast.error(error?.response?.data?.message);
        }

        if (
          error?.response?.status === 401 &&
          !window.location.pathname.includes('/login')
        ) {
          Cookies.remove('userToken');
          window.location.href = './login';
        }
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // <React.StrictMode>
  <BodyContextContainer>
    <ThemeContext>
      <ContextContainer>
        <WebInfoContextContainer>
          <QueryClientProvider client={queryClient}>
            <ToastContainer hideProgressBar position="top-center" />
            <ThemeProvider theme={theme}>
              <RouterProvider router={Router} />
            </ThemeProvider>
          </QueryClientProvider>
        </WebInfoContextContainer>
      </ContextContainer>
    </ThemeContext>
  </BodyContextContainer>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
