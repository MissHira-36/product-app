import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import FormProp from "../FormProp/FormProp";

function MyForm() {
    const [formData, setFormData] = useState({
        full_Name: "",
        user_Name: "",
        email: "",
        phone_Num: "",
        password: "",
        confirm_Password: "",
        card_Number: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validateForm = () => {
        const newErrors = {};
        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        if (!formData.confirm_Password) {
            newErrors.confirm_Password = "Confirm Password is required.";
        } else if (formData.password !== formData.confirm_Password) {
            newErrors.confirm_Password = "Passwords do not match.";
        }

        if (!formData.card_Number) {
            newErrors.card_Number = "Card number is required.";
        } else if (formData.card_Number !== "4242 4242 4242 4242") {
            newErrors.card_Number = "Card number does not match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
        setErrors((errors) => ({
            ...errors,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data submitted:", formData);
            navigate("/thankupage");
        }
    };

    const params = useParams();
    console.log(params, "paramsparamsparamsparams")
    const location = useLocation();
    let result = location.state
    console.log(result + "before parse")//before parse
    result = JSON.parse(result)
    console.log(result + "After parse") // After parse


    return (
        <div className="sty-form">
            <div className="container justify-content-center align-items-center">
                <div className="d-flex">
                    <img src={result.imagepath} alt="" className="img-fluid image" />
                    <div className="ps-3">
                        <h2>{result.name}</h2>
                        <h3>{result.price}</h3>
                        <p>{result.description}</p>
                    </div>
                </div>
                <div>
                        <FormProp
                            formData={formData}
                            errors={errors}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                </div>

            </div>
        </div>
    );
}

export default MyForm;