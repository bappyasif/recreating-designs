import React from 'react'
import { ActionButton, ActionLink, Header, InputItem } from '../_components'

const SignupPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-y-10'>
      <Header text='Create Account' />
      <div className='flex flex-col gap-y-4'>
        <InputItem name='First Name' type='text' />
        <InputItem name='Last Name' type='text' />
        <InputItem name='Email' type='email' />
        <InputItem name='Password' type='password' />
      </div>

      <ActionButton text='CREATE' />

      <ActionLink link='/' text='Return to Store' />

    </div>
  )
}

export default SignupPage