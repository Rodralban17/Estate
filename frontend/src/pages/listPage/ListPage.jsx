import Filter from '../../components/filter/Filter';
import './ListPage.scss';
import { listData } from '../../lib/dummy';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';
const ListPage = () =>{
    const posts = useLoaderData()
    console.log(posts)
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {posts.map(item=>(
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>  
            <div className="mapContainer">
                <Map items={posts}/>
            </div>
        </div>
    )
}

export default ListPage;