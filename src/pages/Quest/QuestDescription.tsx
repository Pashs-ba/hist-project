import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {LongQuestDescription} from "../../types/LongQuestDescription.ts";
import {GetQuestLongDescription} from "../../api/quests.ts";
import DescriptionElement from "../../elements/mainPage/QuestDescription/DescriptionElement.tsx";
import RedirectButton from "../../elements/RedirectButton.tsx";
import "../../style/quests/mainPage.css"
export default function () {
    const [questDescription, setQuestDescription] = useState({} as LongQuestDescription)
    const navigate = useNavigate();
    let {id} = useParams();
    useEffect(() => {
        GetQuestLongDescription(id ? id : "").then((res) => {
            setQuestDescription(res)
            console.log(res)
        })
    }, [])


    return (
        <div className={" d-flex flex-column align-items-center central-block"}>
            <img src={questDescription.imageUrl} alt={"image"} className={"mw-100"}/>
            <div className="flex flex-column align-items-center">
                <div className={"mt-5 fw-bolder fs-2 text-center"}>{questDescription.header}</div>
                <div className="mt-3 border-bottom border-top d-flex justify-content-evenly px-3 py-4 border-dark border-2 flex-column flex-lg-row">
                    <DescriptionElement title={"Время"} text={questDescription.time}/>
                    <DescriptionElement title={"Ключевые точки"} text={questDescription.keyPoints}/>
                    <DescriptionElement title={"Начальная точка"} text={questDescription.startingPoint}/>
                    <DescriptionElement title={"Сложность"} text={questDescription.difficult}/>
                </div>
                <div className={" d-flex justify-content-center align-items-center mt-4"}>
                    <div className={"rounded-circle d-flex align-items-center justify-content-center"}
                         style={{
                             backgroundColor: "#CFE2FF",
                             display: "block",
                             width: 45,
                             height: 45
                         }}>
                        <i className={`bi bi-phone-flip `}
                           style={{
                               fontSize: "1.132rem"
                           }}
                        ></i>
                    </div>
                    <div className={"ms-2"}>
                        Доступные форматы: {questDescription.formats}
                    </div>
                </div>
                <div className={"mt-4 fw-bolder text-center fs-4"}>Описание квеста</div>
                <div className={"mt-4"}>
                    {questDescription.description}
                </div>
                <div className={"my-5 text-center d-flex justify-content-center"}>
                    <RedirectButton text={"Пройти квест"} onClick={() => {
                        questDescription.link[0] === "/" ? navigate(questDescription.link) : window.open(questDescription.link)
                    }}/>
                </div>
                <div className={"mt-4 fw-bolder fs-4"}>
                    Над заданиями для квеста работали
                </div>

                <div className={"mt-4"}>
                    {questDescription.authors}
                </div>
            </div>

        </div>
    )
}