import products from "./productData";
import { useState, useEffect } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
}


interface ProductListProps {
    category: keyof typeof products | null;
}

function ProductList({ category }: ProductListProps) {
    const [productsList, setProductsList] = useState<Product[]>([]);

    useEffect(() => {
        if (category) {
            const selectedCategory = products[category];
            const title = category
            setProductsList(selectedCategory);
            document.title = title
        } else {
            setProductsList([]);
            document.title = "Home"
        }

    }, [category]);

    return (
        <div className="row d-flex justify-content-around p-3 text-center">
            {productsList.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-header bg-primary text-white">{p.name}</h5>
                            <p className="card-text">
                                <strong>Price:</strong> ${p.price}
                            </p>
                            <p className="card-text">
                                <strong>Brand:</strong> {p.brand}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ProductList;
