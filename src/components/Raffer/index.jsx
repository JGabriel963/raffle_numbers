import { useState } from "react"
import { FaSpinner } from "react-icons/fa6"

export default function Raffer() {
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const [result, setResult] = useState(0)
    const [hangOn, setHangOn] = useState(false)

    function raffleNumber(ev) {
        ev.preventDefault()
        setHangOn(!hangOn) 

        setTimeout(() => {
            setHangOn(false)
            setResult(Math.floor(Math.random() * (+max - +min + 1)) + +min)
        }, 5000)   
    }

    return (
        <div className="flex flex-col text-center 
        w-[90%] md:w-[800px] bg-secondary-color px-10 py-10 rounded-xl shadow-xl">
            <h2 className="font-bold text-3xl mb-10">Premiação</h2>
            <form onSubmit={raffleNumber}>
                <div className="flex gap-8 justify-center mb-8">
                    <div className="flex flex-col text-left w-1/2">
                        <label htmlFor="min" className="font-bold">Min:</label>
                        <input 
                            className="bg-secondary-color border-b-2 focus:outline-none border-primary-color p-1 "
                            type="text"
                            id="min"
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                            min={1} 
                            required
                        />
                    </div>
                    <div className="flex flex-col text-left w-1/2">
                        <label htmlFor="max" className="font-bold">Max:</label>
                        <input
                            className="bg-secondary-color border-b-2 border-primary-color
                            focus:outline-none p-1" 
                            type="text"
                            id="max"
                            value={max}
                            onChange={(e) => setMax(e.target.value)}
                            min={1} 
                            required 
                        />
                    </div>
                </div>
                <button
                    className="w-full border-2 font-bold text-body-color text-xl hover:text-white  border-primary-color hover:border-white p-3 rounded-lg mb-8
                    bg-primary-color
                    transition-colors"
                
                >
                    Sortear
                </button>
            </form>
            {!hangOn ? (
                <p className="font-bold text-7xl flex justify-center items-center gap-5">
                    {result < 10 ? `0${result}` : result}
                </p>
            ) : (
                <p className="font-bold text-7xl flex justify-center items-center gap-5">
                    <FaSpinner className="animate-spin text-3xl" />
                    <span className="text-3xl">Carregando...</span>
                </p>
            )}
        </div>
    )
}