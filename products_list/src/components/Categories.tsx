function Categories({ category, setCategory }: any) {

    return (
        <div className="container mt-4 pt-3 pb-3">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className="form-select"
                        >
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="homeAppliances">Home Appliances</option>
                            <option value="clothing">Clothing</option>
                            <option value="beautyPersonalCare">Beauty Personal Care</option>
                            <option value="sportsOutdoors">Sports Outdoors</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Categories;