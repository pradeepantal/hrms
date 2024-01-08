import { useState } from 'react';
import HttpService from "../../src/utilities/api"
import { useRouter } from 'next/router';

export default function LoginValidationComponents() {

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
      handleSubmit();
      // try {
      //   const apiResponse = await apiComponent.makeApiRequest(username, password);
      //   if (apiResponse?.message === 'Logged In') {
      //     try {
      //       const userData = { "isLoggedIn": true };
      //       setLoginSession(userData);
      //       redirectToHome();
      //     } catch (error) {
      //       setApiError(apiResponse?.message);
      //     }
      //   } else {
      //     setApiError(apiResponse?.message);
      //   }

      // } catch (error) {
      //   setApiError(error);
      // }
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

  const handleSubmit = () => {
    HttpService.post(uri, data).then((response) => {
      console.log(response);
      if (response.status == 200) {
        router.push("home");
      }
    })
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
