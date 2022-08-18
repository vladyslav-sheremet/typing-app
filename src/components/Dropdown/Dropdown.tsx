import { useState } from 'react'

import './Dropdown.scss'

import { DropdownProps } from './index'

const Dropdown = ({ darkMode }: DropdownProps) => {
    const [active, setActive] = useState<boolean>(false)

    const dropdownHandler = () => {
        console.log('dropdownHandler')
        setActive(!active)
    }
    return (
        <>
            <li className={`header__nav-item dropdown__button ${active ? 'active' : ''} ${darkMode ? 'header__nav-item-dark' : 'header__nav-item-light'}`} onClick={dropdownHandler}>
                Більше
                <img className='dropdown__image' src="arrow-down.svg" alt="" />
                {active && (
                    <div className={`dropdown__wrapper ${darkMode ? 'dropdown__wrapper--dark' : 'dropdown__wrapper--light'}`}>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Для вчителів</a></div>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Про нас</a></div>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Рейтинг</a></div>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Допомога</a></div>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Контакти</a></div>
                        <div className={`dropdown__item ${darkMode ? 'dark' : ''}`}><a href='#'>Підтримати проєкт</a></div>
                    </div>
                )}
            </li>
        </>
    )
}

export default Dropdown