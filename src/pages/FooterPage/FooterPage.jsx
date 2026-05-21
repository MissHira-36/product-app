import React from "react";
function FooterPage () {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bookshop">
                            <img src="https://bookly-theme.myshopify.com/cdn/shop/files/footer-logo_x24_2x_1.png?v=1678339407" alt="" className="img-fluid mb-3" />
                            <ul>
                                <li>1203 Town Center</li>
                                <li>Drive FL 33458 USA</li>
                                <li>+0000 123 456 789</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bookshop">
                            <div className="text"><h4>Help</h4></div>
                            <ul>
                                <li>Search</li>
                                <li>Help</li>
                                <li>Information</li>
                                <li>Privacy Policy</li>
                                <li>Shipping Information</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bookshop">
                            <div className="text"><h4>Support</h4></div>
                            <ul>
                                <li>Search Terms</li>
                                <li>Advanced Search</li>
                                <li>Help & Faqs</li>
                                <li>Store Location</li>
                                <li>Order and Returns</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bookshop">
                            <div className="text"><h4>Information</h4></div>
                            <ul>
                                <li>Contact</li>
                                <li>About</li>
                                <li>Carrers</li>
                                <li>Refund & Returns</li>
                                <li>Deliveries</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterPage;