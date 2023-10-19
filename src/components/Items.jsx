import SingleItem from './SingleItem'
import { nanoid } from 'nanoid'

const Items = ({ items, removeItem, updateCompleted }) => {
  return (
    <section className='items'>
      {!!items.length &&
        items.map((item) => {
          return (
            <SingleItem
              {...item}
              updateCompleted={updateCompleted}
              removeItem={removeItem}
              key={nanoid()}
            />
          )
        })}
    </section>
  )
}

export default Items
