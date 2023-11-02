import {Question} from "../types/Question.ts";
import NavigationButtons from "./NavigationButtons.tsx";

export default function QuestionElement({question, prevQuestion, nextQuestion}: {
    question: Question,
    nextQuestion: () => void,
    prevQuestion: () => void
}) {

    return (
        <div>
            <h1>{question.header}</h1>
            <p>{question.text}</p>
            <NavigationButtons rightClick={nextQuestion}
                               leftClick={prevQuestion}/>
        </div>
    )
}