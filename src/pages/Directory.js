import { useState, useEffect} from "react";
import CocktailContainer from "../components/CocktailContainer";
import SearchBar from "../components/SearchBar";
import "../styles/Directory.css"

function Directory() {
    const [cocktails, setCocktails] = useState([]);
    const [filteredCocktails, setFilteredCocktails] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
      fetch("http://localhost:3001/cocktails")
      .then(r => r.json())
      .then(cocktailData => setCocktails(cocktailData))
    }, [])

    useEffect(() => {
        const filtered = cocktails.filter((cocktail) => {
          return (
            cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) &&
            (filter === "All" || cocktail.spirit === filter)
          );
        });
    
        setFilteredCocktails(filtered);
      }, [cocktails, searchInput, filter]);

    return (
        <div>
          <h2 className="directory-title">DIRECTORY</h2>
          <SearchBar onSearch={(searchInput) => setSearchInput(searchInput)} onFilter={(filter) => setFilter(filter)}/>
          <CocktailContainer cocktails={filteredCocktails}/>
        </div>
    );
}

export default Directory;