"use client"
import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import {observer} from 'mobx-react-lite'
import './Input.scss'


interface IInput {
    type?: string
    placeholder: string
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string | number | readonly string[] | undefined
    icon?: string
    onClick?: MouseEventHandler<HTMLElement> | undefined
    autoFocus?: boolean
}

export default observer(({type, placeholder, onChange, value, icon, onClick, autoFocus}: IInput) => {

        return (
            <div className='input'>
                <button onClick={onClick} className='btn btn-ghost' >
                    <i className={icon ? icon : "fa-solid fa-magnifying-glass"}/>
                </button>
                <input autoFocus={autoFocus} type={type ? type : 'text'} placeholder={placeholder} className='input__input'
                       onChange={onChange}
                       value={value}/>
            </div>

        );
    }
)
