import { listData } from '../../lib/dummy';
import Card from '../card/Card';
import './List.scss';

const List = ({post}) =>{
    return(
        <div className="list">
            {post.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List;