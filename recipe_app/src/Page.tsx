import RecipeOverview from "./RecipeOverview";
import Search from "./Search";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Header from "./Header";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface RecipeResponse {
    recipes: Recipe[];
}
function Page() {
    const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div>
            <Header />
            {showDetails ? (<RecipeDetails showDetails={showDetails}
                setShowDetails={setShowDetails}
                selectedId={selectedId} />) : <div><Search recipe={recipe} setRecipe={setRecipe} />
                <RecipeOverview recipe={recipe}
                    setRecipe={setRecipe}
                    setShowDetails={setShowDetails}
                    setSelectedId={setSelectedId} /></div>}

        </div>
    );

}
export default Page;