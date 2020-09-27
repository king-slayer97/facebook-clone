import React,{useState} from 'react'
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useSelector} from 'react-redux';
import db from './firebase';
import firebase from 'firebase';
// import {useSelector} from 'react-redux';
import {pic_url} from './const';

function MessageSender() {
    const dp = useSelector((store) => { return store.profilePic });
    const user = useSelector((store) => { return store.user });
    const placeholder = `What's on your mind, ${user}?`;
    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const handleSubmit = e => {
        e.preventDefault();//prevent refresh

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : dp,
            username: user,
            image: imageUrl,
        });
        //some clever db stuff 

        setInput('');
        setImageUrl('');

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={dp}/>
                <form>
                    <input 
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                    className="messageSender__input" 
                    type="text" 
                    placeholder = {placeholder} />
                    <input
                    value={imageUrl}
                    onChange={e=> setImageUrl(e.target.value)} 
                    type="url" 
                    placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red',}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green',}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange',}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
