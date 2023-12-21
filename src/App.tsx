import {Link, Outlet} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import Logo from "./assets/Logo.svg"

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img alt={"logo"} src={Logo}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-center align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-5">
                                <HashLink className="nav-link active fw-bold fs-5" aria-current="page" to="/#description">О проекте</HashLink>
                            </li>
                            <li className="nav-item mx-5">
                                <HashLink className="nav-link active fw-bold fs-5" aria-current="page" to="/#quests">Квесты</HashLink>
                            </li>
                            <li className="nav-item mx-5">
                                <HashLink className="nav-link active fw-bold fs-5" aria-current="page" to="/#reviews">Отзывы</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default App
