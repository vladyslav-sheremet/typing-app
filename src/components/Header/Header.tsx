import HeaderDesktop from '../HeaderDesktop'
import HeaderMobile from '../HeaderMobile'

import './Header.scss'

import { HeaderProps } from './index'

const Header = ({ restartHandler, darkModeHandler, darkMode }: HeaderProps) => (
    <>
        <HeaderDesktop
            restartHandler={restartHandler}
            darkModeHandler={darkModeHandler}
            darkMode={darkMode}
        />
        <HeaderMobile
            darkMode={darkMode}
        />
    </>
)


export default Header