import './App.css'
import { useState, useEffect } from 'react'

// fetching data from the backend using fetch() and using async await, useEffect is used when mounting the object
function App() {
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    item: 'bread',
    quantity: 1,
  })
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5050')
      const data = await response.json()
      setMessage(data.message)
    }
    fetchData()
  }, [])

  const createItemSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:5050/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }
  return (
    <div className='App'>
      {/* {message} */}
      <form onSubmit={createItemSubmit} className='add-item-form'>
        <h1>Add an item</h1>
        <label>Item Name</label>
        <input
          value={form.item}
          onChange={e =>
            setForm({
              ...form,
              item: e.target.value,
            })
          }
          name='item'
        ></input>
        <label>Item Quantity</label>
        <input
          value={form.quantity}
          onChange={e =>
            setForm({
              ...form,
              quantity: e.target.value,
            })
          }
          type='number'
          name='quantity'
        ></input>
        <button type='submit'>Add item</button>
      </form>
    </div>
  )
}

export default App
