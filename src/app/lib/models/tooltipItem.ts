import {Global} from "./global";


export interface ITooltipItem  {
    title: string;
    desc: string;
    icon: string;
    color: string;
}

export class TooltipItem extends Global<ITooltipItem, TooltipItem> implements ITooltipItem {
    title: string;
    desc: string;
    icon: string;
    color: string;

    constructor(obj: ITooltipItem) {
        super(obj)
    }

}
