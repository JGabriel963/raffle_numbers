import { useState } from 'react'
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6'

export default function Header() {
    const [play, setPlay] = useState(false)


    return (
        <div className="px-4 h-14 md:h-16 w-full flex flex-row-reverse items-center bg-body-color">
            {play ? (
                <FaCirclePause 
                 className="text-5xl fill-primary-color border-2 rounded-full bg-white" 
                 onClick={() => setPlay(!play)} 
                />
            ): (
                <FaCirclePlay
                 className="text-5xl fill-primary-color border-2 rounded-full bg-white" 
                 onClick={() => setPlay(!play)}
                />
            )}
            {!play ? null : (
                <audio controls autoPlay className='hidden' onEnded={() => setPlay(!play)}>
                    <source src='../../../public/vinheta.mp3'/>
                    Seu navegador não suporta este áudio.
                </audio>
            )}
        </div>
    )
}