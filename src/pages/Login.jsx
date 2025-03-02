import React from 'react'

function Login() {
  return (

    <div>Login

      <div className='flex flex-1 items-center justify-center'>
        <div class="card glass w-full">
          <div class="card-body flex justify-center">
            <h2 class="card-title flex justify-center">Login Form</h2>
            <form>
              <div className='card-body flex flex-col gap-5 p-5'>
                <input type="text"
                  placeholder='Email or phone number'
                  className='input input-bordered w-full' />
                <input type="password"
                  placeholder='password'
                  className='input input-bordered w-full' />

                <div class="card-actions justify-center">
                  <button class="btn btn-active btn-neutral w-full">Login</button>
                  <a className='text-center link link-hover flex-grow-0'>Forgot password?</a>
                  <hr />
                  <button class="btn btn-active bg-lime-500 border-lime-500 w-full">Create new account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login