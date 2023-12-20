import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetQuestById} from "../../api/quests.ts";

export default function () {
    const {id, step} = useParams();
    const [quest, setQuest] = useState<Quest>();
    const navigate = useNavigate();
    useEffect(() => {
        GetQuestById(id ? id : "").then((quest) => setQuest(quest))
    }, [])

    function GetQuestion(): Question | undefined {
        return quest?.questions[Number(step)]
    }

    return (
        <div className="container ">
            <div className={"text-center"}>
                <div className={"fw-bold fs-3 step-header "}>Поздравляем!</div>
                <div className={"mt-4"}>Правильный ответ - {GetQuestion()?.trueAnswer.join(", ")}</div>
            </div>
            {

                GetQuestion()?.historicalText ? (
                    <>
                        <div className={"fw-bold fs-4"}>
                            <i className={"bi bi-pencil-square me-4"}/>Историческая справка
                        </div>
                        <div className={"mt-4"}>{GetQuestion()?.historicalText}</div>
                    </>) : null
            }
            {
                GetQuestion()?.nextText ? (
                    <div className={"text-center"}>
                        <div className={"fw-bold fs-4 mt-5 "}>Следующая точка</div>
                        <div className={" mt-4"}>{GetQuestion()?.nextText}</div>
                    </div>
                ) : null
            }
            <div className={"d-flex justify-content-end mt-5"}>
                <button className={"btn btn-primary btn-lg"} onClick={()=>{
                    if (Number(step) +1 === quest?.questions.length) {
                        navigate(`/quest/self/${id}/final`)
                    } else {
                        navigate(`/quest/self/${id}/${Number(step) +1}`)
                    }
                }}>{Number(step) +1 === quest?.questions.length? "Закончить": "Следующяя точка"}</button>
            </div>

        </div>
    )
}