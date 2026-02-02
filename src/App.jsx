import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import PasswordGenerator from './components/PasswordGenerator';

import {faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {
  const [length,setLength] = useState(10);
  const [numAllowed,setNumAllowed] = useState(false);
  const [specCharAllowed,setSpecCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strData = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {strData += "0123456789"}
    if (specCharAllowed) {strData += "!£$%&@#~+-=?_"}
    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random()*strData.length+1);
      pass += strData.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, specCharAllowed, setPassword]);

  useEffect(() => {passwordGenerator()},[length, numAllowed, specCharAllowed, passwordGenerator]);

  return (
    <>
      <h1>Password Generator Application</h1>
      <p>This project has been made in conjunction with the <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/" target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a> project as part of Module 8.</p>
      <Container>
        <PasswordGenerator length={length} numAllowed={numAllowed} specCharAllowed={specCharAllowed} password={password} setLength={setLength} setNumAllowed={setNumAllowed} setSpecCharAllowed={setSpecCharAllowed} passwordGenerator={passwordGenerator} />
      </Container>
    </>
  )
}

function Container(props) {
  return (
    <div className='mt-4 mb-4 rounded-4xl border-3 border-solid border-orange-100'>
      {props.children}
    </div>
  );
}

export default App
