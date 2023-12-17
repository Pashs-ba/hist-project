import ImageHome from "../assets/image-home.png"
import Title from "../elements/mainPage/Title.tsx";
import Pluses from "../elements/mainPage/Pluses.tsx";
import Description from "../elements/mainPage/Description.tsx";
import {lazy, Suspense} from "react";
import Loading from "../elements/Loading.tsx";
import ReviewsBlock from "../elements/mainPage/ReviewsBlock/ReviewsBlock.tsx";

export default function HomePage() {
    const QuestSelection = lazy(() => import("../elements/mainPage/QuestSelection/QuestSelection.tsx"))
    return (
        <div className={"full-height background-size"}
             style={{
                 backgroundImage: `url(${ImageHome}`,
                 backgroundRepeat: "no-repeat",
             }}>
            <Title/>
            <div className="container">
                <Description/>
                <Pluses/>
                <Suspense fallback={<Loading/>}>
                    <QuestSelection/>
                </Suspense>
                <Suspense fallback={<Loading/>}>
                    <ReviewsBlock/>
                </Suspense>

            </div>
        </div>

    )
}