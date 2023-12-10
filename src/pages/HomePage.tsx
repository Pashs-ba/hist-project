import ImageHome from "../assets/image-home.png"
import Title from "../elements/mainPage/Title.tsx";
import Pluses from "../elements/mainPage/Pluses.tsx";

export default function HomePage() {
    return (
        <div className={"full-height background-size"}
             style={{
                 backgroundImage: `url(${ImageHome}`,
                 backgroundRepeat: "no-repeat",
             }}>
            <Title/>
            <Pluses/>
        </div>

    )
}