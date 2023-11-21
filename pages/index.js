import Head from 'next/head';
import Avatar from '@/components/Avatar';
import {ViewGridIcon, MicrophoneIcon} from '@heroicons/react/solid';
import { SearchIcon} from '@heroicons/react/outline'
import Footer from '@/components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()
  const Search = (e) =>{
    e.preventDefault()

    const term = searchInputRef.current.value;
    if(!term) return;

    router.push(`/search?term=${term}`)
  }


  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <Head>
          <title>Google search</title>
          <link ref='icon' href='/favicon.io'/>
      </Head>


      
      {/* header */}
      <header className='flex justify-between w-full p-5 text-sm text-gray-700'>
          {/* left */}
          <div className='flex space-x-4 items-center'>
              <p className='link'>Home</p>
              <p className='link'>About</p>
          </div>
          {/* right */}
          <div className='flex space-x-4 items-center'>
              <p className='link'>Google</p>
              <p className='link'>Images</p>

              {/* icon */}
              <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
              {/* Avatar */}
              <Avatar url='https://i.ibb.co/nLPM636/IMG-9334-copy.jpg'/>
          </div>
      </header>

      {/* body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <img src="https://i.ibb.co/DQdghd9/google.png " alt=""  />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-5 text-gray-500'/>
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow'/>
          <MicrophoneIcon className='h-5'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 lg:flex sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={Search} className='btn'>Google Search</button >
          <button onClick={Search} className='btn'>I'am Freeling Lucky</button>
        </div>
      </form>
      <Footer/>
    </div>
  )
}
