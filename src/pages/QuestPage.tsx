import {useEffect, useState} from "react";
import {Quest} from "../types/Quest.ts";
import {GetQuest} from "../api/quests.ts";
import QuestionElement from "../elements/QuestionElement.tsx";
import Introduction from "../elements/Inroduction.tsx";
import End from "../elements/End.tsx";

export default function QuestPage() {
    const [quest, setQuest] = useState({questions: []} as Quest)
    const [currentQuestion, setCurrentQuestion] = useState(-1)
    useEffect(() => {
        GetQuest().then((res) => {
            console.log(res)
            setQuest(res)
        })
    }, [])
    return (
        <div className={"container"}>
            <div className={"row justify-content-center align-items-center full-height"}>
                {
                    quest.questions.length != 0 ? (
                        <div className={"col-5 card p-3"}>

                            {
                                currentQuestion < 0 ?
                                    <Introduction nextQuestion={() => {
                                        setCurrentQuestion(0)
                                    }}/> : null
                            }
                            {
                                currentQuestion >= 0 && currentQuestion < quest.questions.length ? (
                                    <QuestionElement question={quest.questions[currentQuestion]}
                                                     nextQuestion={() => {
                                                         setCurrentQuestion(currentQuestion + 1)
                                                     }}
                                                     prevQuestion={() => {
                                                         setCurrentQuestion(currentQuestion - 1)
                                                     }}
                                    />
                                ) : null
                            }
                            {
                                currentQuestion >= quest.questions.length ?(
                                    <End/>
                                ): null
                            }

                        </div>
                    ) : null
                }

            </div>
        </div>
    )
}