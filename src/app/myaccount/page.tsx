//  import React from 'react'
//  import {

//    SignInButton,
//    SignedIn,
//    SignedOut,
//    UserButton
//  } from '@clerk/nextjs'
//  const Account = () => {
//    return (
//      <div>
//        <h2>Account</h2>
//        <SignedOut>
//         <SignInButton />
//       </SignedOut> 
//        <SignedIn > 
//          <UserButton />
//       </SignedIn> 
//     </div>
//    )
//  }


//  export default Account






import React from 'react'
import { Headersection } from '../layout/headersection'
const myaccount = () => {
  const message= `Your personal data will be used to support your \n experience throughout this website, to manage access \n to your account,
   and for other purposes described in our \n `
   const policy =`privacy policy.`
  return (

    <>

<Headersection text='My account' tittle='My Account' />


      <div className='flex flex-col items-center justify-center mt-5 sm:flex-row space-y-3 space-x-20'>
        <div className='space-y-3'>
          {/* rightside */}
          <h2 className='font-bold'>Log in</h2>
          <label htmlFor="username emailaddress" className='block font-semibold'> Username or email address</label>
          <input
            type="text"
            id='username or email'
            className=' block rounded-md mt-1 border py-3  border-gray-400' />

          <label
            htmlFor="pasword"
            className="block text-sm  text-gray-700 font-semibold focus:ring-indigo-500 focus:border-indigo-500"
          >
            Password
          </label>
          <input
            type="password"
            id="pasword"

            className="mt-1 block  rounded-md border py-3 border-gray-400  focus:ring-indigo-500 focus:border-indigo-500"
          />
          {/* Checkbox */}
          <input
            type="checkbox"
            id="remember-me"
            className="h-4 w-4 border-gray-300 rounded-sm text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          {/* Remember me label */}
          <label htmlFor="remember-me" className="text-sm text-gray-700 ml-2  font-semibold">
            Remember me
          </label>
        <div className='flex gap-5'>
          <button className='py-3 px-9 border border-gray-400 rounded-md'>Log in</button>
          <p className='mt-2'>lost Your Pasaword?</p>
        </div>
        </div>





        <div>
          {/* leftside */}
          <div className='space-y-3'>

            <h2 className='font-bold'>Register</h2>
            <label htmlFor="username emailaddress" className='block'> Email address</label>
            <input
              type="text"
              id=' email'
              className=' block rounded-md mt-1 border py-3  border-gray-400' />
            <p>A link to set a new password will be sent to your email address.</p>
            <p className='whitespace-pre-line'>{message}</p>
            <p className='font-bold underline'>{policy}</p>
          </div>
        </div>
      </div>

    </>


  )
}
export default myaccount