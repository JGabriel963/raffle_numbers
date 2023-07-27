import { useContext, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import tamborAudio from "../../assets/tambor.mp3";
import { VolumeContext } from "../VolumeContext";

export default function Raffer() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [raffeNumbers, setRaffeNumbers] = useState([])
  const [message, setMessage] = useState("")
  const { setVolume } = useContext(VolumeContext);

  const raffleNumber = (e) => {
    e.preventDefault();

    setMessage("")

    if (raffeNumbers.length === +max - +min + 1) {
      setMessage(":(");
      setRaffeNumbers([])
      return;
    }

    setIsLoading(true);
    setVolume(0.4); // diminui o volume da música principal

    new Audio(tamborAudio).play(); // rufem os tambores 😂

    const minNum = parseInt(min);
    const maxNum = parseInt(max);


    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    } while (raffeNumbers.includes(randomNumber));

    // add number
    setRaffeNumbers([...raffeNumbers, randomNumber])

    setTimeout(() => {
      setIsLoading(false);
      setVolume(1);
      setResult(randomNumber);
    }, 420);
  };

  return (
    <div className="flex flex-col text-center w-[90%] md:w-[800px] bg-secondary-color px-10 py-10 rounded-xl shadow-xl">
      <h2 className="font-bold text-3xl mb-10">Nova <span className="text-yellow">Mente</span></h2>
      <form onSubmit={raffleNumber}>
        <div className="flex gap-8 justify-center mb-8">
          <div className="flex flex-col text-left w-1/2">
            <label htmlFor="min" className="font-bold">
              Min:
            </label>
            <input
              className="bg-secondary-color border-b-2 focus:outline-none border-primary-color p-1"
              type="number"
              id="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              min={1}
              required
            />
          </div>
          <div className="flex flex-col text-left w-1/2">
            <label htmlFor="max" className="font-bold">
              Max:
            </label>
            <input
              className="bg-secondary-color border-b-2 border-primary-color focus:outline-none p-1"
              type="number"
              id="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              min={1}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full border-2 font-bold text-body-color text-xl hover:text-white border-primary-color hover:border-white p-3 rounded-lg mb-8 bg-primary-color transition-colors"
        >
          Sortear
        </button>
      </form>
      {!isLoading ? (
        <p className="font-bold text-7xl flex justify-center items-center gap-5">
          {message || (result < 10 ? `0${result}` : result)}
        </p>
      ) : (
        <p className="font-bold text-7xl flex justify-center items-center gap-5">
          <FaSpinner className="animate-spin text-3xl" />
          <span className="text-3xl">Carregando...</span>
        </p>
      )}
    </div>
  );
}
