import Head from 'next/head'
import Login from './components/Enter/Login';
import Signup from './components/Enter/Signup';
import { useState } from 'react';

export default function LoginPage() {
  const [formFocus, setFormFocus] = useState('logIn');

  const toggleForm = () => {
    if (formFocus === 'logIn') {
      setFormFocus('signUp');
      return;
    }
    setFormFocus('logIn');
  };

  return (
    <>
      <Head>
        <title>Distance Skateboarding</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section className='flex flex-col md:flex-row gap-12 items-center justify-center'>
        <button className='bg-sky-500 p-8' onClick={toggleForm}>Toggle</button>
        <Login 
          active={formFocus === 'logIn'}
        />
        <Signup 
          active={formFocus === 'signUp'}
        />
      </section>
    </>
  )
}
