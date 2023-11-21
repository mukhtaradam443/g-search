import { SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from '../components/Avatar'
import HeaderOptions from "./HeaderOptions"


function Header() {
    const router = useRouter()
    const searchInputRef = useRef()
    const Search = (e) =>{
        e.preventDefault();

        const term = searchInputRef.current.value;
        if(!term) return;

        router.push(`/search?term=${term}`)
    }
  return (
    <header className="sticky top-0 bg-white">
       <div className="flex w-full p-6 items-center">
            <img onClick={() =>router.push('/')} src="https://i.ibb.co/58C6vJv/google2.png" height={50} width={120} alt="" 
            className="cursor-pointer"/>

            <form className="flex px-6 border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center
                py-3 ml-10 mr-5">
                <input ref={searchInputRef} type="text" name="" id="" 
                className="flex-grow w-full focus:outline-none"/>
                <XIcon onClick={() => (searchInputRef.current.value ='')} className="h-7 text-gray-500 cursor-pointer hover:scale-125 transition transform sm:mr-3"/>
                <MicrophoneIcon className="h-7 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon className="h-7 hidden text-blue-500 sm:inline-flex"/>
                <button hidden onClick={Search}>Search</button>
            </form>

            <Avatar className='ml-auto space-end' url='https://i.ibb.co/nLPM636/IMG-9334-copy.jpg'/> 
       </div>
       {/* HeadreOption */}
       <HeaderOptions/>
    </header>
  )
}

export default Header