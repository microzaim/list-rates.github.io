import React from 'react';
import './Card.scss'
import {DataItem} from "../../../lib/models/dataItem";
import {Tooltip} from '../Tooltip/Tooltip';
import {FormatNumberWithCommas} from "../../../../core/Function/FormatCurrency";
import {CheckingLink} from "../../../../core/Function/CheckingLink";


interface ICard {
    data: DataItem
}

export const Card = ({data}: ICard) => {


    const desc = [
        {
            title: "Трансляция",
            value: data.broadcasts ? "Есть" : "Нет",
            icon: "fa-solid fa-video",
        },
        {
            title: "Минимальный депозит",
            value: `от ${FormatNumberWithCommas(data.minimum_deposit)} ₽`,
            icon: "fa-solid fa-wallet",
        },
        {
            title: "Бонус",
            value: `до ${FormatNumberWithCommas(data.bonus)} ₽`,
            icon: "fa-solid fa-gift",
        },
    ]


    return (
        <div className="card card-body">
            <div className='card__title'>
                <div className='flex align-middle items-center'>
                    <img className='card__img '
                         src={data.img}
                         alt="Shoes"/>
                    <div style={{textAlign: 'center'}} className='ml-2'>
                        <div className='card__name'>
                            {data.title}
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {
                                data.tooltip.map((tool, index) => (
                                    <Tooltip key={`${tool.title}-${index}`}
                                             title={<i className={tool.icon} style={{color: tool.color}}/>}
                                             description={tool.desc}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='card__rate'
                     style={{color: data.rate.value > 9 ? "#19AB4A" : data.rate.value < 9 && data.rate.value > 6 ? "#FFDE52" : data.rate.value > 6 ? "#FC3F1D" : "#FC3F1D"}}>
                    {data.rate.value}
                </div>

            </div>
            <div className='card__desc'>
                {
                    desc.map((descItem, index) => (
                        <Tooltip className='card__item bg-base-200' key={`${descItem.title}-${index}`} title={
                            <>
                                <i className={descItem.icon}/>
                                {descItem.value}
                            </>
                        } description={descItem.title}/>
                    ))
                }
            </div>
            <button className="btn card__btn" onClick={() => CheckingLink(data.link)}>Играть</button>
        </div>
    );
};

