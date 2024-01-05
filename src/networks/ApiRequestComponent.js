// src/ApiRequestComponent.js
import { useState } from 'react';

export default function ApiRequestComponent() {
  const [response, setResponse] = useState(null);

  const makeApiRequest = async (username, password) => {

    const url = 'http://122.176.50.200:8081/api/method/login';

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': 'full_name=Administrator; sid=e10759f1b56e6cd7d9830d28518a07ce803d5007b385637f82df9ccc; system_user=yes; user_id=Administrator; user_image='
    };

    const data = {
      "usr": username,
      "pwd": password
    };


    try {
      const apiResponse = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      const result = await apiResponse.json();
      setResponse(result);

      console.log(result);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return {
    response,
    makeApiRequest,
  };
}
