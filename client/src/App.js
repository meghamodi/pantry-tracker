import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'

// fetching data from the backend using fetch() and using async await, useEffect is used when mounting the object
function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5050')
      const data = await response.json()
      setMessage(data.message)
    }
    fetchData()
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p> {message}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
