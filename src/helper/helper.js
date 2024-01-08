const LOGIN_SESSION = 'login_session';

export const setLoginSession = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOGIN_SESSION, JSON.stringify(data));
  }
};

export const getLoginSession = () => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(LOGIN_SESSION);
    return storedData ? JSON.parse(storedData) : null;
  }
  return null;
};

export const removeLoginSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(LOGIN_SESSION);
  }
};
