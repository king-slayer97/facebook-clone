import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fb_url } from './const';
import { useSelector } from 'react-redux';

function Header() {
    const dp = useSelector((store) => { return store.profilePic });
    const user = useSelector((store) => { return store.user });
    return (
        <div className="header">
            <div className="header_left">
                <img src={fb_url} alt='fb logo' />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option header_option--active">
                    <HomeIcon />
                </div>
                <div className="header_option">
                    <FlagIcon />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={dp} />
                    <h4>{user}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    );
}

export default Header;
