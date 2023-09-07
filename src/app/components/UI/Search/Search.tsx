import React, {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite'
import './Search.scss'
import pageHomeStore from "../../../lib/store/page-home-store";
import Input from "../Input/Input";
import MainStateStore from "../../../lib/store/main-state-store";



export default observer(() => {
        const [state, setState] = useState(false)

        const filteredData = MainStateStore.bettingData.filter((val) => {
            return val.title.toLowerCase().includes(pageHomeStore.valueSearch.toLowerCase());
        });

        const visibleData = filteredData.slice(0, 15);
        const onChangeState = useCallback(() => {
            setState(prevState => !prevState)
        }, [])
        return (
            <div>

                <label htmlFor="my_modal_7" className="btn btn-ghost"><i className="fa-solid fa-magnifying-glass" style={{fontSize:'1.5rem'}}/></label>
                <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={state} onChange={onChangeState}/>
                <div className="modal search__modal">
                    {
                        state &&
                        <Input autoFocus={true} onClick={onChangeState} icon={"fa-solid fa-arrow-left"}
                               placeholder={'Найди'}
                               value={pageHomeStore.valueSearch}
                               onChange={(e) => pageHomeStore.setValueSearch(e.target.value)}/>

                    }

                    {
                        pageHomeStore.valueSearch.length !== 0 ?
                            visibleData.map((bet, index) => (
                                <a key={`search-${bet.title + index}`} className='search__card  no-animation'
                                   href={bet.link}>
                                    <div className='search__title'>
                                        <img src={bet.img} alt={bet.title} className='search__img'/>
                                        {bet.title}
                                    </div>
                                    <i className="fa-solid fa-magnifying-glass"/>
                                </a>
                            ))
                            :
                            null
                    }
                </div>
            </div>

        );
    }
)
