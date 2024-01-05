// src/ApiRequestComponent.js
import { useState } from 'react';

export default function ApiRequestComponent() {
  const [response, setResponse] = useState(null);

  const makeApiRequest = async () => {
    const url = 'http://122.176.50.200:8081/api/method/login';

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': 'full_name=Administrator; sid=f5bd6fb50bac6bcb0d234df16d3906913b6968c695bed85f75469873; system_user=yes; user_id=Administrator; user_image='
    };

    const data = {
      "usr": "Administrator",
      "pwd": "abcd1234"
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
