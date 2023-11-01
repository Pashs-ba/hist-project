import {IElement} from "./IElement.ts";

export class TextElement implements IElement {
    constructor(text: string, header: string) {
        this.text = text
        this.header = header
    }

    text: string;
    header: string;
}