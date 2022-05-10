import Head from 'next/head'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

import connectMongo from "../utils/connectMongo";
import User from "../models/User"

export async function getServerSideProps() {
  try {

    await connectMongo();

    const users = await User.find();
  
    return {
      props: {
        users: JSON.parse(JSON.stringify(users))
      }
    }
  } catch(err) {
    console.log(err);
    res.json(err);
  }

}

export default function Home({ users }) {
  return (
    <div className='h-screen'>
      <Head>
        <title>Distance Skateboarding</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Login />
      <section className='flex flex-col items-center text-left text-slate-200'>
        {users.map(user => (
          <div key={user.id}>
            <h2 className='text-lg font-semibold'>{user.username}</h2>
            <p className='italic font-light text-slate-300'>{user.email}</p>
          </div>
        )
        )}
      </section>
      <Footer />
    </div>
  )
}
