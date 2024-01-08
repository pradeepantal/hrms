import { useState } from 'react';
import ApiRequestComponent from '../networks/ApiRequestComponent';
import { useRouter } from 'next/router';
import { setLoginSession } from '@/helper/helper';

export default function LoginValidationComponents() {
  const apiComponent = ApiRequestComponent();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const router = useRouter();

  const redirectToHome = () => {
    router.push('/leave');
  };

  const validateForm = async () => {
    const newErrors = {};

    switch (true) {

      case !username && !password:
        newErrors.username = 'Username is required.';
        break;
      case !password:
        newErrors.password = 'Password is required.';
        break;
      case password.length < 6:
        newErrors.password = 'Password must be at least 6 characters.';
        break;
      default:
        break;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const apiResponse = await apiComponent.makeApiRequest(username, password);
        if (apiResponse?.message === 'Logged In') {
          try {
            const userData = { "isLoggedIn": true };
            setLoginSession(userData);
            redirectToHome();
          } catch (error) {
            setApiError(apiResponse?.message);
          }
        } else {
          setApiError(apiResponse?.message);
        }

      } catch (error) {
        setApiError(error);
      }
    }
  }

  const handleUsernameChange = (e) => {
    const updatedValue = e.target.value.replace(/\s/g, '');
    setUsername(updatedValue);
  };

  const handlePasswordChange = (e) => {
    const updatedValue = e.target.value.replace(/\s/g, '');
    setPassword(updatedValue);
  };


  return {
    username,
    setUsername,
    password,
    setPassword,
    errors,
    validateForm,
    handleUsernameChange,
    handlePasswordChange,
    apiError
  };
}
