import Categories from "./Categories";
import ProductList from "./ProductList";
import { useState } from "react";
import products from "./productData";


type Category = keyof typeof products | null;

function Page() {
    const [category, setCategory] = useState<Category>(null);

    return (
        <>
            <Categories category={category} setCategory={setCategory} />
            <ProductList category={category} />
        </>
    );
}

export default Page;
