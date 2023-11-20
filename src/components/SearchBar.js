import "../styles/SearchBar.css"

function SearchBar({ onSearch, onFilter }) {
    return(
        <div className="filter-container">
            <input type="text" className="filter-input" placeholder="Search for Cocktail..." onChange={(e) => onSearch(e.target.value)}></input>
            <select name="spirit" className="filter-select" onChange={(e) => onFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Vodka">Vodka</option>
                    <option value="Gin">Gin</option>
                    <option value="Rum">Rum</option>
                    <option value="Whiskey">Whiskey</option>
                    <option value="Tequila">Tequila</option>
                </select>
        </div>
    )
}

export default SearchBar;