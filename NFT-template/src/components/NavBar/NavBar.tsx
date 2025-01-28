import { useState, useEffect } from 'react'
//----IMPORT ICON
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//INTERNAL IMPORT
import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from '../components-index';
import images from "../../img";

const NavBar = () => {
    //----USESTATE COMPONENTS
    const [menuState, setMenuState] = useState({
        discover: false,
        help: false,
        notification: false,
        profile: false,
    });
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const menu: string = (e.target as HTMLElement).innerText;

        setMenuState(() => ({
            discover: menu === "Discover",
            help: menu === "Help Center",
            notification: false,
            profile: false,
        }));
    }

    const openNotification = () => {
        if (!(menuState.notification)) {
            setMenuState(() => ({
                discover: false,
                help: false,
                notification: true,
                profile: false
            }))
        } else {
            setMenuState((prevState) => ({
                ...prevState, // 기존 상태 복사
                notification: false,
            }));
        }
    }

    const openProfile = () => {
        if (!(menuState.profile)) {
            setMenuState(() => ({
                discover: false,
                help: false,
                notification: false,
                profile: true
            }))
        } else {
            setMenuState((prevState) => ({
                ...prevState, // 기존 상태 복사
                profile: false,
            }));
        }
    }

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true)
        } else {
            setOpenSideMenu(false);
        }
    }

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left} >
                    <div className={Style.logo}>
                        <Img src={images.logo} alt="NFT MARKET PLACE" width={100} height={100} />
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type='text' placeholder='Search NFT' />
                            <BsSearch onClick={() => { }} className={Style.search_icon} />
                        </div>
                    </div>
                </div>
                {/* END OF LEFT SECTION */}
                <div className={Style.navbar_container_right}>

                    {/* DISCOVER MENU */}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e) => { openMenu(e) }}>Discover</p>
                        {menuState.discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}
                    </div>

                    {/* HELP CENTER MENU */}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e) => { openMenu(e) }}>Help Center</p>
                        {menuState.help && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <HelpCenter />
                            </div>
                        )}
                    </div>

                    {/* NOTIFICATION */}
                    <div className={Style.navbar_container_right_notify}>
                        <MdNotifications className={Style.notify} onClick={() => openNotification()} />
                        {menuState.notification && <Notification />}
                    </div>

                    {/* CREATE BUTTON SECTION */}
                    <div className={Style.navbar_container_right_button}>
                        <Button btnName="Create" handleClick={() => { }} />
                    </div>

                    {/* USER PROFILE */}
                    <div className={Style.navbar_container_right_profile}>
                        <Img src={images.user1} alt="Profile" width={40} onClick={() => openProfile()} />
                        {menuState.profile && <Profile />}
                    </div>

                    {/* MENU BUTTON */}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
                    </div>
                </div>
            </div>

            {/* SIDEBAR COMPONENT */}
            {openSideMenu && (
                <div className={Style.sideBar}>
                    <SideBar setOpenSideMenu={setOpenSideMenu} />
                </div>
            )}
        </div>
    )
}

export default NavBar