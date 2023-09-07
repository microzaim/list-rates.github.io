import mainStateStore from "../../app/lib/store/main-state-store";

export const CheckingLink = (url: string) => {
    mainStateStore.setModalState(true)

    if (mainStateStore.stateCity === 'RU' && !mainStateStore.btnClosureStatus) {
        window.open(url,'_self')
        mainStateStore.setModalState(false)
    }

}
