const SingleItem = ({ id, name, completed, removeItem, updateCompleted }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => updateCompleted(id)}
      />
      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  )
}

export default SingleItem
