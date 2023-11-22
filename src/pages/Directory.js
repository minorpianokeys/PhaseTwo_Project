import { useState, useEffect} from "react";
import CocktailContainer from "../components/CocktailContainer";
import SearchBar from "../components/SearchBar";
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

    const filteredCocktails = cocktails.filter(cocktail => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && 
        (category === "All" || cocktail.spirit === category)
      )

    return (
        <div>
          <h2 className="directory-title">DIRECTORY</h2>
          <SearchBar onSearch={(searchInput) => setSearchInput(searchInput)} onFilter={(filter) => setCategory(filter)}/>
          <CocktailContainer cocktails={filteredCocktails}/>
        </div>
    );
}

export default Directory;