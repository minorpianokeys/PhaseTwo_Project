import { useState, useEffect } from "react";
import DrinkForm from "./DrinkForm";
import SearchBar from "./SearchBar";
import CocktailContainer from "./CocktailContainer";
import "../styles/Directory.css"

function Directory() {
  const [cocktails, setCocktails] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/cocktails")
    .then(r => r.json())
    .then(cocktailData => setCocktails(cocktailData))
  }, [])

  function handleAddDrink(data) {
    setCocktails([...cocktails, data])
  }

  const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchBy.toLowerCase()) && 
      (filterBy === "All" || cocktail.spirit === filterBy)
    )

    return (
        <div>
          <h2 className="directory-title">DIRECTORY</h2>
          <DrinkForm onSubmit={handleAddDrink}/>
          <SearchBar 
          onSearch={(searchInput) => setSearchBy(searchInput)} 
          searchBy={searchBy}
          onFilter={(filter) => setFilterBy(filter)}
          filterBy={filterBy}
          />
          <CocktailContainer cocktails={filteredCocktails}/>
        </div>
    );
}

export default Directory;