import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <span>London</span>
      </h1>
      <div className="location">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City Location"
        />
      </div>
      <div className="filterTypes">
        <div className="type">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="">Buy</option>
            <option value="">Rent</option>
          </select>
        </div>
        <div className="type">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="">Apartment</option>
            <option value="">House</option>
            <option value="">Condo</option>
            <option value="">Land</option>
          </select>
        </div>
        <div className="type">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="0"
            min={0}
            max={99999999}
          />
        </div>
        <div className="type">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="type">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            name="bedroom"
            id="bedroom"
            placeholder="any"
          />
        </div>
        <button className="searchBtn">
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
