import { useState } from "react";

function PasswordGenerator({length, numAllowed, specCharAllowed, password, setLength, setNumAllowed, setSpecCharAllowed, passwordGenerator}) {
    return(
        <div className="container mx-auto my-8">
          <h1 className="mb-8">Password Generator</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet.</p>
          <div className="max-w-md mx-auto mb-4 bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="password">
                  Generated Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="Your password will appear here"
                  value={password}
                  readOnly
                />
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button" 
                onClick={passwordGenerator}>Generate Password</button>
            </div>
          </div>
        </div>
    )
}

export default PasswordGenerator