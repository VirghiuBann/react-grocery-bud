import { useState } from 'react'

const SingleItem = ({ id, name, completed }) => {
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
      <button className='btn remove-btn'>remove</button>
    </div>
  )
}

export default SingleItem
