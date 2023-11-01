import {Question} from "../types/Question.ts";

export default function QuestionElement({question}: { question: Question }) {

    return (
        <div>
            <h1>{question.header}</h1>
            <p>{question.text}</p>
        </div>
    )
}