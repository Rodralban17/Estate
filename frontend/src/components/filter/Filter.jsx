import { useSearchParams } from 'react-router-dom';
import './Filter.scss';
import { useState } from 'react';

const Filter = () =>{
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || 100000000,
        bedroom: searchParams.get("bedroom") || 1,
    })

    const handleChange = (e) => {
        setQuery({
          ...query,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleFilter = () => {
        setSearchParams(query);
      };
    return(
        <div className="filter">
            <h1 >Search result </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' id="city" name="city" placeholder='City Location' onChange={handleChange} defaultValue={query.city}/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name='type' id='type' onChange={handleChange} defaultValue={query.type}>
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>  
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name='property' id='property'  onChange={handleChange} defaultValue={query.property}>
                        <option value="">any</option>
                        <option value="appartment">Appartment</option>
                        <option value="house">House</option>  
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>  
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number"  id="minPrice" min={1} name='minPRice' placeholder='any' onChange={handleChange} defaultValue={query.minPrice}/>
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice"  min={1} name='maxPrice' placeholder='any' onChange={handleChange} defaultValue={query.maxPrice}/>
                </div>

                <div className="item">
                    <label htmlFor="bedRoom">Bed Room</label>
                    <input type="number" id="bedRoom" name='bedRoom'  min={1} placeholder='any' onChange={handleChange} defaultValue={query.bedroom}/>
                </div>
                <button onClick={handleFilter}>
                    <img src="./search.png" alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Filter;