import { useState } from 'react';
import HttpService from "../../src/utilities/api"
import { useRouter } from 'next/navigation';

export default function LoginValidationComponents() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const router= useRouter();

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
    const uri = "/api/method/login";
    const data = {
      "usr": username,
      "pwd": password
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Cookie': 'full_name=Administrator; sid=e10759f1b56e6cd7d9830d28518a07ce803d5007b385637f82df9ccc; system_user=yes; user_id=Administrator; user_image='
    };

    // fetch('http://122.176.50.200:8081/api/method/login',{method:'POST',body: JSON.stringify(data)})
    // .then((res)=>res.json())
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(e=>console.error(e))

    HttpService.post(uri, data, {withCredentials: true}).then((response) => {
      console.log(response.data.full_name);
      if (response.status === 200) {
        router.push(`/home?name=${response.data.full_name}`)
      }
    });

    // HttpService.post(uri, data).then((response) => {
    //   console.log(response);
    //   if (response.status === 200) {
    //     router.push("attendance");
    //   }
    // });
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
