import { getway } from '@lead/data-access';
import { useEffect } from 'react';

export function AutoLogin() {
  const [login, { data, error, loading }] = getway.useLoginLazyQuery({
    variables: {
      user: {
        username: 'admin',
        email: 'admin@email.com',
        password: 'password',
      },
    },
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    console.log('data', data);
    if (
      !data &&
      !loading &&
      (localStorage.getItem('token') || '').length < 15
    ) {
      login();
    }
    if (data) {
      localStorage.setItem('token', data.login.token + '');
      // alert(data?.login.token);
    }
  }, [data]);
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }
  return <></>;
}
