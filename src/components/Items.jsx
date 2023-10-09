import SingleItem from './SingleItem'
import { nanoid } from 'nanoid'

const Items = ({ items }) => {
  return (
    <section>
      {!!items.length &&
        items.map((item) => {
          return <SingleItem {...item} key={nanoid()} />
        })}
    </section>
  )
}

export default Items
