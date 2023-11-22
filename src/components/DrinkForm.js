import { useState } from "react";
import "../styles/DrinkForm.css"

function DrinkForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [spirit, setSpirit] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [garnish, setGarnish] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formattedIngredients = ingredients.split(",")
        const newDrinkData = {
            name: name,
            image: image,
            spirit: spirit,
            ingredients: formattedIngredients,
            garnish: garnish
        }

        fetch("http://localhost:3001/cocktails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDrinkData)
        })
        .then((r) => r.json())
        .then((data) => onSubmit(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label className="form-label">
                    Name:
                    <input 
                    type="text"
                    name="name"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Image:
                    <input 
                    type="text"
                    name="image"
                    className="form-input"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label className="form-label">
                    Spirit:
                    <select name="spirit" className="form-select" value={spirit} onChange={(e) => setSpirit(e.target.value)}>
                        <option value="Vodka">Vodka</option>
                        <option value="Gin">Gin</option>
                        <option value="Rum">Rum</option>
                        <option value="Whiskey">Whiskey</option>
                        <option value="Tequila">Tequila</option>
                    </select>
                </label>
                <br/>
                <label className="form-label">
                    Ingredients:
                    <input 
                    type="text"
                    name="ingredients"
                    className="form-input"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Garnish:
                    <input 
                    type="text"
                    name="garnish"
                    className="form-input"
                    value={garnish}
                    onChange={(e) => setGarnish(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit" className="form-button">Add Cocktail</button>
            </form>
        </div>
    )
}

export default DrinkForm;