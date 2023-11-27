function Card({ cocktail }) {
    const { name, image, spirit, ingredients, garnish } = cocktail;

    return (
        <div className="card">
            <div className="cocktail-image">
                <img src={image} alt={name}/>
            </div>
            <div className="cocktail-info">
                <h3>{name}</h3>  
                <h4>Spirit: {spirit}</h4>
                <ul>
                    {ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
                <p>Garnish: {garnish}</p>
            </div>
        </div>
    )
}

export default Card;