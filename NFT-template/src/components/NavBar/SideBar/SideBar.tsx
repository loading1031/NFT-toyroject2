import { Dispatch, SetStateAction, useState } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

interface SideBarProps {
    setOpenSideMenu: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ setOpenSideMenu }: SideBarProps) => {
    //----USESTATE
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    //----DISCOVER NAVIGATION MENU
    const discover = [
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "Search",
            link: "search",
        },
        {
            name: "Author Profile",
            link: "author-profile",
        },
        {
            name: "NFT Details",
            link: "NFT-details",
        },
        {
            name: "Account Setting",
            link: "account-setting",
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];
    //----HELP CENTER
    const helpCenter = [
        {
            name: "About",
            link: "about",
        },
        {
            name: "Contact Us",
            link: "contact-us",
        },
        {
            name: "Sign Up",
            link: "sign-up",
        },
        {
            name: "Subscription",
            link: "subscription",
        },
    ];

    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true)
        } else {
            setOpenDiscover(false)
        }
    }

    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true)
        } else {
            setOpenHelp(false)
        }
    }

    const closeSideBar = () => {
        setOpenSideMenu(false)
    }

    return (
        <div className={Style.sideBar}>
            <GrClose
                className={Style.sideBar_closeBtn}
                onClick={() => closeSideBar()}
            />
            <div className={Style.sideBar_box}>
                <Img src={images.logo} alt="logo" width={150} height={150} />
                <p>
                    Discover the most outstanding articles on all topics of NFT & your own
                    stories and share them
                </p>
                <div className={Style.sideBar_social}>
                    <a href="#">
                        <TiSocialFacebook />
                    </a>
                    <a href="#">
                        <TiSocialLinkedin />
                    </a>
                    <a href="#">
                        <TiSocialTwitter />
                    </a>
                    <a href="#">
                        <TiSocialYoutube />
                    </a>
                    <a href="#">
                        <TiSocialInstagram />
                    </a>
                </div>
            </div>

            <div className={Style.sideBar_menu}>
                <div>
                    <div
                        className={Style.sideBar_menu_box}
                        onClick={() => openDiscoverMenu()}
                    >
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>
                    {openDiscover && (
                        <div className={Style.sideBar_discover}>
                            {discover.map((el, i) => (
                                <p key={i + 1}>
                                    <Link to={`/${el.link}`}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                    <div>
                        <div
                            className={Style.sideBar_menu_box}
                            onClick={() => openHelpMenu()}
                        >
                            <p>Help Center</p>
                            <TiArrowSortedDown />
                        </div>
                        {openHelp && <div className={Style.sideBar_discover}>
                            {helpCenter.map((el, i) => (
                                <p key={i + 1}>
                                    <Link to={`/${el.link}`}>{el.name}</Link>
                                </p>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>

            <div className={Style.sideBar_button}>
                <Button btnName="Create" />
                <Button btnName="Connect Wallet" />
            </div>
        </div>
    );
};

export default SideBar;
