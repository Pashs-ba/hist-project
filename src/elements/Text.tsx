import {NextElement} from "../types/results/NextElement.ts";
import {PreviousElement} from "../types/results/PreviousElement.ts";
import {ResultBase} from "../types/results/ResultBase.ts";

export default function Text({resultProcessing, text, header}: {
    resultProcessing: (result: ResultBase) => void,
    text: string,
    header: string
}) {
    return (
        <>
            (this._header ?? <h1>{header}</h1>)
            <p>{text}</p>
            <button
                onClick={() => resultProcessing(new NextElement())}
            >Next
            </button>
            <button
                onClick={() => resultProcessing(new PreviousElement())}
            >Previous
            </button>
        </>
    )
}