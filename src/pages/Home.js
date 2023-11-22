import { Link } from "react-router-dom"
import "../styles/Home.css"
import Card from "../components/Card";

function Home() {
    const featuredCocktail = {
        name: "Cosmopolitan",
        image: "https://assets-prd.punchdrink.com/wp-content/uploads/2020/03/13102145/Article-Ultimate-Cosmo-Cosmopolitan-Cocktail-Recipe.jpg",
        spirit: "Vodka",
        ingredients: [
          "Vodka",
          "Cointreau",
          "Cranberry Juice",
          "Lime Juice"
        ],
        garnish: "none"
      }

    return(
        <div className="home-container">
            <h1>Welcome to Cocktail Atlas</h1>
            <h3>Featured Cocktails</h3>
            <Card cocktail={featuredCocktail}/>
            <Link to="/directory" className="directory-link">Go to Directory</Link>
        </div>
    )
}

export default Home;