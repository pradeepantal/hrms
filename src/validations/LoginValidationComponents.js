import { useState } from 'react';
import HttpService from "../../src/utilities/api"
export default function LoginValidationComponents() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    switch (true) {

      case !username && !password:
        newErrors.username = 'Username is required.';
        break;
      case !username:
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
    }
  };

  const handleUsernameChange = (e) => {
    const updatedValue = e.target.value.replace(/\s/g, '');
    setUsername(updatedValue);
  };

  const handlePasswordChange = (e) => {
    const updatedValue = e.target.value.replace(/\s/g, '');
    setPassword(updatedValue);
  };

  const handleSubmit = () => {
    let uri ="http://122.176.50.200:8081/api/method/login"
    const data = {
      "usr": username,
      "pwd": password
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
     // 'Cookie': 'full_name=Administrator; sid=e10759f1b56e6cd7d9830d28518a07ce803d5007b385637f82df9ccc; system_user=yes; user_id=Administrator; user_image='
    };

    HttpService.post(uri, headers, data)
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    errors,
    validateForm,
    handleUsernameChange,
    handlePasswordChange
  };
}
