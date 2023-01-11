import React from 'react'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline"
import css from './Footer.module.css'

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.Logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue orlando, Fl 32801</span>
                    </span>
                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:976-692-2484">976-692-2484</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon}/>
                        <a href="mailto:support@amazon.com">support@amazon.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon}/>
                            <span>Sign In</span>
                      </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon}/>
                            <a href="/About">About Us</a>
                      </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.details}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon}/>
                            <span>Safety Privacy & Terms</span>
                      </span>
                    </div>
                </div>
            </div>
                <div className={css.copyRight}>
                    <span>CopyRight ©2023 by Amazon, Inc.</span>
                    <span>All rights reserved</span>
                </div>
        </div>
    )
}

export default Footer
