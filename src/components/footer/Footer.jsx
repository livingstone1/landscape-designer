import React from 'react'
import telegram from '../../resources/logo/telegram.png';
import mail from '../../resources/logo/mail.png';

import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="page-footer">
            <span className="page-footer__text">© Иванова Марина, 2020</span>
            <a className="page-footer__telegram" href="https://t.me/chalkals" target="_blank">
                <img src={telegram}/></a>
            <a className="page-footer__mail" data-content="marinayporogtish@gmail.com"
               href="mailto:marinayporogtish@gmail.com" data-type="mail">
                <img src={mail}/></a>
        </footer>
    )
}
