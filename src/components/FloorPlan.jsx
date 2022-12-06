import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = () => {
  return (
    <div className='floorplan'>
      <div className='upper-half'>
        <div className='upper-left'>
          <Bedroom bedNum='1'/>
          <Bath size='Full'/>
        </div>
        <LivingRoom />
        <Kitchen />
      </div>
      <div className='lower-half'>
        <Bedroom bedNum='2'/>
        <Bath size='Half'/>
        <Bedroom bedNum='3'/>
      </div>
    </div>
  )
}

export default FloorPlan