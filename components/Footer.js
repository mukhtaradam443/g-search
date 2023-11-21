import { GlobeIcon } from "@heroicons/react/solid"

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 temt-sm text-gray-500">
        <div className="px-8 py-3">
            <h1>Unitetd Kingdom</h1>
        </div>

        <div className="grid grid-colls-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">

            <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <GlobeIcon className="h-5 mr-i text-green-700"/> Corbon neutral since 2007
            </div>

            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>Advertising</p>
                <p>Buseness</p>
                <p>How Search work</p>
            </div>
            <div className="flex justify-center space-x-8 md:ml-auto ">
                <p>Privacy</p>
                <p>Term</p>
                <p>Settings</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer