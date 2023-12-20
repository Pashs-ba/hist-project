import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetQuestById} from "../../api/quests.ts";
import RedirectButton from "../../elements/RedirectButton.tsx";

export default function () {
    const {id} = useParams();
    const [quest, setQuest] = useState({} as Quest)
    const navigate = useNavigate();
    useEffect(() => {
        GetQuestById(id ? id : "").then(quest => setQuest(quest))
    }, [])
    return (
        <div className={"container step-header"}>
            {quest.finalText}
            <div className="d-flex justify-content-center mt-5">
                <RedirectButton text={"Выбрать другой квест"} onClick={() => {
                    navigate("/")
                }}/>
            </div>
            <div className="step-header">
                Если вам не сложно и вы хотели бы поделиться своими впечатлениями, мы будем очень рады, если вы оставите
                отзыв о вашем прохождении квеста. Ваши отзывы помогут нам улучшить наш сервис и создать еще более
                интересные и захватывающие приключения. Спасибо за ваше время и участие!
            </div>
            <div className="d-flex justify-content-center mt-5">
                <RedirectButton text={"Оставить отзыв"} onClick={() => {
                    navigate("/")
                }}/>
            </div>
        </div>

    )
}