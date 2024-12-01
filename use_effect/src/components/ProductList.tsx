import { useEffect, useState } from "react";

interface ProductListProps {
    category: string;
}

export default function ProductList({ category }: ProductListProps) {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("Fetching data for category:", category);

        if (category === "Clothing") {
            setProducts(["Shirt", "Pants", "Jacket"]);
        } else if (category === "Household") {
            setProducts(["Sofa", "Table", "Lamp"]);
        } else {
            setProducts([]);
        }
    }, [category]);

    return (
        <div>

            {products.map((product) => <p key={product}>{product}</p>)
            }

        </div>
    );
}
