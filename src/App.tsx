import {Outlet} from "react-router-dom";


function App() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Quests</span>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default App
