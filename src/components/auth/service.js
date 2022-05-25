import client, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

export const login = ({ remember, ...credentials }) => {
  return client.post('/apiv1/login', credentials).then(({ token }) => {
    setAuthorizationHeader(token);
    if (remember === true) storage.set('auth', token);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
  });
};
