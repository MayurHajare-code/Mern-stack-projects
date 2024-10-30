import './style/header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom border-1 border-light  py-3">
                <div className="container px-5">
                    <a className="navbar-brand" href="#">Coffee Ko</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto m-2">
                            <li className="nav-item px-2">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;