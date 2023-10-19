import { useState } from 'react'

import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'

import Form from './components/Form'
import Items from './components/Items'

const App = () => {
  const [items, setItems] = useState(getLocalItems())

  const addItem = (name) => {
    const newItem = {
      id: nanoid(),
      name,
      completed: false,
    }
    const updatedItems = [...items, newItem]

    setItems([...updatedItems])
    setLocalItems(updatedItems)

    toast.success('Item added successfully!')
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)

    setItems([...newItems])
    getLocalItems(newItems)
    toast.success('Item removed successfully!')
  }

  const updateCompleted = (id) => {
    const currentItems = [...items]
    // with findIndex
    // const itemIndex = currentItems.findIndex((item) => item.id === id)
    // if (itemIndex !== -1) {
    //   currentItems[itemIndex] = {
    //     ...currentItems[itemIndex],
    //     completed: !currentItems[itemIndex].completed,
    //   }

    //   setItems([...updatedItems])
    //   setLocalItems(updatedItems)
    // }

    // with map
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setItems([...updatedItems])
    setLocalItems(updatedItems)
  }

  function getLocalItems() {
    let items = localStorage.getItem('items')
    return items ? JSON.parse(items) : []
  }
  function setLocalItems(item) {
    localStorage.setItem('items', JSON.stringify(item))
  }

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
