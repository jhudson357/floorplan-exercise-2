import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (
    <div className="upper-right">
      <div className='oven-sink'>
        <Oven />
        <Sink />
      </div>
      <div className="kitchen">
        Kitchen
      </div>
    </div>
  )
}

export default Kitchen