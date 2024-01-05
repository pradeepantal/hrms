import { useState } from 'react';
import ApiRequestComponent from '../networks/ApiRequestComponent';

export default function LoginValidationComponents() {
  const apiComponent = ApiRequestComponent();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});

  const validateForm = () => {
    const newErrors = {};

    switch (true) {

      case !username && !password:
        newErrors.username = 'Username is required.';

        if (!password && password.length > 6) {
          newErrors.success = 'You logged in successfully';
        }
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
        if (username) {
          newErrors.success = 'You logged in successfully';
        }
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
    setErrors({ success: '' });
    apiComponent.makeApiRequest();
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
