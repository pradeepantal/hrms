import { useState } from 'react';
import HttpService from "../../src/utilities/api"
import { useRouter } from 'next/router';
import { setLoginSession } from '@/helper/helper';

export default function LoginValidationComponents() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const router = useRouter();

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
      const data = {
        "usr": username,
        "pwd": password
      };
      handleSubmit('/api/method/login', data);
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


  const handleSubmit = (uri, data) => {
    HttpService.post(uri, data).then((response) => {
      if (response?.status == 200) {
        console.log(response);
        const userData = { "isLoggedIn": true };
        setLoginSession(userData);
        router.push("/home");
      } else {
        console.log(response);
        const userData = { "isLoggedIn": false };
        setLoginSession(userData);
        setApiError(response);
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
