import {Link} from "react-router-dom";

export default function (){
    return (
        <div className={"full-height d-flex flex-column justify-content-center align-items-center"}>
            <h1>404 Страница не найдена</h1>
            <Link to={"/"} className={"mt-4"}>На главную</Link>
        </div>
    )
}