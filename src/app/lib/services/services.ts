import axios from 'axios'
import {DataItem} from "../models/dataItem";
import mainStateStore from "../store/main-state-store";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getIp() {
        mainStateStore.setModalState(true)
        let result: string = ''
        const url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=af772993d8ce4dada5690c0645f83e7e'
        await axios
            .get(url)
            .then((res) => {
                result = res.data.country_code
            })
            .catch(() => {
                // new Toaster({msg: 'Регион не определён', type: toast.TYPE.ERROR})
            })
            .then(() => {
                mainStateStore.setModalState(false)
            })

        return result
    },
    async getBetting(): Promise<DataItem[]> {
        mainStateStore.setModalState(true)
        let result: DataItem[]

        const url = 'https://functions.yandexcloud.net/d4e6upvijdku299oi7e2'

        await axios
            .get(url)
            .then((res) => {
                result = res.data
            })
            .catch(() => {
            })
            .then(() => {
                mainStateStore.setModalState(false)
            })
        // @ts-ignore
        return result
    },

    async getStatusBtn(): Promise<boolean> {
        mainStateStore.setModalState(true)
        let result: boolean

        const url = 'https://functions.yandexcloud.net/d4eppsl8tu75dffiqb40'

        await axios
            .get(url)
            .then((res) => {
                result = res.data.three
                // firstApp: false,//Займ онлайн storageru.github.io
                // secondApp: false,//ru займ microzaim.github.io
                // three: false,//BetList.github.io - BetList
            })
            .catch(() => {
                }
            )
            .then(() => {
                mainStateStore.setModalState(false)
            })

        // @ts-ignore
        return result
    },
}
