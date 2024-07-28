import './Filter.scss';

const Filter = () =>{
    return(
        <div className="filter">
            <h1 >Search result for <span className='text-2xl font-bold'>London</span> </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' id="city" name="city" placeholder='City Location'/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name='type' id='type' >
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>  
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name='property' id='property'  >
                        <option value="">any</option>
                        <option value="appartment">Appartment</option>
                        <option value="house">House</option>  
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>  
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number"  id="minPrice" min={1} name='minPRice' placeholder='any' />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id="maxPrice"  min={1} name='maxPrice' placeholder='any' />
                </div>

                <div className="item">
                    <label htmlFor="bedRoom">Bed Room</label>
                    <input type="number" id="bedRoom" name='bedRoom'  min={1} placeholder='any' />
                </div>
                <button >
                    <img src="./search.png" alt=""/>
                </button>
            </div>
        </div>
    )
}

export default Filter;