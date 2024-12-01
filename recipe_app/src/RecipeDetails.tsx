import { useEffect, useState } from "react";


function RecipeDetails({ showDetails, setShowDetails, selectedId }: any) {
    const [error, setError] = useState<string | null>(null);
    const [details, setDetails] = useState<any>([])


    useEffect(() => {
        if (showDetails) {
            const fetchDetails = async () => {
                try {
                    const response = await fetch(
                        `https://dummyjson.com/recipes/${selectedId}`
                    );
                    if (!response.ok) throw new Error("Failed to fetch recipe");
                    const data = await response.json();
                    setDetails(data);
                } catch (err) {
                    setError((err as Error).message);
                }


            }
            fetchDetails()
        }

    }, [showDetails])
    if (error) {
        return <div className="p-4">Error: {error}</div>;
    }

    // console.log(details)
    const ingredients = details.ingredients || [];
    const instructions = details.instructions || [];

    return (
        <div className="container mt-4">
            <div className="row justify-content-between">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src={details.image}
                                alt={details.name}
                                className="img-fluid"
                                style={{ maxWidth: '350px', borderRadius: '8px' }}
                            />
                            <h3 className="mt-3">{details.name}</h3>
                            <p><strong>💪 Difficulty:</strong> {details.difficulty}</p>
                            <p><strong>🍽️ Servings:</strong> {details.servings} people</p>
                            <p><strong>⏳ Preparation Time:</strong> {details.prepTimeMinutes} minutes</p>
                            <p><strong>🍳 Cooking Time:</strong> {details.cookTimeMinutes} minutes</p>
                            <p><strong>🌎 Cuisine:</strong> {details.cuisine}</p>
                            <p><strong>⭐ Rating score: </strong> {details.rating}</p>
                            <p><strong>🔥 Calories per Serving:</strong> {details.caloriesPerServing} kcal</p>

                        </div>
                        <div className="col-md-6 ml-3 " >
                            <div className="mb-4">
                                <h5 className="text-primary font-weight-bold"><strong>🥗 Ingredients</strong></h5>
                                {ingredients.length > 0 ? (
                                    <ul className="list-unstyled">
                                        {ingredients.map((ingredient: string, index: number) => (
                                            <li key={index} className="mb-2" >
                                                {ingredient}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No ingredients available</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <h5 className="text-primary font-weight-bold"><strong>📝 Instructions</strong></h5>
                                {instructions.length > 0 ? (
                                    <ol className="list-decimal ps-4">
                                        {instructions.map((step: string, index: number) => (
                                            <li key={index} className="mb-2">
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p>No instructions available</p>
                                )}
                            </div>
                            <div className="text-center mt-4">
                                <button
                                    className="btn btn-secondary btn-lg mb-3"
                                    onClick={() => setShowDetails(false)}
                                >
                                    Back to Recipes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default RecipeDetails;