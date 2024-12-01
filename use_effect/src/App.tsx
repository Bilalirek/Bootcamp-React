import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import ProductList from "./components/ProductList";
import RealApi from "./components/RealApi";

function App() {
  // const [category, setCategory] = useState<string>("");

  return (
    <div>
      <RealApi />
      {/* <select
        onChange={(e) => setCategory(e.target.value)}
        className="form-select"
      >
        <option value="">Select a category</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>

      <ProductList category={category} /> */}
    </div>
  );
}

export default App;
