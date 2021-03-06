import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {ExpandMoreOutlined} from '@material-ui/icons';
import {useSelector} from 'react-redux';

function Sidebar() {
    const dp = useSelector((store) => { return store.profilePic });
    const user = useSelector((store) => { return store.user });
    return (
        <div className="sidebar">
            <SidebarRow title={user} src={dp}/>
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon}/>
            <SidebarRow title="Pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title="Friends" Icon={PeopleIcon}/>
            <SidebarRow title="Messenger" Icon={ChatIcon}/>
            <SidebarRow title="MarketPlace" Icon={StorefrontIcon}/>
            <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
            <SidebarRow title="MarketPlace" Icon={ExpandMoreOutlined}/>
        </div>
    )
}

export default Sidebar
