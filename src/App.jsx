import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'

import {faGithub} from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <>
      <h1>Password Generator Application</h1>
      <p>This project has been made in conjunction with the <a title='GitHub Pages site' href="https://reflectiongolden.github.io/react-essentials-site/" target='_blank'>react-essentials-site</a><a title='GitHub Repository' href="https://github.com/ReflectionGolden/react-essentials-site" target='_blank'><FontAwesomeIcon icon={faGithub} /></a> project as part of Module 8.</p>
      <Container>
        <h2>Password Generator</h2>
        <p>Lorem ipsum dolor sit amet.</p>
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
