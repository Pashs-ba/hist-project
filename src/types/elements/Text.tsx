import {IElement} from "./IElement.ts";
import {ResultBase} from "../results/ResultBase.ts";
import {ReactElement} from "react";
import {NextElement} from "../results/NextElement.ts";
import {PreviousElement} from "../results/PreviousElement.ts";

class Text implements IElement {
    _text: string;
    _header?: string;

    constructor(resultProcessing: (result: ResultBase) => null, text: string, header?: string) {
        this._text = text;
        this._header = header;
        this._ResultProcessing = resultProcessing;
    }

    Render(): ReactElement {
        return (
            <>
                (this._header ?? <h1>{this._header}</h1>)
                <p>{this._text}</p>
                <button
                    onClick={_ => this._ResultProcessing(new NextElement())}
                >Next</button>
                <button
                    onClick={_ => this._ResultProcessing(new PreviousElement())}
                >Previous</button>
            </>
        )
    }

    _ResultProcessing: (result: ResultBase) => null;
}