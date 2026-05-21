import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../useContextHook/productAppContext";
const BookCards = () => {
    const [books, setBooks] = useState([
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-76.jpg?v=1622275073&width=1946",
            name: "SAGE ISAIAS",
            bname: "Girls at the Golden City",
            price: "$12.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-57.jpg?v=1587119315&width=1946",
            name: "James Dylan",
            bname: "Vistit in the North ",
            price: "$10.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-87.jpg?v=1587118936&width=1946",
            name: "Erik Martin",
            bname: "The Stadium by Night",
            price: "$35.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/booknew-3.jpg?v=1587119671&width=1946",
            name: "Sage Isaias",
            bname: "When The Stars Align",
            price: "$22.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-1.jpg?v=1613036885&width=1946",
            name: "James Dylan",
            bname: "Donate a Book",
            price: "$14.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-4.jpg?v=1587113962&width=1946",
            name: "Jayden Judah",
            bname: "Books For a Cause ",
            price: "$10.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-34.jpg?v=1587116925&width=1946",
            name: "Sage Isaias",
            bname: "Home Made Meals",
            price: "$25.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
        {
            imagepath: "https://bookly-theme.myshopify.com/cdn/shop/products/shop-new-102.jpg?v=1587120877&width=1946",
            name: "Sage Isaias",
            bname: "When you Dream",
            price: "$15.00",
            description: "A captivating tale of friendship and resilience, following a group of girls as they navigate the challenges of adolescence in a vibrant city, discovering their identities and dreams along the way.",
        },
    ]);
    const handleArrayChange = (e, index) => {
        const newBooks = [...books];
        // let targertobj = newBooks[index]
        // targertobj={
        //     ...targertobj,
        //     [e.target.name]: e.target.value,

        // }
        // newBooks = targertobj;
        newBooks[index] = {
            ...newBooks[index],
            [e.target.name]: e.target.value,
        };
        setBooks(newBooks);
    };
    const { contextState , setcontextState } = useProductContext();
    const navigate = useNavigate();
    const handleOnClick = (books) => {
        const slugStr = books.name.replaceAll(" ", "-");
        console.log(slugStr)

        navigate("/myform/" + slugStr, { state: JSON.stringify(books) });
    }

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center mb-5 text-center mt-2">
                <div className="text-center pt-3">
                    <h1>{contextState}</h1>
                    <h2>NEW <span>ARRIVALS</span></h2>
                </div>
                {books.map((books, index) => (
                    <div className="col-lg-3 pt-5" key={index}>
                        <div className="card">
                            <img src={books.imagepath} alt={books.bname} className="img-fluid" />
                            <div className="card-body">
                                <p>{books.name}</p>
                                {/* <h4>{books.bname}</h4>*/}
                                <input
                                    type="text"
                                    name="bname"
                                    value={books.bname}
                                    onChange={(e) => handleArrayChange(e, index)}
                                />
                                <p>{books.price}</p>
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                    <button className="btn" onClick={(e) => handleOnClick(books , e)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default BookCards;




// const handleArrayChange = (index, newValue) => {
//     const newBooks = [...books];
//     newBooks[index].bname = newValue;
//     setBooks(newBooks);
// };

