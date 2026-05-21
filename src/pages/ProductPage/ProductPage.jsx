import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../useContextHook/productAppContext";

function ProductPage() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        setcontextState("New Product Available!");
        navigate("/bookcards");
    }
    const { contextState, setcontextState } = useProductContext();
    return (
        <div className="product mt-3">
            <div className="container">
                <div className="text-center pb-4">
                    <h2>{contextState}</h2>  
                </div>
                <div className="ps-5 pe-5">
                    <img src="https://demos.shopifyteam.com/bookly/wp-content/uploads/sites/128/2020/04/Book.png" alt="" className="img-fluid" />
                </div>
                <div className="text-center mb-3">
                    <button className="btn" onClick={handleOnClick}>Shop Now</button>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;