import Card from '../../components/card/Card'
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map'
import './listPage.scss'
import { listData } from '../../lib/dummyData'





function ListPage() {
  const data = listData;

  return (
    <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper">
            <Filter/>
            <Card/>
            </div>
        </div>
        <div className="mapContainer">
            <Map items = {data}/>
        </div>
    </div>
  )
}

export default ListPage