import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetQuestById} from "../../api/quests.ts";

import "../../style/quests/stepPage.css"

export default function () {
    const {id, step} = useParams();
    const [quest, setQuest] = useState<Quest>();
    const [answer, setAnswer] = useState<string>();
    const [showHint, setShowHint] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        GetQuestById(id ? id : "").then((quest) => setQuest(quest))
    }, [])

    function GetQuestion(): Question | undefined {
        return quest?.questions[Number(step)]
    }


    return (
        <div>
            <div className="container">
                <div className={"fw-bold fs-3 step-header"}>{GetQuestion()?.header}</div>
                {
                    GetQuestion()?.text ? <div className="mt-5">{GetQuestion()?.text}</div> : null
                }
                <div className="mt-5 fw-bold fs-5 text-center">{GetQuestion()?.question}</div>
                {
                    showHint ? (
                        <>
                            <div className={"mt-5 fw-bold fs-5 text-center"}> К сожалению ваш ответ неверный, попробуйте
                                еще раз
                            </div>
                            {
                                GetQuestion()?.hints ? (
                                    <>
                                        <div className={"fw-bold fs-5 text-center"}><i
                                            className={"bi bi-lightbulb me-3"}></i>Подсказка:
                                        </div>
                                        <div className=" text-center"> {GetQuestion()?.hints}</div>
                                    </>
                                ) : null
                            }

                        </>
                    ) : null
                }
                <div className="row mt-5">
                    <div className="col-10">
                        <input className={"form-control form-control-lg"}
                               type={"text"}
                               value={answer}
                               onChange={e => setAnswer(e.target.value)}/>
                    </div>
                    <div className="col-2 text-center">
                        <button className={"btn btn-primary btn-lg"} onClick={() => {
                            let trueAnswers = GetQuestion()?.trueAnswer;
                            trueAnswers = trueAnswers ? trueAnswers : [];
                            if (answer != undefined && trueAnswers.includes(answer)) {
                                navigate(`/quest/self/${id}/${step}/final`)
                            } else {
                                setShowHint(true)
                            }
                            setAnswer("")
                        }}>Ответить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}