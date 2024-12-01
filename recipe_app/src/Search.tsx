import { useEffect, useState } from "react";
import searchIcon from "./icons/searchIcon.png";

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

function Search({ setRecipe }: any) {
    const [search, setSearch] = useState("");

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (search) {
            const filteredRecipeis = async () => {
                try {
                    const response = await fetch(
                        `https://dummyjson.com/recipes/search?q=${search}&sortBy=rating&order=desc&limit=10`
                    );
                    if (!response.ok) throw new Error("Failed to fetch recipes");
                    const data: RecipeResponse = await response.json();
                    setRecipe(data.recipes);
                } catch (err) {
                    setError((err as Error).message);
                }


            }
            filteredRecipeis()
        }

    }, [search])

    if (error) {
        return <div className="p-4">Error: {error}</div>;
    }


    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="input-group">
                        <span className="input-group-text">
                            <img
                                src={searchIcon}
                                alt="search icon"
                                style={{ width: "20px", height: "20px", objectFit: "contain" }} // Ensure the image is small and fits well
                            />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for recipes..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;

