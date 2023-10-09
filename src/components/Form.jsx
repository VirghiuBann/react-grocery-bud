import { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) return

    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          name='name'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
