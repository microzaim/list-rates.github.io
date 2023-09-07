import {makeAutoObservable} from "mobx";


interface IPageHomeStore {
    valueSearch: string
}

class PageHomeStore implements IPageHomeStore {
    valueSearch = ''

    constructor() {
        makeAutoObservable(this)
    }

    setValueSearch(val: string): void {
        this.valueSearch = val
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PageHomeStore()
