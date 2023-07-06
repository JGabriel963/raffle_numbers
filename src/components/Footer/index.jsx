import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

export default function Footer() {
    const [heart, setHeart] = useState(false)
    return (
        <div className='h-8 flex justify-center items-center px-2 font-bold bg-body-color'>
            Feito com {heart ? (
                <FaHeart 
                    className='text-red mx-2 cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
                    onClick={() => setHeart(!heart)} 
                />
            ) : (
                <FaRegHeart 
                    className='text-red mx-2 cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '
                    onClick={() => setHeart(!heart)}  
                /> 
            )} por João Gabriel
        </div>
    )
}