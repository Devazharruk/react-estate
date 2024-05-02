import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  })

  const switchType = (val) =>{
    setQuery(prev => ({...prev, type:val}))
  }
  return (
    <div className="searchBar">
      <div className="top">
        {types.map((type) => (
          <button key={type} onClick={()=>switchType(type)} className={query.type === type ? 'active' : ''}  >{type}</button>
        ))}
      </div>
      <form className="bottom">
        <input type="text"  placeholder="City Location"/>
        <input type="number" name="minPrice" min={0} max={999999} placeholder="Min Price" />
        <input type="number" name="macPrice" min={0} max={999999} placeholder="Max Price" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
