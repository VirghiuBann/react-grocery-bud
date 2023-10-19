import { useEffect, useState } from 'react'

import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

import Form from './components/Form'
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

    toast.success('Item added successfully!')
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(() => {
      localStorage.setItem('items', JSON.stringify(newItems))
      return newItems
    })
    toast.success('Item removed successfully!')
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
      toast.success('Item updated successfully!')
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
        <ToastContainer />
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
