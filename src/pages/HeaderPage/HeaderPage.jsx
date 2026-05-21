import { Link, useNavigate } from "react-router-dom";
function HeaderPage() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/bookcards");
    }
    return (
        <header className="d-flex justify-content-space-between alighn-items-center">
            <div className="nav-logo">
                <img src="https://demos.shopifyteam.com/bookly/wp-content/uploads/sites/128/2020/04/logo1-2.png" alt="" />
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bookcards">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/myform">Contact</Link>
                            </li>
                            <li className="nav-item"> <Link to="/thankupage">Support</Link> </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" onClick={handleOnClick}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default HeaderPage;
