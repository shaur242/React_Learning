import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, SetLength] = useState(8);
  const [numAllowed, SetNumAllowed] = useState(false);
  const [CharAllowed, SetCharAllowed] = useState(false);
  const [password, SetPassword] = useState("")

  //UseRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    SetPassword(pass)

  }, [length, numAllowed, CharAllowed, SetPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numAllowed, CharAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span class="relative" onClick={copyPasswordToClipboard}>Copy</span>
          </a>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { SetLength(e.target.value) }} />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numAllowed}
              onChange={() => {
                SetNumAllowed((prev) => !prev);
              }} />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={CharAllowed}
              onChange={() => {
                SetCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="CharInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
