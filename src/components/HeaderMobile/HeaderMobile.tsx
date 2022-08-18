import { useState } from 'react'

import './HeaderMobile.scss'

import { HeaderMobileProps } from './index'

const HeaderMobile = ({ darkMode }: HeaderMobileProps) => {
    const [menu, setMenu] = useState<boolean>(false)

    const menuHandler = () => {
        setMenu(!menu)
    }
    return (
        <header className='header header__mobile'>
            <div className="header__mobile-wrapper">
                <a className='header__logo-big' href="#">
                    <img src={darkMode || menu ? 'big-dark-logo.svg' : 'big-light-logo.svg'} alt="" />
                </a>
                <a className='header__logo-small' href="#">
                    <img src={darkMode || menu ? 'small-dark-logo.svg' : 'small-light-logo.svg'} alt="" />
                </a>
                <button type='button' onClick={menuHandler}>
                    <img className='header__mobile-burger--big' src={menu ? 'burger-white.svg' : darkMode ? 'burger-dark.svg' : 'burger-light.svg'} alt="" />
                    <img className='header__mobile-burger--small' src={menu ? 'close.svg' : darkMode ? 'burger-dark.svg' : 'burger-light.svg'} alt="" />
                </button>
            </div>

            <nav className={`header__mobile-menu ${menu ? 'active' : ''}`}>
                <ul>
                    <li className='header__mobile-item header__mobile-item--big'><a href='#'>Тренажер</a></li>
                    <li className='header__mobile-item header__mobile-item--big'><a href='#'>Тест</a></li>
                    <li className='header__mobile-item header__mobile-item--big'><a href='#'>Навчання</a></li>

                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Для вчителів</a></li>
                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Про нас</a></li>
                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Рейтинг</a></li>
                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Допомога</a></li>
                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Контакти</a></li>
                    <li className='header__mobile-item header__mobile-item--small'><a href='#'>Підтримати проєкт</a></li>
                </ul>
                <div className="header__mobile-menu-inner">
                    <img className='header__avatar header__mobile-avatar' src="avatar.jpg" alt="" />
                    <div className="header__mobile-menu-wrapper">
                        <p>Alex</p>
                        <div className="header__mobile-menu-score">
                            <img src="coin.svg" alt="" />
                            <p className='header__mobile-menu-score-text'>35 543</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderMobile