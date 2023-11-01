import {IElement} from "./Elements/IElement.ts";

export class Block{
    constructor(elements: IElement[]) {
        this.elements = elements
    }
    elements: IElement[];
}