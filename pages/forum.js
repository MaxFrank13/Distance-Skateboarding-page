import Head from 'next/head'
import ForumTab from './components/Forum/ForumTab';
import forums from '../db/forums.json';

export default function Forum() {
  return (
    <>
      <Head>
        <title>DS - Forums</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex flex-col text-center pb-12 p-8 gap-6 bg-slate-50 text-slate-50 container mx-auto max-w-3xl shadow-light'>
        <section className='grid grid-cols-12 mx-3 p-3 bg-slate-500 rounded uppercase text-xs font-semibold shadow-md shadow-slate-900'>
          <h4 className="col-span-5 place-self-start">forum</h4>
          <h4 className="col-span-2">topics</h4>
          <h4 className="col-span-2">posts</h4>
          <h4 className="col-span-3 place-self-end">latest</h4>
        </section>
        {forums.map(forum => (
          <ForumTab
            forum_name={forum.forum_name}
            topics={forum.topics}
            posts={forum.posts}
            key={forum.id}
          />
        ))}
      </main>
    </>

  )
}