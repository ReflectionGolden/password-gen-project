import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faCopy} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';

function PasswordGenerator({length, numAllowed, specCharAllowed, password, setLength, setNumAllowed, setSpecCharAllowed, passwordGenerator}) {
  const [copyIcon,setCopyIcon] = useState(<FontAwesomeIcon icon={faCopy} />);
  const passInputRef = useRef(null);

  function copyPassword() {
    //select the password text, for visual feedback
    passInputRef.current?.select();

    //copy functionality
    navigator.clipboard.writeText(password);

    //set copy icon to circle check for 2 seconds, for visual feedback
    setCopyIcon(<FontAwesomeIcon icon={faCircleCheck} beat style={{color: "#00ff40",}} />);
    setTimeout(() =>{setCopyIcon(<FontAwesomeIcon icon={faCopy} />)},2000);
  }

  return(
    <div className="container mx-auto my-8">
      <h1 className="mb-8">Password Generator</h1>
      <p className="mb-4">
        This password generator demonstrates the use of hooks like useCallback and useEffect as well as making use of various inputs to generate a random password and an available button which coppies the entire password to the clipboard with visual feedback so that the user knows both what was copied and that it was copied by making use of JavaScript's ability to write to the clipboard and the useRef hook to set a reference to the password input field.
      </p>
      <div className="max-w-md mx-auto mb-4 bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Generated Password
          </label>
          <div className="mb-4 flex">
            <input
              className="shadow appearance-none border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Your password will appear here"
              value={password}
              ref={passInputRef}
              readOnly
            />
            <button className="bg-blue-500 hover:bg-blue-700 md:text-2xl py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" onClick={copyPassword}>{copyIcon}</button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="length">
              Password Length: {length}
            </label>
            <input
              className="w-full"
              id="length"
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed(!numAllowed)}
              />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={specCharAllowed}
                onChange={() => setSpecCharAllowed(!specCharAllowed)}
              />
              <span className="ml-2">Include Special Characters</span>
            </label>
          </div>
          <button 
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button" 
            onClick={passwordGenerator}>Generate New Password</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator