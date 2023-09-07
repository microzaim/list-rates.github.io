import React from 'react';
import {observer} from 'mobx-react-lite'
import './Rate.scss'
import mainStateStore from "../../../lib/store/main-state-store";
import {getCurrentDateInRussianFormat} from "../../../generic/Date/date";

export default observer(() => {

        const filterData = mainStateStore.bettingData.slice(0, 3)
        return (
            <div>
                <div className='card rate'>
                    {
                        filterData.map((bet, index) => (
                            index < 3 ?
                                <a key={`rate-${bet.title + index}`} className='rate__card  no-animation'
                                   href={bet.link}>
                                    <div className='rate__title'>
                                        <img src={bet.img} alt={bet.title} className='rate__img'/>
                                        {bet.title}
                                    </div>
                                    <div className='rate__stat'
                                         style={{color: bet.rate.number_seats.includes('+') ? "#19AB4A" : "#FC3F1D"}}>
                                        <i className="fa-solid fa-chart-simple rate__icon"/>
                                        <span className='rate__number'>
                                        {bet.rate.number_seats}
                                    </span>
                                    </div>
                                </a> :
                                null
                        ))
                    }
                    <div className='text-center text-gray-400'>
                        от {getCurrentDateInRussianFormat()}
                    </div>
                </div>
            </div>
        );
    }
)
