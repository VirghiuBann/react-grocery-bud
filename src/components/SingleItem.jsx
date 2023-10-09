import { useState } from 'react'

const SingleItem = ({ id, name, completed, removeItem }) => {
  const [isChecked, setIsChecked] = useState(completed)
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  )
}

export default SingleItem
