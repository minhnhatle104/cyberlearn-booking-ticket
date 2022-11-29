import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Header(props) {
    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value)
    };

    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' alt='cyberlearn.edu.vn' />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white "
                            activeClassName='border-b-2 border-white'
                        >
                            {t("Home")}
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/contact"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                            activeClassName='border-b-2 border-white'
                        >
                             {t("Contact")}
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/news"
                            className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                            activeClassName='border-b-2 border-white'
                        >
                             {t("News")}
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button onClick={() => {
                        history.push("/login")
                    }} className="self-center px-8 py-3 rounded"> {t("Signin")}</button>
                    <button className="self-center px-8 py-3 font-semibold rounded text-gray-50"> {t("Signup")}</button>

                    <Select
                        defaultValue="en"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: 'en',
                                label: 'ENG',
                            },
                            {
                                value: 'vi',
                                label: 'VNI',
                            },
                            {
                                value: 'chi',
                                label: 'CHI',
                            },
                        ]}
                    />

                </div>
            </div>
        </header>
    )
}
