import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './UIMenu.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';

export const Logo = () => {
    return (
        <Link className="Logo" to="/">
            <svg viewBox="0 0 40 23" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.8889 13.3333C30.1162 13.3333 31.1111 12.3384 31.1111 11.1111C31.1111 9.88381 30.1162 8.88889 28.8889 8.88889C27.6616 8.88889 26.6667 9.88381 26.6667 11.1111C26.6667 12.3384 27.6616 13.3333 28.8889 13.3333Z" />
                <path d="M11.1111 17.7778C7.42963 17.7778 4.44444 14.7926 4.44444 11.1111H0C0 17.2469 4.97531 22.2222 11.1111 22.2222C17.2469 22.2222 22.2222 17.2469 22.2222 11.1111H17.7778C17.7778 14.7926 14.7926 17.7778 11.1111 17.7778Z" />
                <path d="M28.8889 0C22.7531 0 17.7778 4.97531 17.7778 11.1111H22.2222C22.2222 7.42963 25.2074 4.44445 28.8889 4.44445C32.5704 4.44445 35.5555 7.42963 35.5555 11.1111H40C40 4.97531 35.0247 0 28.8889 0Z" />
            </svg>
        </Link>
    )
}

export const MenuSocialMedia = () => {
    return (
        <Fade collapse timeout={1500} left>
            <div className="MenuSocialMedia">
                <a target='_blank' rel='noopener noreferrer' href="https://www.behance.net/santiagortizgue">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.66669 4.16667H5.83335C7.6743 4.16667 9.16669 5.65906 9.16669 7.50001C9.16669 8.31637 8.87321 9.06419 8.38602 9.64373C9.35324 10.2272 10 11.2881 10 12.5C10 14.341 8.50764 15.8333 6.66669 15.8333H1.66669V10.8333V9.16667V4.16667ZM3.33335 14.1667V10.8333H5.83335H6.66669C7.58716 10.8333 8.33335 11.5795 8.33335 12.5C8.33335 13.4205 7.58716 14.1667 6.66669 14.1667H3.33335ZM11.6667 5.00001V6.66667H17.5V5.00001H11.6667ZM14.6982 14.1667C15.5653 14.1667 16.0981 13.9894 16.3826 13.7225C16.5324 13.5819 16.5949 13.4255 16.5949 13.3333H18.2616C18.2616 14.6893 17.0422 15.8333 14.6982 15.8333C12.3789 15.8333 10.8334 14.3299 10.8334 11.6667C10.8334 9.19492 12.1504 7.50001 14.5834 7.50001C17.0163 7.50001 18.3334 9.19492 18.3334 11.6667V12.5H12.5739C12.8001 13.6476 13.5396 14.1667 14.6982 14.1667ZM16.5955 10.8333C16.3886 9.74187 15.7278 9.16667 14.5834 9.16667C13.4389 9.16667 12.7781 9.74187 12.5712 10.8333H16.5955ZM3.33335 9.16667V5.83334H5.83335C6.75383 5.83334 7.50002 6.57953 7.50002 7.50001C7.50002 8.42048 6.75383 9.16667 5.83335 9.16667H3.33335Z" fill="#232323" />
                    </svg>
                </a>
                <a target='_blank' rel='noopener noreferrer' href="https://github.com/SantiagoOrtiz0630">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.34769 16.6697C8.35202 16.7721 8.34098 16.872 8.31942 16.9731C8.28154 17.1507 8.20839 17.3387 8.10484 17.5125C7.81049 18.0063 7.31045 18.3358 6.66667 18.3358C5.15008 18.3358 4.55486 17.5917 3.8096 15.7286C3.30486 14.4667 3.06675 14.1691 2.5 14.1691L2.5 12.5024C4.01658 12.5024 4.6118 13.2465 5.35706 15.1096C5.8618 16.3715 6.09992 16.6691 6.66667 16.6691C6.66667 16.4273 6.66335 16.2131 6.65639 15.923C6.64005 15.2432 6.63817 15.1044 6.66783 14.9227C6.67969 14.5259 6.78211 14.2444 6.9875 13.965C5.12766 13.5602 3.87327 12.724 3.15331 11.3678L2.88361 10.7336C2.62087 9.97849 2.5 9.12293 2.5 8.13485C2.5 6.99688 2.84696 5.9794 3.49502 5.12888C3.29286 4.32043 3.32054 3.33267 3.76692 2.21716L3.91278 1.85265L4.28672 1.73304C4.33679 1.71702 4.39765 1.70256 4.46916 1.69134C5.1973 1.57706 6.23342 1.84972 7.58796 2.71736C8.38647 2.53226 9.22737 2.4388 10.074 2.4388C10.8305 2.4388 11.5829 2.51507 12.3014 2.66544C13.6192 1.84016 14.6269 1.58132 15.3354 1.69148C15.4061 1.70247 15.4663 1.71666 15.516 1.73241L15.8923 1.85173L16.0383 2.21846C16.4288 3.19907 16.4958 4.10279 16.3537 4.89356C17.0987 5.78749 17.5 6.88647 17.5 8.13485C17.5 9.18729 17.4246 9.97868 17.2079 10.7486L16.9791 11.3764C16.3802 12.7311 15.0596 13.5767 13.0229 13.9794C13.2346 14.2725 13.3333 14.57 13.3333 15.0024V15.8358C13.3333 16.2396 13.3333 16.252 13.3324 16.6691C13.3343 16.699 13.3368 16.7137 13.3395 16.7229C13.3389 16.7231 13.3333 18.3358 13.3333 18.3358C12.6235 18.3358 12.0957 17.9896 11.8361 17.4435C11.7016 17.1604 11.6614 16.8901 11.6667 16.6573V15.0024C11.6667 14.9326 11.6642 14.9285 11.4941 14.7584C11.0392 14.3035 10.8333 13.9603 10.8333 13.3358V12.5819L11.5834 12.5066C13.8161 12.2824 15.0304 11.6623 15.4331 10.7565L15.6212 10.2422C15.7709 9.70434 15.8333 9.04937 15.8333 8.13485C15.8333 7.16311 15.4941 6.36038 14.8525 5.71904L14.4998 5.36652L14.6438 4.88912C14.7716 4.465 14.802 3.96315 14.6668 3.39074C14.6443 3.39643 14.6209 3.40264 14.5967 3.40939C14.1505 3.53362 13.5934 3.80017 12.922 4.2489L12.6158 4.45357L12.2584 4.36493C11.567 4.19349 10.824 4.10547 10.074 4.10547C9.23989 4.10547 8.41539 4.21159 7.65372 4.41924L7.282 4.52057L6.96402 4.30304C6.26969 3.82805 5.69288 3.54558 5.23035 3.41363C5.19732 3.4042 5.16587 3.39577 5.13597 3.38826C4.9746 4.05075 5.03843 4.59504 5.20186 5.00346L5.39782 5.49317L5.03907 5.87984C4.46741 6.49599 4.16667 7.2458 4.16667 8.13485C4.16667 8.94881 4.26195 9.62328 4.43657 10.1313L4.65464 10.6475C5.19978 11.6705 6.35767 12.2859 8.42215 12.5072L9.16667 12.587V13.3358C9.16667 13.9603 8.96076 14.3035 8.50592 14.7584C8.33576 14.9285 8.33333 14.9326 8.33333 15.0024L8.31897 15.1565C8.30946 15.207 8.30946 15.3375 8.32257 15.883C8.3286 16.1339 8.33204 16.3325 8.33303 16.54C8.34299 16.583 8.34449 16.6107 8.34769 16.6697Z" fill="#232323" />
                    </svg>
                </a>
                <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/santiagortizgue">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3334 1.66666H6.66669C3.90526 1.66666 1.66669 3.90523 1.66669 6.66666V13.3333C1.66669 16.0947 3.90526 18.3333 6.66669 18.3333H13.3334C16.0948 18.3333 18.3334 16.0947 18.3334 13.3333V6.66666C18.3334 3.90523 16.0948 1.66666 13.3334 1.66666ZM3.33335 6.66666C3.33335 4.82571 4.82574 3.33332 6.66669 3.33332H13.3334C15.1743 3.33332 16.6667 4.82571 16.6667 6.66666V13.3333C16.6667 15.1743 15.1743 16.6667 13.3334 16.6667H6.66669C4.82574 16.6667 3.33335 15.1743 3.33335 13.3333V6.66666ZM10 14.1667C7.69883 14.1667 5.83335 12.3012 5.83335 9.99999C5.83335 7.6988 7.69883 5.83332 10 5.83332C12.3012 5.83332 14.1667 7.6988 14.1667 9.99999C14.1667 12.3012 12.3012 14.1667 10 14.1667ZM10 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99999C12.5 8.61928 11.3807 7.49999 10 7.49999C8.61931 7.49999 7.50002 8.61928 7.50002 9.99999C7.50002 11.3807 8.61931 12.5 10 12.5ZM15 5.83332C15 6.29356 14.6269 6.66666 14.1667 6.66666C13.7064 6.66666 13.3334 6.29356 13.3334 5.83332C13.3334 5.37309 13.7064 4.99999 14.1667 4.99999C14.6269 4.99999 15 5.37309 15 5.83332Z" fill="#232323" />
                    </svg>
                </a>
                <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/santiago-ortiz-guevara-9a9069195">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.33335 1.66666H16.6667C17.5872 1.66666 18.3334 2.41285 18.3334 3.33332V16.6667C18.3334 17.5871 17.5872 18.3333 16.6667 18.3333H3.33335C2.41288 18.3333 1.66669 17.5871 1.66669 16.6667V3.33332C1.66669 2.41285 2.41288 1.66666 3.33335 1.66666ZM3.33335 3.33332V16.6667H16.6667V3.33332H3.33335ZM10.8334 7.49999C10.4019 7.49999 9.94606 7.63187 9.54348 7.87678L9.16669 7.49999H8.33335V13.3333H10V9.99999C10 9.5202 10.495 9.16666 10.8334 9.16666H11.6667C12.0051 9.16666 12.5 9.5202 12.5 9.99999V13.3333H14.1667V9.99999C14.1667 8.45597 12.8283 7.49999 11.6667 7.49999H10.8334ZM6.66669 6.66666C7.12692 6.66666 7.50002 6.29356 7.50002 5.83332C7.50002 5.37309 7.12692 4.99999 6.66669 4.99999C6.20645 4.99999 5.83335 5.37309 5.83335 5.83332C5.83335 6.29356 6.20645 6.66666 6.66669 6.66666ZM5.83335 7.49999V13.3333H7.50002V7.49999H5.83335Z" fill="#232323" />
                    </svg>
                </a>
            </div>
        </Fade>
    )
}

