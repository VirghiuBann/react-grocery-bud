import { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [items, setItems] = useState([])

  return (
    <main>
      <section className='section-center'>
        <Form />
      </section>
    </main>
  )
}

export default App
