import React from 'react'
import logo from '../../resources/logo/logo.png';
import './Header.scss'

export const Header = () => {
    return (
        <header className="page-header">
            <img className="page-header__logo" src={logo} />
            <span className="page-header__name">ЛАЕР — ландшафтная мастерская</span>
            <span className="page-header__tagline">«вдохновляем на перемены»</span>
        </header>
    )
}
