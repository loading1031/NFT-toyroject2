import { Img } from 'react-image'
import { FaUserAlt, FaUserEdit, FaRegImage } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownloadOff, TbDownload } from 'react-icons/tb'
import { Link } from 'react-router-dom'

//INTERNAL IMPORT
import Style from './Profile.module.css'
import images from '../../../img'

const Profile = () => {
    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <Img
                    src={images.user1} alt="user profile"
                    width={50} height={50}
                    className={Style.profile_account_img}
                />
                <div className={Style.profile_account_info}>
                    <p>Shoaib bhai</p>
                    <small>0X347635937597933...</small>
                </div>
            </div>

            <div className={Style.profie_menu}>
                <div className={Style.profie_menu_one}>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserAlt />
                        <p>
                            <Link to={'/myprofile'}>My Profile</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <FaRegImage />
                        <p>
                            <Link to={'/my-items'}>My Items</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserEdit />
                        <p>
                            <Link to={'/edit-profile'}>Edit Profile</Link>
                        </p>
                    </div>
                </div>

                <div className={Style.profie_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link to={'/help'}>Help</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <TbDownload />
                        <p>
                            <Link to={'/disconnect'}>Disconnect</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile