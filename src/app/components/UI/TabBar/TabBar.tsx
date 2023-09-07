"use client"
import React from 'react';
import {observer} from 'mobx-react-lite'
import './TabBar.scss'
import routes from "../../../lib/routes";



export default observer(() => {

        const pathName = window.location.href
        const dataTabBat = [
            {
                href: routes.HOME,
                icon: 'fa-solid fa-house'
            },
            {
                href: routes.INFO,
                icon: 'fa-solid fa-circle-info'
            },
        ]
        return (
            <div className="btm-nav">
                {
                    dataTabBat.map((item) => (
                        <a href={item.href} key={item.href}>
                            <i className={`${item.icon} ${pathName.includes(item.href)?"tab-bar__icon--active":'tab-bar__icon'}`}/>
                        </a>
                    ))
                }
            </div>
        );
    }
)
