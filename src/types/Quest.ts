type Question = {
    question: string;
    text?:string
    trueAnswer: string[]
    historicalText?: string,
    header: string
    hints?: string
    nextText?: string
}

type Quest = {
    id: string;
    name: string;
    questions: Question[];
    startInstructions?:string
    finalText?:string
}