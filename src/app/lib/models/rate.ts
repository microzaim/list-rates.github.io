import {Global} from "./global";


export interface IRate {
    value: number
    position: number
    number_seats: string
}

export class Rate extends Global<IRate, Rate> implements IRate {

    value: number
    position: number
    number_seats: string

    constructor(obj: IRate) {
        super(obj)


    }

}
