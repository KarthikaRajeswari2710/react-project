import { useState } from "react"

const App = () => {
  const [form, setForm] = useState("")
  const [result, setResult] = useState("")
  const [numbers, setNumbers] = useState([])

  const changenum = (e) => {
    setForm(e.target.value)
  }

  const changeClick = () => {
    const num = Number(form)

    // store number in array
    setNumbers([...numbers, num])

  
    if (num < 18) {
      setResult("Not Eligible (Age below 18)")
      return
    }

   
    if (num % 2 === 0) {
      setResult(`Eligible & Even Number - ${num}`)
    } else {
      setResult("Eligible but this is NOT an Even Number")
    }
  }

  const evenNumbers = numbers.filter((n) => n % 2 === 0)

  return (
    <div className="min-h-screen bg-green-600 flex flex-col items-center gap-6 p-10">

      <h1 className="text-3xl font-bold text-white">
        Form Handling Process
      </h1>

      {/* Input Box */}
      <div className="bg-white p-6 rounded-xl text-center w-80">
        <input
          type="number"
          onChange={changenum}
          placeholder="Enter Age / Number"
          className="w-full p-2 text-center bg-black text-white rounded"
        />

        {/* Typed value */}
        <p className="text-black mt-3">
          Typed Value : <b>{form}</b>
        </p>

        <button
          onClick={changeClick}
          className="mt-4 bg-black text-white px-6 py-2 rounded"
        >
          Check
        </button>
      </div>

      {/* Result */}
      <p className="text-xl text-white font-bold">{result}</p>

      {/* All Numbers */}
      <div className="text-black text-center">
        <h2 className="font-bold">All Numbers</h2>
        {numbers.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>

      {/* Even Numbers */}
      <div className="text-black text-center">
        <h2 className="font-bold">Even Numbers</h2>
        {evenNumbers.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    </div>
  )
}

export default App
