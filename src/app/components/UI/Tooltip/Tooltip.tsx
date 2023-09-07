import React from 'react';

interface ITooltip {
    btn?: boolean
    title: any
    description: string
    className?: string
}

export const Tooltip = ({btn, title, description,className}: ITooltip) => {
    return (
        <div className={`${className} tooltip tooltip-bottom`} data-tip={description}>
            {
                btn ? <button className="btn">{title}</button> : title
            }
        </div>
    );
};
