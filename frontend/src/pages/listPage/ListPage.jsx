import Filter from '../../components/filter/Filter';
import './ListPage.scss';
import { listData } from '../../lib/dummy';
import Card from '../../components/card/Card';
const ListPage = () =>{
    const data = listData;
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div> 
            <div className="mapContainer"></div>
        </div>
    )
}

export default ListPage;