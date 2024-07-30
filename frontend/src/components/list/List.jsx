import { listData } from '../../lib/dummy';
import Card from '../card/Card';
import './List.scss';

const List = () =>{
    return(
        <div className="list">
            {listData.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List;