import Dropdown from '../Dropdown'

import './HeaderDesktop.scss'

import { HeaderDesktopProps } from './index'

const HeaderDesktop = ({restartHandler, darkModeHandler, darkMode}: HeaderDesktopProps) => (
        <header className='header header__desktop'>
            <div className="header__inner">
                <a className='header__logo' href="#">
                    <img src={darkMode ? 'big-dark-logo.svg' : 'big-light-logo.svg'} alt="" />
                </a>
                <nav>
                    <ul className='header__nav'>
                        <li className={`header__nav-item ${darkMode ? 'header__nav-item-dark' : 'header__nav-item-light'}`}><a href='#'>Тест</a></li>
                        <li className={`header__nav-item ${darkMode ? 'header__nav-item-dark' : 'header__nav-item-light'}`}><a href='#'>Тренажер</a></li>
                        <li className={`header__nav-item ${darkMode ? 'header__nav-item-dark' : 'header__nav-item-light'}`}><a href='#'>Навчання</a></li>
                        <Dropdown darkMode={darkMode} />
                    </ul>
                </nav>
            </div>
            <div className="header__actions">
                <button className='header__restart-button' type='button' onClick={restartHandler}>
                    <img src="restart.svg" alt="" />
                </button>
                <button className='header__mode-button' type='button' onClick={darkModeHandler}>
                    <img src={darkMode ? "light-mode.svg" : "dark-mode.svg"} alt="" />
                </button>
                <img className='header__avatar' src="avatar.jpg" alt="" />
            </div>
        </header>
)

export default HeaderDesktop