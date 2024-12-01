import { useEffect, useState } from "react";

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
    total: number;
}

function RecipeOverview({ recipe, setRecipe, setShowDetails, setSelectedId }: any) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalRecipes, setTotalRecipes] = useState(0);
    const recipesPerPage = 10;

    const fetchRecipes = async (page: number) => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/recipes?sortBy=rating&order=desc&limit=${recipesPerPage}&skip=${(page - 1) * recipesPerPage}`
            );
            if (!response.ok) throw new Error("Failed to fetch recipes");
            const data: RecipeResponse = await response.json();
            setRecipe(data.recipes);
            setTotalRecipes(data.total);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes(page);
    }, [page]);

    const handleNextPage = () => {
        if (page * recipesPerPage < totalRecipes) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (error) {
        return <div className="p-4">Error: {error}</div>;
    }

    if (!recipe || recipe.length === 0) {
        return <div className="p-4">No results found</div>;
    }

    const totalPages = Math.ceil(totalRecipes / recipesPerPage);


    function ShowDetails(id: number) {
        setShowDetails(true);
        setSelectedId(id);
    }

    return (
        <div className="container">
            <div className="row g-4">
                {recipe.map((r: Recipe) => (
                    <div key={r.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card">
                            <img src={r.image} className="card-img-top" alt={r.name} />
                            <div className="card-body">
                                <h5 className="card-title mb-3">{r.name}</h5>
                                <p className="card-text">
                                    ⏳ Preparing time: {r.prepTimeMinutes} Minutes
                                </p>
                                <p className="card-text">
                                    🍳 Cook time: {r.cookTimeMinutes} Minutes
                                </p>
                                <p className="card-text">
                                    🍽️ Servings: {r.servings} Persons
                                </p>
                                <p className="card-text">
                                    💪 Difficulty: {r.difficulty}
                                </p>
                                <p className="card-text">
                                    🌎 Cuisine: {r.cuisine}
                                </p>
                                <p className="card-text">
                                    ⭐ Rating score: {r.rating}
                                </p>
                                <button type="button"
                                    className="btn btn-info"
                                    onClick={() => ShowDetails(r.id)}>More details</button>

                            </div>
                        </div>
                    </div>
                ))}

                <div className="col-12 text-center">
                    <div className="btn-group">
                        {page > 1 && (
                            <button
                                className="btn btn-primary m-4"
                                style={{ width: "200px" }}
                                onClick={handlePrevPage}
                            >
                                ← Previous Page
                            </button>
                        )}
                        {page < totalPages && (
                            <button
                                className="btn btn-primary m-4"
                                style={{ width: "200px" }}
                                onClick={handleNextPage}
                            >
                                Next Page →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeOverview;
