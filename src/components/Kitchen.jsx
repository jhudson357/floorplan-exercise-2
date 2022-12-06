import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (
    <div>
      <div className='oven-sink'>
        <Oven />
        <Sink />
      </div>
      Kitchen
    </div>
  )
}

export default Kitchen