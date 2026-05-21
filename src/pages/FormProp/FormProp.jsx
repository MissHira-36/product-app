import React from "react";
function FormProp({ formData, errors, handleChange, handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>First Name: *</label>
                        <input
                            type="text"
                            name="full_Name"
                            value={formData.full_Name}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last Name: *</label>
                        <input
                            type="text"
                            name="user_Name"
                            value={formData.user_Name}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Email: *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phone_Num"
                            value={formData.phone_Num}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Password: *</label>
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div>
                        <label>Confirm Password: *</label>
                        <input
                            type="text"
                            name="confirm_Password"
                            value={formData.confirm_Password}
                            onChange={handleChange}
                        />
                        {errors.confirm_Password && <span className="error">{errors.confirm_Password}</span>}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Card Number: *</label>
                        <input
                            type="text"
                            name="card_Number"
                            value={formData.card_Number}
                            onChange={handleChange}
                        />
                        {errors.card_Number && <span className="error">{errors.card_Number}</span>}
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </div>
    );
}
export default FormProp;