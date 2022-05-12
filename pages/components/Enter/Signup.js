import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login(props) {

  const toggleFormStyles = {
    background: !props.active ? '#0B69A3' : ''
  }

  return (
    <section style={toggleFormStyles} className='flex justify-center p-8 rounded-md'>
      <form className='flex flex-col items-center gap-4 bg-slate-100 p-8 rounded-md shadow-inner text-slate-900'>
        <div className='flex items-center gap-2'>
          <label htmlFor='signUpUsername' className='w-1/4'>
            <FontAwesomeIcon 
            icon={faUser}
            size='xl'
            />
          </label>
          <input className='rounded-sm p-2' id='signUpUsername' type='text' placeholder='username' />
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

        <div className='flex items-center gap-2'>
          <label htmlFor='signUpPassword' className='w-1/4'>
            <FontAwesomeIcon 
            icon={faLock}
            size='xl'
            />
          </label>
          <input className='rounded-sm p-2' id='signUpPassword' type='password' placeholder='password' />
        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor='confirmPassword' className='w-1/4 text-slate-700'>
            <FontAwesomeIcon 
            icon={faLock}
            size='xl'
            />
          </label>
          <input className='rounded-sm p-2' id='confirmPassword' type='password' placeholder='confirm' />
        </div>

        <button className='rounded-md bg-emerald-500 text-slate-900 hover:text-slate-100 px-5 py-2 text-sm font-semibold shadow-clay hover:shadow-pressed transition-all duration-500'>sign up</button>

      </form>
    </section>
  )
}