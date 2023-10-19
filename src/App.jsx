import { useEffect, useState } from 'react'
import Form from './components/Form'
import { nanoid } from 'nanoid'
import Items from './components/Items'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (name) => {
    const newItem = {
      id: nanoid(),
      name,
      completed: false,
    }
    setItems((oldItems) => {
      const updatedItems = [...oldItems, newItem]
      localStorage.setItem('items', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(() => {
      localStorage.setItem('items', JSON.stringify(newItems))
      return newItems
    })
  }

  const updateCompleted = (id) => {
    const updatedItems = [...items]
    const itemIndex = updatedItems.findIndex((item) => item.id === id)

    if (itemIndex !== -1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        completed: !updatedItems[itemIndex].completed,
      }

      setItems(() => {
        localStorage.setItem('items', JSON.stringify(updatedItems))
        return updatedItems
      })
    }
  }

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'))
    if (savedItems && !!savedItems.length) {
      setItems([...savedItems])
    }
  }, [])

  return (
    <main>
      <section className='section-center'>
        <Form addItem={addItem} />
        <Items
          items={items}
          removeItem={removeItem}
          updateCompleted={updateCompleted}
        />
      </section>
    </main>
  )
}

export default App
