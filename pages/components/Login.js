import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login(props) {


  return (
    <section className='container mx-auto flex justify-center p-8'>
      <form className='flex flex-col items-center gap-4 bg-slate-100 p-8 rounded-md shadow-inner'>
        <div className='flex items-center gap-2'>
          <label htmlFor='username' className='w-1/4'>
            <FontAwesomeIcon 
            icon={faUser}
            size='xl'
            />
          </label>
          <input className='rounded-sm p-2' id='username' type='text' placeholder='username' />
        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor='email' className='w-1/4'>
            <FontAwesomeIcon 
            icon={faEnvelope}
            size='xl'
            />
          </label>
          <input className='rounded-sm p-2' id='email' type='email' placeholder='email' />
        </div>

        <button className='rounded-md bg-sky-500 text-slate-900 hover:text-slate-100 px-5 py-2 text-sm font-semibold shadow-clay hover:shadow-pressed transition-all duration-500'>login</button>

      </form>
    </section>
  )
}