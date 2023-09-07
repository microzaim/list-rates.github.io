import {makeAutoObservable} from 'mobx'
import {DataItem} from "../models/dataItem";
import services from "../services/services";


interface IMainStateStore {
    bettingData: DataItem[]
    stateCity: string
    btnClosureStatus: boolean
    modalState:boolean
}

class MainStateStore implements IMainStateStore {
    bettingData: DataItem[] = []
    stateCity = ''
    btnClosureStatus = false
    modalState = false

    constructor() {
        makeAutoObservable(this)
    }

    setBettingData(val: DataItem[]): void {
        this.bettingData = val
    }

    setStateCity(val: string): void {
        this.stateCity = val
    }

    setBtnClosureStatus(val: boolean): void {
        this.btnClosureStatus = val
    }

    setModalState(val: boolean): void {
        this.modalState = val
    }

    dataLoans(): void {
        services
            .getBetting()
            .then((res) => {
                this.setBettingData(res)
            })

    }

    apiCheck(): void {
        services
            .getIp()
            .then((res) => {
                this.setStateCity(res)
            })

    }

    btnCheck(): void {
        services
            .getStatusBtn()
            .then((res) => {
                this.setBtnClosureStatus(res)
            })

    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MainStateStore()
