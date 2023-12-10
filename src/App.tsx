import {Outlet} from "react-router-dom";
import Logo from "./assets/Logo.svg"
import NavElement from "./elements/navbar/NavElement.tsx";

function App() {
    return (
        <>
            <nav className="navbar bg-primary justify-content-between px-5">
                <div className={"py-1"}>
                    <img alt={"logo"} src={Logo}/>
                </div>
                <div className={"d-flex"}>
                    <NavElement text={"О проекте"}/>
                    <NavElement text={"Квесты"}/>
                    <NavElement text={"Отзывы"}/>
                </div>
                <div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default App
