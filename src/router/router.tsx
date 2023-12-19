import App from "../App.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import QuestDescription from "../pages/QuestDescription.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/quest/:id"} element={<QuestDescription/>}/>
            </Route>
        </Routes>
    )
}