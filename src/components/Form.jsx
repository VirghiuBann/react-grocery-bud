import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      toast.error('Please, fill in this field!')
      return
    }

    addItem(name)
    console.log(name)

    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
