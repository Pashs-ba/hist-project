import {Block} from "./Block.ts";

export class Quest{
    blocks: {[key: string]: Block};
    public start: string;
}