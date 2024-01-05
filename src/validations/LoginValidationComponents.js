import { useState } from 'react';
import ApiRequestComponent from '../networks/ApiRequestComponent';

export default function LoginValidationComponents() {
  const apiComponent = ApiRequestComponent();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
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
    apiComponent.makeApiRequest(username, password);
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
