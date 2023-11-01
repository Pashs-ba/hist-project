import {Quest} from "../types/Quest.ts";
import {Block} from "../types/Block.ts";
import {TextElement} from "../types/Elements/TextElement.ts";

export function GetQuests() {
    return new Promise<Quest>( (resolve) => {
        const quest = new Quest()
        quest.blocks = {
            "some": new Block([new TextElement("lorem", "some")])
        }
        quest.start = "some"
        resolve(quest)
    })
}