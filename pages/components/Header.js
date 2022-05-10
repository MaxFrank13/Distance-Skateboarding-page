import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
  return (
    <header className="bg-slate-600 px-8 pt-4 relative shadow-2xl">
      <div className="flex justify-center gap-4 xs:pb-16">
        <div className="flex flex-col font-semibold items-center gap-2">
          <h1 className="text-sky-50 text-3xl lg:text-5xl">distanceskateboarding.org</h1>
          <p className="text-sky-100">discuss - collaborate - inquire</p>
        </div>
        
        <Link href='/'>
          <svg className="sm:inline hidden cursor-pointer"width="347" height="47" viewBox="0 0 347 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89.2318 46.4022L11.414 46.4022L94.6656 39.0943C95.2238 39.0453 95.7492 38.8103 96.1577 38.4269L135.376 1.625C135.815 1.21272 136.459 1.10332 137.01 1.34724L185.477 22.8052C186.462 23.2417 187.617 22.9969 188.341 22.198L200.787 8.46498C201.261 7.94149 202.036 7.82 202.648 8.17329L236.109 27.4958C236.626 27.7944 237.233 27.898 237.82 27.788L260.607 23.5154C260.846 23.4706 261.093 23.4846 261.325 23.5561L292.587 33.1793L292.612 33.187L292.638 33.192L344.739 43.4304C346.52 43.7803 346.265 46.4022 344.45 46.4022L89.2318 46.4022Z" fill="#1F2933" stroke="#1F2933"/>
          </svg>
        </Link>

      </div>
      <button className='xs:hidden mx-auto my-2 container hover:scale-110 transition duration-500 text-sky-400 hover:text-sky-300'>
          <FontAwesomeIcon 
            icon={faAlignJustify}
            size='xl'
          />
      </button>
      <nav className='text-slate-900 absolute bottom-0 right-0'>
        <ul className='xs:flex hidden'>
          <li className='bg-slate-300 px-10 py-2'>
            <Link href='/gallery'>
              <a>Gallery</a>
            </Link>
          </li>
          <li className='bg-slate-200 px-10 py-2'>
            <Link href='/courses'>
              <a>Courses</a>
            </Link>
          </li>
          <li className='bg-slate-100 px-10 py-2'>
            <Link href='/forum'>
              <a>Forums</a>
            </Link>
          </li>
          <li className='bg-slate-300 px-10 py-2'>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}