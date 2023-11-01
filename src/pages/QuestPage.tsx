import {useEffect, useState} from "react";
import {Quest} from "../types/Quest.ts";
import {GetQuest} from "../api/quests.ts";
import QuestionElement from "../elements/QuestionElement.tsx";
import Introduction from "../elements/Inroduction.tsx";

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
        <>
            {
                quest.questions.length != 0 ? (
                    <div className={"container"}>
                        {currentQuestion < 0 ? <Introduction nextQuestion={() => {
                            setCurrentQuestion(0)
                        }}/> : null}
                        {
                            currentQuestion >= 0 && currentQuestion < quest.questions.length ? (
                                <QuestionElement question={quest.questions[currentQuestion]}/>
                            ) : null
                        }

                    </div>
                ) : null
            }

        </>
    )
}