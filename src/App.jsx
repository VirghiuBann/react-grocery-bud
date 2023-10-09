import { useState } from 'react'
import Form from './components/Form'
import { nanoid } from 'nanoid'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (name) => {
    const newItem = {
      id: nanoid(),
      name,
      completed: false,
    }
    setItems([...items, newItem])
  }
  return (
    <main>
      <section className='section-center'>
        <Form addItem={addItem} />
      </section>
    </main>
  )
}

export default App
