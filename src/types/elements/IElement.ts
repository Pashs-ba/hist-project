import {ReactElement} from "react";
import {ResultBase} from "../results/ResultBase.ts";

export interface IElement{
    _ResultProcessing: (result: ResultBase) => null;
    Render: () => ReactElement;
}