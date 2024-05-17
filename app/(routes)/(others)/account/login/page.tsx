import React from 'react'
import { ActionButton, ActionLink, Header, InputItem } from '../_components'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='min-h-screen mx-auto flex flex-col items-center justify-center gap-y-10'>
      <Header text='Login' />
      <div className='flex flex-col gap-y-4 mx-auto justify-center items-center'>
        <InputItem name='Email' type='email' />
        <InputItem name='Password' type='password' />
      </div>

      <ActionLink link='#' text='Forgot your password?' />

      <ActionButton text='SIGN IN' />

      <div className='flex flex-col gap-y-4'>
        <ActionLink link='/account/signup' text='Create Account' />
        <ActionLink link='/' text='Return to Store' />
      </div>
    </div>
  )
}

export default LoginPage