import App from "../App.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import QuestDescription from "../pages/Quest/QuestDescription.tsx";
import QuestPage from "../pages/Quest/QuestPage.tsx";
import QuestStep from "../pages/Quest/QuestStep.tsx";
import Page404 from "../pages/Page404.tsx";
import QuestionFinal from "../pages/Quest/QuestionFinal.tsx";
import QuestFinal from "../pages/Quest/QuestFinal.tsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/quest/:id"} element={<QuestDescription/>}/>
                <Route path={"/quest/self/:id"} element={<QuestPage/>}/>
                <Route path={"/quest/self/:id/final"} element={<QuestFinal/>}/>
                <Route path={"/quest/self/:id/:step/question"} element={<QuestStep/>}/>
                <Route path={"/quest/self/:id/:step/final"} element={<QuestionFinal/>}/>
                <Route path={"*"} element={<Page404/>}/>
            </Route>
        </Routes>
    )
}