import { LinkAuth } from './LinkAuth';

describe('frontendFrameworkApolloClient', () => {
  const tokenName = 'token';
  const tokenValue = 'token';
  it('authorizationHeader should be from localStorage', () => {
    // todo: fake localStorage;
    localStorage.setItem(tokenName, tokenValue);
    const link = new LinkAuth({
      get token() {
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem(tokenName);
        return token && token !== 'undefined' ? token : '';
      },
    });
    expect(link.authorizationHeader).toEqual(link.bearer(tokenValue));
    localStorage.removeItem(tokenName);
  });
  it('authorizationHeader should be empty', () => {
    const link = new LinkAuth({
      token: '',
    });
    expect(link.authorizationHeader).toEqual('');
  });
  it('should work', () => {
    const link = new LinkAuth({
      token: tokenValue,
    });
    expect(link.authorizationHeader).toEqual(link.bearer(tokenValue));
  });
  it('apolloLink should work', () => {
    const link = new LinkAuth({
      token: tokenValue,
    });
    expect(link.apolloLink).toBeTruthy();
  });
});
