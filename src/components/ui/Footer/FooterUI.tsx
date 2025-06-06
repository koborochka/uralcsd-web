//import s from "./Footer.module.scss";
import './Footer.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@components/Shared/SvgIcon';
import { FooterUIProps } from './type';
//import { Social } from "@components/Shared/Social";

export const FooterUI: React.FC<FooterUIProps> = React.memo(({ contactsInfo }) => {
    const { phones, email, workingDaysText, workingHours, daysOff } = contactsInfo;

    return (
        <footer className="footer">
            <div className="wrap footer__wrap">
                <div className="footer__left">
                    <Link to="/" className="logo footer__logo" aria-label="logo">
                        <SvgIcon id="ellipseMock" title="Logotype" />
                    </Link>
                    <p className="footer__copyright">
                        &copy; 2025 Центр современной драматургии Екатеринбург. Все права защищены.
                    </p>
                    {/* <Social className="footer__social-media" /> */}
                    <div className="footer__social-media">
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="VK icon" />
                        </a>
                        <a href="#" className="footer__social-media-item">
                            <SvgIcon id="ellipseMock" title="Telegram icon" />
                        </a>
                    </div>
                </div>

                <div className="footer__contacts">
                    <h3 className="footer__title">КОНТАКТЫ</h3>
                    <p className="footer__contacts-text">Номер кассы</p>
                    <a href={`tel:${phones?.boxOffice?.replace(/[^\d+]/g, '')}`} className="footer__phone">
                        {phones?.boxOffice}
                    </a>
                    <p className="footer__contacts-text">Основной телефон</p>
                    <a href={`tel:${phones?.main?.replace(/[^\d+]/g, '')}`} className="footer__phone">
                        {phones?.main}
                    </a>
                    <p className="footer__contacts-text">Email</p>
                    <a href={`mailto:${email}`} className="footer__email">
                        {email}
                    </a>
                </div>

                <div className="footer__schedule">
                    <h3 className="footer__title">ГРАФИК РАБОТЫ</h3>
                    <div className="footer__work-hours-container">
                        <p className="footer__work-days">Рабочие дни</p>
                        <div className="footer__work-time">
                            <span className="footer__work-time-text">{workingDaysText}</span>
                            <div className="footer__work-time-line">
                                <span className="footer__work-time-start">{workingHours?.start}</span>
                                <div className="footer__work-time-divider"></div>
                                <span className="footer__work-time-end">{workingHours?.end}</span>
                            </div>
                        </div>
                    </div>
                    <p className="footer__off-days">Выходные дни</p>
                    <p className="footer__off-days-text">{daysOff?.join(', ')}</p>
                </div>
            </div>
        </footer>
    );
});
