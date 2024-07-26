import './SearchBar.scss'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
const types=["buy", "rent"];
const SearchBar = () =>{
    const [query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })

    const switchType= (val) =>{
        setQuery((prev) => ({...prev, type: val}))
    }

    return(
    <div className="searchBar">
        <div className="type">
                {types.map((type)=>(
                    <button className={query.type === type ? "active" : ""} onClick={() => switchType(type)} key={type} >
                        {type}
                    </button>
                ))}
           </div>
            <form>
                <input type='text' name="city" placeholder='City' />
                <input type='number' name="minPrice"    placeholder='Min Price'/>
                <input type='number' name="maxPrice"   placeholder='Max Price'/>

                <button>
                    <img src='./search.png' />
                </button>
                

            </form>
    </div>
    )
}

export default SearchBar;