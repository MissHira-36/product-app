import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../useContextHook/productAppContext";
function ThankuPage() {
    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate("/");
    }
    const { contextState, setcontextState} = useProductContext();
    return (
        <div className="thanks">
            <div className="text-center">
                <h1>{contextState}</h1>
            </div>
            <img src="https://bookly-theme.myshopify.com/cdn/shop/files/slider.jpg?v=1613722505&width=1500" alt="" />
            <div className="position">
                <h1>Thank You for Purchasing Our Product<i className="fa-regular fa-face-smile ps-3 pt-3"></i></h1>
                <button className="btn" type="submit" onClick={handleOnClick}>Go to Home</button>
            </div>
        </div>
    );
}
export default ThankuPage;