
import LdtLogo from '../../assets/images/ldtlogo.svg';
import Image from 'next/image';
import '../../app/globals.css';
import LoginValidationComponents from '../../validations/LoginValidationComponents'



export default function Login() {
  const validationComponent = LoginValidationComponents();

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Image src={LdtLogo} alt="Logo" />
      <div style={{ marginTop: "18px" }}>
        <main>
          <h2 className="ldt-label-login">LDT TECHNOLOGY</h2>
        </main>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); validationComponent.validateForm(); }}>
        <div className="flex flex-col items-start">
          <div className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ${validationComponent.errors.username && 'border-red-500'}`}
            style={{ width: '338px', marginTop: '102px' }}>
            <input
              id='username'
              type='text'
              placeholder='USERNAME'
              name='username'
              autoComplete='username'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              value={validationComponent.username}
              onChange={(e) => validationComponent.handleUsernameChange(e)}
              style={{ paddingLeft: '10px', fontSize: '13px', '::placeholder': 'rgba(0, 0, 0, 0.50)' }}
            />
          </div>
          {validationComponent.errors.username && (
            <label className='text-red-500 mt-2'>{validationComponent.errors.username}</label>
          )}

        </div>
        <div>
          <div className="flex flex-col items-start">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
              style={{ width: '338px', marginTop: "20px" }}>
              <input id='password' type="password" placeholder="PASSWORD" name="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={validationComponent.password}
                onChange={(e) => validationComponent.handlePasswordChange(e)}
                style={{ paddingLeft: '10px', fontSize: '13px', '::placeholder': 'rgba(0, 0, 0, 0.50)' }}>
              </input>


            </div>
            {validationComponent.errors.password && (
              <label className='text-red-500 mt-2'>{validationComponent.errors.password}</label>
            )}
          </div>
          <div class="flex items-center justify-end gap-x-6 lg:justify-end"
            style={{ marginTop: "6px" }}>
            <a href="#" class="text-blue-500 text-center font-roboto text-sm font-semibold font-normal tracking-[0.52px] capitalize">
              Forgot Password?
            </a>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-center gap-x-6"
          style={{ marginTop: "52px" }}>
          <button
            type="submit"
            class="rounded-md bg-[#36728B] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2D5F75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36728B]"
            style={{ width: '160px', height: '47' }}
            onClick={(e) => {
              e.preventDefault();
              validationComponent.validateForm();
            }}>
            Login
          </button>
        </div>

      </form>
    </div>

  );
}

