// import React, { useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// const RecivedApi = () => {
//     const navigate = useNavigate();
//     const params = useParams();
//     console.log(params, "it's params Data");

//     const location = useLocation();
//     const StateData = JSON.parse(location.state);
//     console.log(StateData, "state");

//     const [data, setData] = useState(StateData);

//     const handleSave = async (e) => {
//         e.preventDefault();

//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/posts/${StateData.id}`,
//             {
//                 method: "PUT",
//                 body: JSON.stringify({
//                     id: data.id,
//                     title: data.title,
//                     body: data.body,
//                     userId: data.userId,
//                 }),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//             }
//         );

//         response.json().then((updatedPost) => {
//             console.log("Updated Post:", updatedPost);
//             navigate("/posts");
//         });
//     };

//     return (
//         <div className="container styling">
//             <form onSubmit={handleSave}>
//                 <div className="text-center">
//                     <h1>Details</h1>
//                 </div>
//                 <div className="form-row">
//                     <input
//                         type="text"
//                         name="title"
//                         id="title"
//                         value={data.title}
//                         onChange={(e) => {
//                             setData({
//                                 ...data,
//                                 [e.target.name]: e.target.value,
//                             });
//                         }}
//                     />
//                 </div>

//                 <div className="form-row">
//                     <textarea
//                         name="body"
//                         id="body"
//                         value={data.body}
//                         onChange={(e) => {
//                             setData({
//                                 ...data,
//                                 [e.target.name]: e.target.value,
//                             });
//                         }}
//                     />
//                 </div>

//                 <div className="text-center">
//                     <button className="btn" type="submit">
//                         Save Changes
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default RecivedApi;



import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios"; 

const GetDetails = () => {
    const navigate = useNavigate();

    const params = useParams();
    console.log(params, "params,params");

    const location = useLocation();
    const stateData = JSON.parse(location.state);
    console.log(stateData, "Statedata");

    const [data, setData] = useState(stateData);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/posts/${stateData.id}`, 
                {
                    id: data.id,
                    title: data.title,
                    body: data.body,
                    userId: data.userId,
                }, 
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
            const Updatedpost = response.data;

            console.log("Updated Post:", Updatedpost);
            navigate("/posts"); 
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    return (
                <div className="container styling">
                    <form onSubmit={handleSave}>
                        <div className="text-center">
                            <h1>Details</h1>
                        </div>
                        <div className="form-row">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={data.title}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
        
                        <div className="form-row">
                            <textarea
                                name="body"
                                id="body"
                                value={data.body}
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    });
                                }}
                            />
                        </div>
        
                        <div className="text-center">
                            <button className="btn" type="submit">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
    );
};

export default GetDetails;
