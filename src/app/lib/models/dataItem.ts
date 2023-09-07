import {Rate} from "./rate";
import {TooltipItem} from "./tooltipItem";
import {Global} from "./global";


export interface IDataItem  {
    title: string;
    img: string;
    link: string;
    rate: Rate;
    number_of_reviews: number;
    tooltip: TooltipItem[];
    minimum_deposit: number;
    bonus: number;
    broadcasts: boolean;
}

export class DataItem extends Global<IDataItem, DataItem> implements IDataItem {

    title: string;
    img: string;
    link: string;
    rate: Rate;
    number_of_reviews: number;
    tooltip: TooltipItem[];
    minimum_deposit: number;
    bonus: number;
    broadcasts: boolean;

    constructor(obj: IDataItem) {
        super(obj)
        this.tooltip = obj.tooltip ? obj.tooltip.map((e) => new TooltipItem(e)) : []

    }

}
