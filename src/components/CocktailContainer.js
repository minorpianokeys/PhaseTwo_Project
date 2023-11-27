import Card from "./Card";

function CocktailContainer({ cocktails }) {
    return(
        <div className="cocktail-container">
          {cocktails.map(cocktail => (
            <Card key={cocktail.id} cocktail={cocktail}/>
            ))}
        </div>
    )
}

export default CocktailContainer;