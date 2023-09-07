import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Router} from "../../Router/Router";
import './App.scss'
import mainStateStore from "../../lib/store/main-state-store";
import {NavBar} from "../UI/NavBar/NavBar";
import Modal from "../UI/Modal/Modal";

export default observer(() => {
    useEffect(() => {
        mainStateStore.dataLoans()
        mainStateStore.apiCheck()
        mainStateStore.btnCheck()
    }, [])
    return (
        <div>
            <Modal/>
            <NavBar/>
            <div className='md:container md:mx-auto m-4 mb-24'>
                <Router/>
            </div>
        </div>
    )
})


