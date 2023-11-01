import {AnswerVariant} from "./AnswerVariant.ts";

export type Question = {
    variantList: AnswerVariant[]
    text: string,
    header: string,
    trueAnswerNames: string[]
}