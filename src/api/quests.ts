import {Quest} from "../types/Quest.ts";
import {Question} from "../types/Question.ts";


export function GetQuest() {
    return new Promise<Quest>( (resolve) => {
        const quest = {
            questions: [
                {
                    header: "Some",
                    text: "Some long text",
                    variantList: [
                        {name: "1", text: "Not true", description: "I sayed"},
                        {name: "2", text: "true", description: "Yepp"}
                    ],
                    trueAnswerNames: ["1"]
                } as Question
            ]
        } as Quest
        resolve(quest)
    })
}