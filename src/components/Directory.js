import { useState, useEffect } from "react";
import DrinkForm from "./DrinkForm";
import SearchBar from "./SearchBar";
import Card from "./Card";
import "../styles/Directory.css"

function Directory() {
  const [cocktails, setCocktails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/cocktails")
    .then(r => r.json())
    .then(cocktailData => setCocktails(cocktailData))
  }, [])

  function handleAddDrink(data) {
    setCocktails([...cocktails, data])
  }

  const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && 
      (category === "All" || cocktail.spirit === category)
    )

    return (
        <div>
          <h2 className="directory-title">DIRECTORY</h2>
          <DrinkForm onSubmit={handleAddDrink}/>
          <SearchBar onSearch={(searchInput) => setSearchInput(searchInput)} onFilter={(filter) => setCategory(filter)}/>
          <div className="cocktail-container">
          {filteredCocktails.map(cocktail => (
            <Card key={cocktail.id} cocktail={cocktail}/>
            ))}
            </div>
        </div>
    );
}

export default Directory;