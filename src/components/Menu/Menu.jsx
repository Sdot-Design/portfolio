import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';

const Menu = () => {

    const stores = useContext(Store);

    function handleHover(e){
        e.preventDefault();
        stores.uiStore.setDisplayMenu(true);
    }

    function handleLeave(e) {
        e.preventDefault();
        stores.uiStore.setDisplayMenu(false);
    }

    function displayMenu() {
        if (stores.uiStore.displayMenu) {
            return (
                <div className="Menu-container">
                    {stores.uiStore.arrayLink.map((link) => {
                        let stringClass = (stores.uiStore.actualLink === link.id) ? "Menu-item Menu-itemSelected" : "Menu-item";
                        return (
                            <Link key={link.id} to={link.link}>
                                <h2 className={stringClass}>{link.name}</h2>
                            </Link>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <svg className="Menu-icon" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V2.8H20V0H0ZM0 10V7.20001H20V10H0ZM0 17.2V14.4H20V17.2H0Z" />
                </svg>)
        }
    }

    return (
        <div className="Menu" onMouseOver={handleHover} onMouseLeave={handleLeave}>
            {displayMenu()}
        </div>
    )
}

export default observer(Menu);