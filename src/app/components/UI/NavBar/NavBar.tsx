import React from 'react';
import routes from "../../../lib/routes";
import Search from "../Search/Search";



export const NavBar = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-20">
            <div className="navbar-start">

            </div>
            <div className={`navbar-center `}>
                <a href={'#'+routes.HOME} aria-current="page" aria-label="Homepage"
                      className="flex-0 btn btn-ghost gap-1 px-2 md:gap-2" data-svelte-h="svelte-11qcss2">
                    <img src={'../logo.svg'} alt={'ставки'}
                           width={50} height={50}/>
                    <div className="font-title inline-flex text-lg md:text-2xl">
                        <span className="lowercase text-[#FF004F]">Bet</span>
                        <span className="uppercase text-[#0385F2]">List</span></div>
                </a>
            </div>
            <div className="navbar-end">
                <Search/>
            </div>
        </div>
    );
};
