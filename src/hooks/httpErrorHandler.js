import { useState, useEffect } from 'react';

export default (httpClient) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const reqInterceptor = httpClient.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const resInterceptor = httpClient.interceptors.response.use(
      (res) => res?.data,
      (err) => {
        setError({
          message: err.message,
          severity: 'error',
          variant: 'filled',
        });
      },
    );

    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    };
  }, [httpClient.interceptors.request, httpClient.interceptors.response]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
