import SingleItem from './SingleItem'
import { nanoid } from 'nanoid'

const Items = ({ items, removeItem }) => {
  return (
    <section className='items'>
      {!!items.length &&
        items.map((item) => {
          return <SingleItem {...item} removeItem={removeItem} key={nanoid()} />
        })}
    </section>
  )
}

export default Items