export const Menu = observer(() => {

    const stores = useContext(Store);

    function handleHover(e) {
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
                <Fade collapse timeout={750}>
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
                </Fade>
            )
        } else {
            return (
                <svg className="Menu-icon" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V2.8H20V0H0ZM0 10V7.20001H20V10H0ZM0 17.2V14.4H20V17.2H0Z" />
                </svg>)
        }
    }

    return (
        <Fade collapse timeout={1500} right>
            <div className="Menu" onMouseOver={handleHover} onMouseLeave={handleLeave}>
                {displayMenu()}
            </div>
        </Fade>
    )
});

export const Message = () => {

    return (
        <Fade collapse timeout={1500} right>
            <a href="mailto:sdot.about@gmail.com" className="Message">
                <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.74999 2.75H19.25C20.2625 2.75 21.0833 3.57081 21.0833 4.58333V17.4167C21.0833 18.4292 20.2625 19.25 19.25 19.25H2.74999C1.73747 19.25 0.916656 18.4292 0.916656 17.4167V4.58333C0.916656 3.57081 1.73747 2.75 2.74999 2.75ZM2.74999 8.8166V17.4167H19.25V8.81699L11 12.942L2.74999 8.8166ZM2.74999 6.76683L11 10.8923L19.25 6.76726V4.58333H2.74999V6.76683Z" />
                </svg>
            </a>
        </Fade>
    )
}