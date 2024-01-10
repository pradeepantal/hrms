
import LdtLogo from '../../assets/images/ldtlogo.svg';
import Image from 'next/image';
import '../../app/globals.css';
import LoginValidationComponents from '../../validations/LoginValidationComponents'
import { getLoginSession } from '../../helper/helper'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login() {
  const validationComponent = LoginValidationComponents();

  const router = useRouter();

  useEffect(() => {
    const userData = getLoginSession();

    if (userData?.isLoggedIn) {
      router.push('/home');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={LdtLogo} alt="Logo" />
      <div className="mt-2">
        <main>
          <h2 className="ldt-label-login">LDT TECHNOLOGY</h2>
        </main>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); validationComponent.validateForm(); }}>

        <div className="flex flex-col items-start">
          <div className="flex mt-24 h-12 w-80 rounded-md shadow-sm ring-1 ring-inset ring-black focus-within:ring-2">
            <input
              id='username'
              type='text'
              placeholder='USERNAME'
              name='username'
              className='block pl-3 text-sm text-black flex-1 border-0 bg-transparent py-1.5 placeholder:text-gray-400'
              value={validationComponent.username}
              onChange={(e) => validationComponent.handleUsernameChange(e)}
            />
          </div>
          {validationComponent.errors.username && (
            <label className='text-red-500 mt-2'>{validationComponent.errors.username}</label>
          )}

        </div>


        <div className="flex flex-col items-start">
          <div className="flex mt-5 rounded-md h-12 shadow-sm w-80 ring-1 ring-inset ring-black focus-within:ring-2"
          >
            <input id='password' type="password" placeholder="PASSWORD" name="username" autoComplete="username"
              className="block pl-3 flex-1 text-sm border-0 bg-transparent py-1.5 text-black placeholder:text-gray-400"
              value={validationComponent.password}
              onChange={(e) => validationComponent.handlePasswordChange(e)}>
            </input>

          </div>
          {validationComponent.errors.password && (
            <label className='text-red-500 mt-2'>{validationComponent.errors.password}</label>
          )}
        </div>


        <div className="flex justify-end m-1">
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>

        </div>

        <div className="flex items-center justify-center gap-x-6 m-12">
          <button
            type="submit"
            className="rounded-lg w-40 bg-[#36728B] h-12 px-3 py-2 text-sm font-semibold text-white shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              validationComponent.validateForm();
            }}>
            Login
          </button>

        </div>
        <div className="mt-5 flex items-center justify-center gap-x-6 text-red-800">
          {validationComponent.apiError}
        </div>
      </form>
    </div>

  );
}

