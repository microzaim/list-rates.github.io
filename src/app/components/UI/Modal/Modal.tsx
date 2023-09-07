import React from 'react';
import mainStateStore from "../../../lib/store/main-state-store";
import {observer} from "mobx-react-lite";

export default observer(() => {

        return (
            <div>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={mainStateStore.modalState}/>
                <div className="modal">
                    <div className=" text-center">
                        <span className="loading loading-infinity loading-lg text-white "></span>
                    </div>
                </div>
            </div>
        )
    }
)

