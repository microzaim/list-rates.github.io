import React from 'react';
import { observer } from 'mobx-react-lite';
import MainStateStore from "../../../lib/store/main-state-store";
import Rate from '../../UI/Rate/Rate';
import { Card } from "../../UI/Card/Card";
import './Home.scss';
import mainStateStore from "../../../lib/store/main-state-store";

export default observer(() => {



    const visibleData = MainStateStore.bettingData.slice(0, 15);

    return (
        <div>
            <div className='text-center p-4 flex justify-center font-extrabold'>
                <i className="fa-solid fa-fire-flame-curved"/> Рейтинг
            </div>
            <Rate/>
            {!mainStateStore.modalState ?
                visibleData.length !== 0 ?
                    <div className="page-home__cards">
                        {visibleData.map((item, index) => (
                            <Card key={item.title + index} data={item}/>
                        ))}
                    </div>
                    :
                    <div className={`page-home__not-found-text`}>
                        ЭЙ, у нас нет такого!
                    </div>
                :
                null
            }
        </div>
    );
});
